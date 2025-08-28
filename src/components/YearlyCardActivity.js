import React, { useState } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { GridRows } from '@visx/grid';
import { ParentSize } from '@visx/responsive';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import { format } from 'd3-format';
import { motion } from 'framer-motion';

// Data for 13 months (Aug 2024 → Aug 2025) matching Figma design
const data = [
  { month: 'Aug 2024', value: 4000, highlighted: true },
  { month: 'Sep', value: 5000, highlighted: false },
  { month: 'Oct', value: 6000, highlighted: false },
  { month: 'Nov', value: 3000, highlighted: false },
  { month: 'Dic', value: 4000, highlighted: false },
  { month: 'Jan', value: 3000, highlighted: false },
  { month: 'Feb', value: 6500, highlighted: false },
  { month: 'Mar', value: 4500, highlighted: false },
  { month: 'Apr', value: 2000, highlighted: false },
  { month: 'May', value: 5000, highlighted: false },
  { month: 'Jun', value: 4500, highlighted: false },
  { month: 'Jul', value: 6000, highlighted: false },
  { month: 'Aug 2025', value: 3500, highlighted: true },
];

// Accessors
const getMonth = (d) => d.month;
const getValue = (d) => d.value;

// Tooltip styles
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: 'white',
  fontSize: '12px',
  fontFamily: 'SF Pro Display, sans-serif',
  padding: '8px 12px',
  borderRadius: '6px',
  border: 'none',
};

// Animated Bar component
const AnimatedBar = ({ x, y, width, height, fill, rx, ry, onMouseOver, onMouseOut, onMouseMove, delay, isHighlighted }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Create gradient for highlighted bars
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      {isHighlighted && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="40.864%" stopColor="#553ed5" />
            <stop offset="137.74%" stopColor="#bcb2f4" />
          </linearGradient>
        </defs>
      )}
      <motion.rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={isHighlighted ? `url(#${gradientId})` : fill}
        rx={rx}
        ry={ry}
        initial={{ scaleY: 0, transformOrigin: 'bottom' }}
        animate={{ 
          scaleY: isHovered ? 1.03 : 1,
          filter: isHovered && isHighlighted ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' : 'none'
        }}
        transition={{ 
          duration: 0.6,
          delay: delay,
          ease: 'easeOut'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          onMouseOut();
        }}
        onMouseOver={onMouseOver}
        onMouseMove={onMouseMove}
        style={{ cursor: 'pointer' }}
      />
    </>
  );
};

// Chart component
function BarChart({ width, height }) {
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  });

  // Scales
  const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(getMonth),
    padding: 0.4,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, 7000],
    nice: false,
  });

  return (
    <div ref={containerRef}>
      <svg width={width} height={height}>
        {/* Grid lines */}
        <GridRows
          left={margin.left}
          scale={yScale}
          width={xMax}
          stroke="#f3f4f6"
          strokeOpacity={0.3}
          numTicks={8}
          pointerEvents="none"
        />
        
        <Group left={margin.left} top={margin.top}>
          {data.map((d, i) => {
            const month = getMonth(d);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(getValue(d)) ?? 0);
            const barX = xScale(month);
            const barY = yMax - barHeight;
            
            return (
              <AnimatedBar
                key={`bar-${month}-${i}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="#eceff5"
                rx={4}
                ry={4}
                delay={i * 0.1}
                isHighlighted={d.highlighted}
                onMouseOver={(event) => {
                  const eventSvgCoords = localPoint(event);
                  showTooltip({
                    tooltipData: d,
                    tooltipTop: eventSvgCoords?.y,
                    tooltipLeft: eventSvgCoords?.x,
                  });
                }}
                onMouseMove={(event) => {
                  const eventSvgCoords = localPoint(event);
                  showTooltip({
                    tooltipData: d,
                    tooltipTop: eventSvgCoords?.y,
                    tooltipLeft: eventSvgCoords?.x,
                  });
                }}
                onMouseOut={hideTooltip}
              />
            );
          })}
        </Group>

        {/* Y Axis */}
        <AxisLeft
          left={margin.left}
          top={margin.top}
          scale={yScale}
          numTicks={8}
          tickFormat={(value) => format('$,.0f')(value)}
          stroke="#e5e7eb"
          tickStroke="#e5e7eb"
          tickLabelProps={(value) => ({
            fill: value === 7000 ? '#553ed5' : '#d9d8d8',
            fontSize: 14,
            fontWeight: 'bold',
            textAnchor: 'end',
            dy: '0.33em',
            fontFamily: 'SF Pro Display, sans-serif',
          })}
        />

        {/* X Axis - Custom implementation for multi-line labels */}
        <Group>
          {data.map((d, i) => {
            const month = getMonth(d);
            const x = (xScale(month) ?? 0) + xScale.bandwidth() / 2 + margin.left;
            const y = yMax + margin.top + 20;
            
            if (month.includes('Aug')) {
              // Multi-line label for Aug dates
              const [monthName, year] = month.split(' ');
              return (
                <Group key={`label-${i}`}>
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    fill="#333333"
                    fontSize="14"
                    fontWeight="bold"
                    fontFamily="SF Pro Display, sans-serif"
                  >
                    {monthName}
                  </text>
                  <text
                    x={x}
                    y={y + 16}
                    textAnchor="middle"
                    fill="#333333"
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="SF Pro Display, sans-serif"
                  >
                    {year}
                  </text>
                </Group>
              );
            } else {
              // Single line label for other months
              return (
                <text
                  key={`label-${i}`}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fill="#d7d7d7"
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="SF Pro Display, sans-serif"
                >
                  {month}
                </text>
              );
            }
          })}
        </Group>
        
        {/* X Axis line only */}
        <line
          x1={margin.left}
          x2={margin.left + xMax}
          y1={yMax + margin.top}
          y2={yMax + margin.top}
          stroke="#e5e7eb"
          strokeWidth={1}
        />
      </svg>

      {tooltipOpen && tooltipData && (
        <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
          <div>
            <strong>{tooltipData.month}</strong>
            <br />
            {format('$,.0f')(tooltipData.value)}
          </div>
        </TooltipInPortal>
      )}
    </div>
  );
}

export default function YearlyCardActivity() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start p-8 relative rounded-[16px] h-full" style={{flexBasis: '70%'}} data-name="yearly-card-activity">
      <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="font-['SF_Pro_Display',_sans-serif] font-bold leading-normal text-[#333333] text-[26px]">
          Yearly Card Activity
        </div>
        <div className="bg-white box-border content-stretch flex gap-1 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 cursor-pointer">
          <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="font-['SF_Pro_Display',_sans-serif] font-medium leading-normal text-[#757575] text-[16px]">
            Credit cards
          </div>
          <div className="text-[#757575] text-[16px]">⌄</div>
        </div>
      </div>
      
      {/* Chart Area */}
      <div className="flex-1 w-full min-h-[300px]">
        <ParentSize>
          {({ width, height }) => (
            <BarChart width={width} height={height} />
          )}
        </ParentSize>
      </div>
      
      {/* View more link */}
      <div className="content-stretch flex gap-2.5 items-end justify-start relative shrink-0 w-full">
        <div className="font-['SF_Pro_Display',_sans-serif] font-medium leading-normal text-[#553ed5] text-[16px] cursor-pointer hover:underline">
          View more
        </div>
      </div>
    </div>
  );
}
