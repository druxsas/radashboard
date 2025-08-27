import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import YearlyCardActivity from './components/YearlyCardActivity';
import MyCards from './components/MyCards';
import RecentTransactions from './components/RecentTransactions';

export default function DashboardDesktop() {
  return (
    <div className="bg-[#faf9ff] min-h-screen grid grid-cols-[319px_1fr] grid-rows-[auto_1fr]" data-name="dashboard-desktop" data-node-id="17:3">
      {/* Sidebar - spans both rows */}
      <div className="row-span-2">
        <Sidebar />
      </div>
      
      {/* Header - top right */}
      <div className="bg-[#faf9ff]">
        <Header />
      </div>
      
      {/* Dashboard Content - bottom right */}
      <div className="bg-[#faf9ff] p-6 flex flex-col gap-6 overflow-auto" data-name="dashboard-content">
        {/* Dashboard Title */}
        <div className="content-stretch flex gap-[173px] items-center justify-start relative w-full mb-6" data-node-id="17:90">
          <div className="basis-0 font-['Inter',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#333333] text-[40px]" data-node-id="17:91">
            <p className="leading-[normal]">Dashboard</p>
          </div>
          <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="buttons-group" data-node-id="17:92">
            <div className="content-stretch flex items-center justify-start relative shrink-0" data-name="dates" data-node-id="17:93">
              <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-4 py-3 relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 border border-r-0 border-[#d9d8d8]" data-name="button-generic" data-node-id="17:94">
                <div className="relative shrink-0 size-4" data-name="lucide/calendar" data-node-id="17:95">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/3c4fc9b343f99e6078ba2877eb57496466d58fbb.svg" />
                </div>
                <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-nowrap" data-node-id="17:97">
                  <p className="leading-[normal] whitespace-pre">Aug 1- Aug 26</p>
                </div>
              </div>
              <div className="bg-white box-border content-stretch flex gap-1 items-end justify-start px-4 py-3 relative rounded-br-[8px] rounded-tr-[8px] shrink-0 border border-[#d9d8d8]" data-name="button-generic" data-node-id="17:98">
                <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-nowrap" data-node-id="17:99">
                  <p className="leading-[normal] whitespace-pre">Monthly</p>
                </div>
                <div className="relative shrink-0 size-4" data-name="lucide/chevron-down" data-node-id="17:100">
                  <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/984f82070703438f39d9e0d403989bb7e372346d.svg" />
                </div>
              </div>
            </div>
            <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0" data-name="button-filter" data-node-id="17:102">
              <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="relative shrink-0 size-4" data-name="lucide/list-filter" data-node-id="17:103">
                <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/d2b4d03274b3c6364459974b0c7621bea16e6875.svg" />
              </div>
              <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-nowrap" data-node-id="17:105">
                <p className="leading-[normal] whitespace-pre">Filter</p>
              </div>
            </div>
            <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0" data-name="button-downlaod" data-node-id="17:106">
              <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="relative shrink-0 size-4" data-name="lucide/download" data-node-id="17:107">
                <img alt="" className="block max-w-none size-full" src="http://localhost:3845/assets/373fb17d9dbad97c3dbdaa476342d62fb76e2d3e.svg" />
              </div>
              <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[16px] text-nowrap" data-node-id="17:109">
                <p className="leading-[normal] whitespace-pre">Download</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Stats */}
        <DashboardStats />
        
        {/* Second Row */}
        <div className="content-stretch flex items-stretch justify-start relative shrink-0 w-full" style={{gap: '1.5rem'}}>
          {/* Yearly Card Activity */}
          <YearlyCardActivity />
          
          {/* My Cards */}
          <MyCards />
        </div>
        
        {/* Recent Transactions */}
        <RecentTransactions />
      </div>
    </div>
  );
}
