import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const imgGroup15 = "http://localhost:3845/assets/dabdf34137765ea1f3d9e51098affa943f8d7310.svg";
const imgLucideArrowLeftToLine = "http://localhost:3845/assets/7f94a3dcea23c7d4e55863413364e3a33be414d0.svg";
const imgLucideLayoutDashboard = "http://localhost:3845/assets/24773fe68671c2f5603b46182feba0b1f6879ff3.svg";
const imgLucideChartNoAxesColumnIncreasing = "http://localhost:3845/assets/b030cb0fcb9ff6d3dd48f67510a33d3d9bef38e0.svg";
const imgLucideCreditCard = "http://localhost:3845/assets/e50eee55d9588554696c8e534bfe244a99b561b2.svg";
const imgLucideBaggageClaim = "http://localhost:3845/assets/9a8014fd3ca6faa3a8248684e571264aaed3add6.svg";
const imgLucideBox = "http://localhost:3845/assets/6b91f0188acbe5627ac0e88e271eaebf362a8d76.svg";
const imgLucideInbox = "http://localhost:3845/assets/203dcb572d718ba54a5ff3c02dedb4e26198b453.svg";
const imgLucideSticker = "http://localhost:3845/assets/be61a84cf1908edc2e764ac91bdfaca3641258c6.svg";
const imgLucideShieldCheck = "http://localhost:3845/assets/461f3f211d86538679994bec2795122718b71e45.svg";
const imgLucideCircleQuestionMark = "http://localhost:3845/assets/554d67a73fee633c00f28494600ef57e4d7e82c5.svg";

