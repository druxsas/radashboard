const imgLucideSearch = "http://localhost:3845/assets/adf36b926cc84090deff5c290eee9ff1166bd461.svg";
const imgLucideCommand = "http://localhost:3845/assets/bc60a69c56ab2e27fd8c52f057e351b217da817a.svg";
const imgLucideShare2 = "http://localhost:3845/assets/807da57139472d57e4cfa50d38fa4f9d1d062dea.svg";
const imgLucideCirclePlus = "http://localhost:3845/assets/64d3e84ef1f464ad5b89ef15195d23a82f3a0bdd.svg";
const imgLucideBell = "http://localhost:3845/assets/54ddbdc329024718c40ca278e14533bad1cc248a.svg";
const imgLucideCalendar = "http://localhost:3845/assets/3c4fc9b343f99e6078ba2877eb57496466d58fbb.svg";
const imgLucideChevronDown = "http://localhost:3845/assets/984f82070703438f39d9e0d403989bb7e372346d.svg";
const imgEllipse1 = "http://localhost:3845/assets/d19200ab179c368ad99e8577150218a83575b285.png";

export default function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-6" data-node-id="17:65">
      {/* Search Bar */}
      <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-2 relative rounded-[8px] shrink-0 w-[400px]" data-name="search-bar" data-node-id="17:66">
        <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="relative shrink-0 size-5" data-name="lucide/search" data-node-id="17:67">
          <img alt="" className="block max-w-none size-full" src={imgLucideSearch} />
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[16px] text-nowrap" data-node-id="17:69">
          <p className="leading-[normal] whitespace-pre">Search</p>
        </div>
        <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-node-id="17:70">
          <div className="relative shrink-0 size-4" data-name="lucide/command" data-node-id="17:71">
            <img alt="" className="block max-w-none size-full" src={imgLucideCommand} />
          </div>
          <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#868686] text-[16px] text-nowrap" data-node-id="17:73">
            <p className="leading-[normal] whitespace-pre">K</p>
          </div>
        </div>
      </div>
      
      {/* Right Side */}
      <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-node-id="17:74">
        {/* Icons Group */}
        <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
          <div className="relative h-10 w-28 flex items-center gap-6" data-name="icons-group" data-node-id="17:73">
            <div className="relative h-8 w-8" data-name="lucide/share-2" data-node-id="17:74">
              <img alt="" className="block max-w-none size-full" src={imgLucideShare2} />
            </div>
            <div className="relative h-8 w-8" data-name="lucide/circle-plus" data-node-id="17:78">
              <img alt="" className="block max-w-none size-full" src={imgLucideCirclePlus} />
            </div>
          </div>
          <div className="relative shrink-0 size-6" data-name="lucide/bell" data-node-id="17:77">
            <img alt="" className="block max-w-none size-full" src={imgLucideBell} />
          </div>
          <div className="relative shrink-0 size-6" data-name="lucide/calendar" data-node-id="17:78">
            <img alt="" className="block max-w-none size-full" src={imgLucideCalendar} />
          </div>
        </div>
        
        {/* User Profile */}
        <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-node-id="17:79">
          <div className="h-10 relative shrink-0 w-10" data-node-id="17:80">
            <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse1} />
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0" data-node-id="17:81">
            <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[16px] text-nowrap" data-node-id="17:82">
              <p className="leading-[normal] whitespace-pre">John Smith</p>
            </div>
            <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] text-nowrap" data-node-id="17:83">
              <p className="leading-[normal] whitespace-pre">john@example.com</p>
            </div>
          </div>
          <div className="relative shrink-0 size-4" data-name="lucide/chevron-down" data-node-id="17:84">
            <img alt="" className="block max-w-none size-full" src={imgLucideChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
}
