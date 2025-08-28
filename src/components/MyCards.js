// Import local assets
const imgLucideChevronDown1 = "/images/chevron-down.svg";
const imgCard1 = "/images/card-1.png";
const imgCard2 = "/images/card-2.png";

export default function MyCards() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-6 items-start justify-start p-6 relative rounded-[16px] h-full" style={{flexBasis: '30%'}} data-name="my-cards" data-node-id="17:124">
      <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="17:125">
        <div className="font-['SF_Pro_Display:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[20px] text-nowrap" data-node-id="17:126">
          <p className="leading-[normal] whitespace-pre">My Cards</p>
        </div>
        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-node-id="17:127">
          <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] text-nowrap" data-node-id="17:128">
            <p className="leading-[normal] whitespace-pre">Credit cards</p>
          </div>
          <div className="relative shrink-0 size-4" data-name="lucide/chevron-down" data-node-id="17:129">
            <img alt="" className="block max-w-none size-full" src={imgLucideChevronDown1} />
          </div>
        </div>
      </div>
      
      {/* Credit Cards Stack */}
      <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-node-id="17:130">
        <div className="relative w-full flex-1 min-h-[160px] overflow-visible">
          {/* Card 2 (Background) */}
          <img 
            alt="Credit Card 2" 
            className="absolute top-3 left-3 w-[calc(100%-12px)] rounded-xl object-cover shadow-lg" 
            src={imgCard2}
            style={{ zIndex: 1, height: 'auto', aspectRatio: '320/180' }}
          />
          
          {/* Card 1 (Foreground) */}
          <img 
            alt="Credit Card 1" 
            className="absolute top-0 left-0 w-[calc(100%-12px)] rounded-xl object-cover shadow-lg" 
            src={imgCard1}
            style={{ zIndex: 2, height: 'auto', aspectRatio: '320/180' }}
          />
        </div>
        
        {/* Manage Cards Link */}
        <div className="content-stretch flex gap-2.5 items-end justify-start relative shrink-0 w-full" data-node-id="17:132">
          <div className="font-['SF_Pro_Display',_sans-serif] font-medium leading-normal text-[#553ed5] text-[16px] cursor-pointer hover:underline" data-node-id="17:133">
            Manage cards
          </div>
        </div>
      </div>
    </div>
  );
}
