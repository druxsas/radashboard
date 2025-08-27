const imgLucideChevronDown1 = "http://localhost:3845/assets/7dd60b3cef51aa33534ef2be6d84562fab2ef8a5.svg";

export default function YearlyCardActivity() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start p-6 relative rounded-[16px] flex-1 min-w-0" data-name="yearly-card-activity" data-node-id="17:113">
      <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="17:114">
        <div className="font-['SF_Pro_Display:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[20px] text-nowrap" data-node-id="17:115">
          <p className="leading-[normal] whitespace-pre">Yearly Card Activity</p>
        </div>
        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-node-id="17:116">
          <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] text-nowrap" data-node-id="17:117">
            <p className="leading-[normal] whitespace-pre">Credit cards</p>
          </div>
          <div className="relative shrink-0 size-4" data-name="lucide/chevron-down" data-node-id="17:118">
            <img alt="" className="block max-w-none size-full" src={imgLucideChevronDown1} />
          </div>
        </div>
      </div>
      
      {/* Chart Area */}
      <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-node-id="17:119">
        {/* Y-axis labels */}
        <div className="content-stretch flex items-end justify-start relative shrink-0 w-full h-[200px]" data-node-id="17:120">
          <div className="absolute left-0 top-0 text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$7000</div>
          <div className="absolute left-0 top-[25px] text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$6000</div>
          <div className="absolute left-0 top-[50px] text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$5000</div>
          <div className="absolute left-0 top-[75px] text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$4000</div>
          <div className="absolute left-0 top-[100px] text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$3000</div>
          <div className="absolute left-0 top-[125px] text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$2000</div>
          <div className="absolute left-0 top-[150px] text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$1000</div>
          <div className="absolute left-0 top-[175px] text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">$0</div>
          
          {/* Chart bars */}
          <div className="flex items-end justify-between w-full h-full ml-12" data-node-id="17:121">
            {/* Aug bar - tall */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#553ed5] w-8 h-[120px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Aug</div>
            </div>
            
            {/* Sep bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[40px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Sep</div>
            </div>
            
            {/* Oct bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[35px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Oct</div>
            </div>
            
            {/* Nov bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[30px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Nov</div>
            </div>
            
            {/* Dec bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[25px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Dec</div>
            </div>
            
            {/* Jan bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[20px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Jan</div>
            </div>
            
            {/* Feb bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[15px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Feb</div>
            </div>
            
            {/* Mar bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[10px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Mar</div>
            </div>
            
            {/* Apr bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[8px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Apr</div>
            </div>
            
            {/* May bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[6px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">May</div>
            </div>
            
            {/* Jun bar - short */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#e5e7eb] w-8 h-[4px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Jun</div>
            </div>
            
            {/* Jul bar - tall */}
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#553ed5] w-8 h-[100px] rounded-t"></div>
              <div className="text-[#868686] text-[12px] font-['SF_Pro_Display:Regular',_sans-serif]">Jul</div>
            </div>
          </div>
        </div>
        
        {/* View more link */}
        <div className="content-stretch flex gap-2.5 items-end justify-start relative shrink-0 w-full" data-node-id="17:122">
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#553ed5] text-[16px] text-nowrap" data-node-id="17:123">
            <p className="leading-[normal] whitespace-pre">View more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