export default function Sidebar() {
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Hover animations for menu items
    const menuItems = sidebarRef.current?.querySelectorAll('[data-name*="menu-item"]');
    if (menuItems) {
      menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, { 
            x: 8, 
            backgroundColor: 'rgba(112, 97, 198, 0.1)', 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
        item.addEventListener('mouseleave', () => {
          gsap.to(item, { 
            x: 0, 
            backgroundColor: 'transparent', 
            duration: 0.3, 
            ease: "power2.out" 
          });
        });
      });
    }

    // Hover animation for logo
    const logo = sidebarRef.current?.querySelector('[data-name="logo"]');
    if (logo) {
      logo.addEventListener('mouseenter', () => {
        gsap.to(logo, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      logo.addEventListener('mouseleave', () => {
        gsap.to(logo, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    }

  }, []);

  return (
    <div ref={sidebarRef} className="absolute bg-white box-border content-stretch flex flex-col gap-4 h-[1283px] items-start justify-start left-0 p-[24px] top-0 w-[319px]" data-name="menu-open" data-node-id="17:4">
      <div aria-hidden="true" className="absolute border-[#d9d8d8] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      
      {/* Logo Section */}
      <div className="box-border content-stretch flex items-center justify-start pb-[27px] pt-[26px] px-0 relative shrink-0 w-full" data-node-id="17:5">
        <div aria-hidden="true" className="absolute border-[#d9d8d8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="logo" data-node-id="17:6">
          <div className="h-[32.432px] relative shrink-0 w-[47.688px]" data-node-id="23:365">
            <img alt="" className="block max-w-none size-full" src={imgGroup15} />
          </div>
          <div className="font-['Inter',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[29px] text-nowrap" data-node-id="17:12" style={{ background: "linear-gradient(255deg, #1F1847 36.47%, #7061C6 81.75%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            <p className="leading-[normal] whitespace-pre">RA_Finance</p>
          </div>
        </div>
        <div className="h-[29px] relative shrink-0 w-8" data-name="lucide/arrow-left-to-line" data-node-id="17:13">
          <img alt="" className="block max-w-none size-full" src={imgLucideArrowLeftToLine} />
        </div>
      </div>
      
      {/* Navigation */}
      <div className="basis-0 content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-node-id="17:15">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-0 px-0 relative shrink-0 w-full" data-node-id="17:16">
          <div aria-hidden="true" className="absolute border-[#d9d8d8] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          
          {/* Overview - Active */}
          <div className="bg-gradient-to-t box-border content-stretch flex from-[#553ed5] from-[40.864%] gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 to-[#bcb2f4] to-[137.74%] w-full" data-node-id="17:17">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.86)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_11px_0px_rgba(0,0,0,0.14)]" />
            <div className="relative shrink-0 size-6" data-name="lucide/layout-dashboard" data-node-id="17:18">
              <img alt="" className="block max-w-none size-full" src={imgLucideLayoutDashboard} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white" data-node-id="17:20">
              <p className="leading-[normal] whitespace-pre">Overview</p>
            </div>
          </div>
          
          {/* Performance */}
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:21">
            <div className="relative shrink-0 size-6" data-name="lucide/chart-no-axes-column-increasing" data-node-id="17:22">
              <img alt="" className="block max-w-none size-full" src={imgLucideChartNoAxesColumnIncreasing} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[18px] text-nowrap" data-node-id="17:24">
              <p className="leading-[normal] whitespace-pre">Performance</p>
            </div>
          </div>
          
          {/* Cards */}
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:25">
            <div className="relative shrink-0 size-6" data-name="lucide/credit-card" data-node-id="22:44">
              <img alt="" className="block max-w-none size-full" src={imgLucideCreditCard} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[18px] text-nowrap" data-node-id="17:28">
              <p className="leading-[normal] whitespace-pre">Cards</p>
            </div>
          </div>
          
          {/* Orders */}
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:29">
            <div className="relative shrink-0 size-6" data-name="lucide/baggage-claim" data-node-id="17:30">
              <img alt="" className="block max-w-none size-full" src={imgLucideBaggageClaim} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[18px] text-nowrap" data-node-id="17:32">
              <p className="leading-[normal] whitespace-pre">Orders</p>
            </div>
          </div>
          
          {/* Products */}
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:33">
            <div className="relative shrink-0 size-6" data-name="lucide/box" data-node-id="17:34">
              <img alt="" className="block max-w-none size-full" src={imgLucideBox} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[18px] text-nowrap" data-node-id="17:36">
              <p className="leading-[normal] whitespace-pre">Products</p>
            </div>
          </div>
          
          {/* Messages */}
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:37">
            <div className="relative shrink-0 size-6" data-name="lucide/inbox" data-node-id="17:38">
              <img alt="" className="block max-w-none size-full" src={imgLucideInbox} />
            </div>
            <div className="basis-0 font-['Inter',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#757575] text-[18px]" data-node-id="17:40">
              <p className="leading-[normal]">Messages</p>
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="bg-[#f24e4e] content-stretch flex flex-col h-full items-center justify-center relative rounded-[4px] shrink-0 w-[30px]" data-name="notification" data-node-id="17:41">
                <div className="flex flex-col font-['Inter',_sans-serif] font-medium h-[27px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-full" data-node-id="17:42">
                  <p className="leading-[normal]">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-node-id="17:44">
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:45">
            <div className="relative shrink-0 size-6" data-name="lucide/sticker" data-node-id="17:46">
              <img alt="" className="block max-w-none size-full" src={imgLucideSticker} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[18px] text-nowrap" data-node-id="17:48">
              <p className="leading-[normal] whitespace-pre">Feedback</p>
            </div>
          </div>
          
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:49">
            <div className="relative shrink-0 size-6" data-name="lucide/shield-check" data-node-id="17:50">
              <img alt="" className="block max-w-none size-full" src={imgLucideShieldCheck} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[18px] text-nowrap" data-node-id="17:52">
              <p className="leading-[normal] whitespace-pre">Security</p>
            </div>
          </div>
          
          <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 w-full" data-node-id="17:53">
            <div className="relative shrink-0 size-6" data-name="lucide/circle-question-mark" data-node-id="17:54">
              <img alt="" className="block max-w-none size-full" src={imgLucideCircleQuestionMark} />
            </div>
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#757575] text-[18px] text-nowrap" data-node-id="17:56">
              <p className="leading-[normal] whitespace-pre">Help</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Promotional Banner */}
      <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-node-id="17:57">
        <div className="bg-[#553ed5] box-border content-stretch flex flex-col gap-4 items-start justify-start p-4 relative rounded-[16px] shrink-0 w-full" data-name="banner" data-node-id="17:58">
          <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full" data-node-id="17:59">
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" data-node-id="17:60">
              <p className="leading-[normal] whitespace-pre">Work faster, decide better</p>
            </div>
            <div className="font-['Inter',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-white" data-node-id="17:61">
              <p>Access detailed reports with our AI Pro Features</p>
            </div>
          </div>
          <div className="bg-white box-border content-stretch flex gap-2.5 items-center justify-center px-4 py-2 relative rounded-[8px] shrink-0" data-node-id="17:62">
            <div className="font-['Inter',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#553ed5] text-[14px] text-nowrap" data-node-id="17:63">
              <p className="leading-[normal] whitespace-pre">Upgrade now!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}
