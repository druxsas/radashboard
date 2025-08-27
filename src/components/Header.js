const imgLucideSearch = "http://localhost:3845/assets/adf36b926cc84090deff5c290eee9ff1166bd461.svg";
const imgLucideCommand = "http://localhost:3845/assets/bc60a69c56ab2e27fd8c52f057e351b217da817a.svg";
const imgLucideShare2 = "http://localhost:3845/assets/807da57139472d57e4cfa50d38fa4f9d1d062dea.svg";
const imgLucideCirclePlus = "http://localhost:3845/assets/64d3e84ef1f464ad5b89ef15195d23a82f3a0bdd.svg";
const imgLucideBell = "http://localhost:3845/assets/54ddbdc329024718c40ca278e14533bad1cc248a.svg";
const imgEllipse1 = "http://localhost:3845/assets/d19200ab179c368ad99e8577150218a83575b285.png";

export default function Header() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-start px-6 py-8 relative w-full" data-node-id="17:61">
      <div aria-hidden="true" className="absolute border-[#d9d8d8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      
      {/* Search Bar */}
      <div className="bg-white box-border content-stretch flex gap-[26px] items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-[441px]" data-name="search-bar" data-node-id="17:62">
        <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="icon+copy" data-node-id="17:63">
          <div className="relative shrink-0 size-6" data-name="lucide/search" data-node-id="17:64">
            <img alt="" className="block max-w-none size-full" src={imgLucideSearch} />
          </div>
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#757575] text-[20px] text-nowrap" data-node-id="17:66">
            <p className="leading-[normal] whitespace-pre">Search</p>
          </div>
        </div>
        <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="command" data-node-id="17:67">
          <div className="relative shrink-0 size-4" data-name="lucide/command" data-node-id="17:68">
            <img alt="" className="block max-w-none size-full" src={imgLucideCommand} />
          </div>
          <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-nowrap" data-node-id="17:70">
            <p className="leading-[normal] whitespace-pre">+</p>
          </div>
          <div className="font-['SF_Pro_Display:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-nowrap" data-node-id="17:71">
            <p className="leading-[normal] whitespace-pre">F</p>
          </div>
        </div>
      </div>
      
      {/* Right Side */}
      <div className="basis-0 content-stretch flex gap-6 grow items-center justify-end min-h-px min-w-px relative shrink-0" data-node-id="17:72">
        {/* Icons Group */}
        <div className="h-10 relative shrink-0 w-28 flex items-center justify-center gap-6" data-name="icons-group" data-node-id="17:73">
          <div className="relative shrink-0 size-8" data-name="lucide/share-2" data-node-id="17:74">
            <img alt="" className="block max-w-none size-full" src={imgLucideShare2} />
          </div>
          <div className="relative shrink-0 size-8" data-name="lucide/circle-plus" data-node-id="17:78">
            <img alt="" className="block max-w-none size-full" src={imgLucideCirclePlus} />
          </div>
        </div>
        
        {/* Vertical Divider */}
        <div className="h-10 w-px bg-[#d9d8d8]"></div>
        
        {/* User Section */}
        <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="user" data-node-id="17:81">
          <div className="relative shrink-0 size-8" data-name="lucide/bell" data-node-id="17:82">
            <img alt="" className="block max-w-none size-full" src={imgLucideBell} />
          </div>
          <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="user" data-node-id="17:85">
            <div className="relative shrink-0 size-10" data-node-id="17:86">
              <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse1} />
            </div>
            <div className="content-stretch flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] gap-0.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-[16px] w-[79px]" data-name="user-name" data-node-id="17:87">
              <div className="relative shrink-0 text-black w-full" data-node-id="17:88">
                <p className="leading-[normal]">John Smith</p>
              </div>
              <div className="relative shrink-0 text-[#757575] w-full" data-node-id="17:89">
                <p className="leading-[normal]">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
