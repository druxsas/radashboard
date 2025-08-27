const imgLucideChevronDown1 = "http://localhost:3845/assets/7dd60b3cef51aa33534ef2be6d84562fab2ef8a5.svg";
const imgRectangle58 = "http://localhost:3845/assets/0babd0afe4a2965ee782940640cb20af52a35b01.png";
const imgChip = "http://localhost:3845/assets/95f661784746379c9eb66a8cacebd0b450dfeb3c.svg";
const imgContactless = "http://localhost:3845/assets/972d90c10f4a52d7895c2b056caeaf8371007909.svg";
const imgVisaLogo = "http://localhost:3845/assets/218e7f866bfc4aad0aeb73931bf23561e2e9f87b.svg";

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
      
      {/* Credit Card */}
      <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full" data-node-id="17:130">
        <div className="h-[144px] relative shrink-0 w-full" data-name="credit-card" data-node-id="17:131">
          <img alt="" className="block max-w-none size-full rounded-xl" src={imgRectangle58} />
          
          {/* Card Details Overlay */}
          <div className="absolute inset-0 p-4 text-white flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <img alt="" className="w-8 h-6" src={imgChip} />
              <img alt="" className="w-6 h-6" src={imgContactless} />
            </div>
            <div>
              <div className="text-lg font-mono tracking-wider mb-2">4213 •••• •••• 5578</div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs opacity-75">••/••</div>
                  <div className="text-sm font-medium">John Smith</div>
                </div>
                <div className="text-right">
                  <div className="text-xs opacity-75">CVV •••</div>
                  <img alt="" className="h-6" src={imgVisaLogo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Manage Cards Link */}
        <div className="content-stretch flex gap-2.5 items-end justify-start relative shrink-0 w-full" data-node-id="17:132">
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#553ed5] text-[16px] text-nowrap" data-node-id="17:133">
            <p className="leading-[normal] whitespace-pre">Manage cards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
