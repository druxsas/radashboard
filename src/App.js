import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import YearlyCardActivity from './components/YearlyCardActivity';
import MyCards from './components/MyCards';
import RecentTransactions from './components/RecentTransactions';

export default function DashboardDesktop() {
  return (
    <div className="bg-[#faf9ff] relative size-full min-h-screen" data-name="dashboard-desktop" data-node-id="17:3">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Header */}
      <div className="absolute left-[319px] top-0 w-[calc(100%-319px)]">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="absolute bg-[#faf9ff] box-border content-stretch flex flex-col gap-6 h-full items-start justify-start left-[319px] pt-[112px] px-6 pb-6 top-0 w-[calc(100%-319px)]" data-name="main-content" data-node-id="17:64">
        
        {/* Dashboard Title */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-6">
          <h1 className="font-['SF_Pro_Display:Bold',_sans-serif] text-[32px] text-[#1b1b1b]">Dashboard</h1>
          <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0">
            <div className="bg-white border border-[#d9d8d8] rounded-lg px-3 py-2 text-sm text-[#868686]">
              Aug 1 - Aug 26
            </div>
            <div className="bg-white border border-[#d9d8d8] rounded-lg px-3 py-2 text-sm text-[#868686]">
              Monthly
            </div>
            <div className="bg-white border border-[#d9d8d8] rounded-lg px-3 py-2 text-sm text-[#868686]">
              Filter
            </div>
            <div className="bg-white border border-[#d9d8d8] rounded-lg px-3 py-2 text-sm text-[#868686]">
              Download
            </div>
          </div>
        </div>
        
        {/* Dashboard Stats */}
        <DashboardStats />
        
        {/* Second Row */}
        <div className="content-stretch flex gap-6 items-start justify-start relative shrink-0 w-full">
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
