import './App.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import YearlyCardActivity from './components/YearlyCardActivity';
import MyCards from './components/MyCards';
import RecentTransactions from './components/RecentTransactions';

export default function DashboardDesktop() {
  const sidebarRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);
  const transactionsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Main dashboard entrance animation
    tl.fromTo(sidebarRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(statsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(transactionsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Stagger animation for stats cards
    const statsCards = statsRef.current?.querySelectorAll('[data-name*="card"]');
    if (statsCards) {
      gsap.fromTo(statsCards,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)", delay: 1 }
      );
    }

    // Hover animations for dashboard title buttons
    const titleButtons = titleRef.current?.querySelectorAll('[data-name="button-generic"]');
    if (titleButtons) {
      titleButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    }

  }, []);

  return (
    <div className="bg-[#faf9ff] min-h-screen grid grid-cols-[319px_1fr] grid-rows-[auto_1fr]" data-name="dashboard-desktop" data-node-id="17:3">
      {/* Sidebar - spans both rows */}
      <div ref={sidebarRef} className="row-span-2">
        <Sidebar />
      </div>
      
      {/* Header - top right */}
      <div className="bg-[#faf9ff]">
        <Header />
      </div>
      
      {/* Dashboard Content - bottom right */}
      <div className="bg-[#faf9ff] p-6 flex flex-col gap-6 overflow-auto" data-name="dashboard-content">
        {/* Dashboard Title */}
        <div ref={titleRef} className="content-stretch flex gap-[173px] items-center justify-start relative w-full mb-6" data-node-id="17:90">
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
        <div ref={statsRef}>
          <DashboardStats />
        </div>
        
        {/* Second Row */}
        <div ref={cardsRef} className="content-stretch flex items-stretch justify-start relative shrink-0 w-full" style={{gap: '1.5rem'}}>
          {/* Yearly Card Activity */}
          <YearlyCardActivity style={{flexBasis: '70%', height: '100%'}} />
          {/* My Cards */}
          <MyCards style={{flexBasis: '30%', height: '100%'}} />
        </div>
        
        {/* Recent Transactions */}
        <div ref={transactionsRef}>
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}
