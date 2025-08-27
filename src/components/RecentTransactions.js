const imgLucideChevronDown1 = "http://localhost:3845/assets/7dd60b3cef51aa33534ef2be6d84562fab2ef8a5.svg";

export default function RecentTransactions() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-0 items-start justify-start relative rounded-[16px] shrink-0 w-full" data-name="recent-transactions" data-node-id="17:134">
      <div aria-hidden="true" className="absolute border border-[#d9d8d8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Header */}
      <div className="box-border content-stretch flex items-center justify-between px-6 py-4 relative shrink-0 w-full border-b border-[#d9d8d8]" data-node-id="17:135">
        <div className="font-['SF_Pro_Display:SemiBold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#1b1b1b] text-[20px] text-nowrap" data-node-id="17:136">
          <p className="leading-[normal] whitespace-pre">Recent Transactions</p>
        </div>
        <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-node-id="17:137">
          <div className="font-['SF_Pro_Display:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#868686] text-[14px] text-nowrap" data-node-id="17:138">
            <p className="leading-[normal] whitespace-pre">Credit cards</p>
          </div>
          <div className="relative shrink-0 size-4" data-name="lucide/chevron-down" data-node-id="17:139">
            <img alt="" className="block max-w-none size-full" src={imgLucideChevronDown1} />
          </div>
        </div>
      </div>
      
      {/* Table Header */}
      <div className="box-border content-stretch flex items-center justify-between px-4 py-3 relative shrink-0 w-full bg-[#f8f9fa]" data-node-id="17:140">
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px]" data-node-id="17:141">
          <p className="leading-[normal]">Transaction</p>
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px]" data-node-id="17:142">
          <p className="leading-[normal]">ID</p>
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px]" data-node-id="17:143">
          <p className="leading-[normal]">Date</p>
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px]" data-node-id="17:144">
          <p className="leading-[normal]">Status</p>
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px]" data-node-id="17:145">
          <p className="leading-[normal]">Payment Method</p>
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px]" data-node-id="17:146">
          <p className="leading-[normal]">Category</p>
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px]" data-node-id="17:147">
          <p className="leading-[normal]">Notes</p>
        </div>
        <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[14px] text-right" data-node-id="17:148">
          <p className="leading-[normal]">Amount</p>
        </div>
      </div>
      
      {/* Table Rows */}
      <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-node-id="17:149">
        {/* Row 1 - Amazon Purchase */}
        <div className="box-border content-stretch flex items-center justify-between px-4 py-2 relative shrink-0 w-full border-b border-[#d9d8d8]" data-name="table-row" data-node-id="17:150">
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:151">
            <p className="leading-[normal]">Amazon Purchase</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:152">
            <p className="leading-[normal]">TXN-98125</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:153">
            <p className="leading-[normal]">Aug 02</p>
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-node-id="17:154">
            <div className="bg-[#e7f7f6] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-2 relative rounded-[8px] shrink-0" data-node-id="17:155">
              <div aria-hidden="true" className="absolute border-0 border-[#18aa9d] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#18aa9d] text-[14px] text-nowrap" data-node-id="17:156">
                <p className="leading-[normal] whitespace-pre">Completed</p>
              </div>
            </div>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:157">
            <p className="leading-[normal]">Visa ****5578</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:158">
            <p className="leading-[normal]">Shopping</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:159">
            <p className="leading-[normal]">Prime order</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[16px] text-right" data-node-id="17:160">
            <p className="leading-[normal]">-$120.50</p>
          </div>
        </div>
        
        {/* Row 2 - Uber Ride */}
        <div className="box-border content-stretch flex items-center justify-between px-4 py-2 relative shrink-0 w-full border-b border-[#d9d8d8]" data-name="table-row" data-node-id="17:161">
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:162">
            <p className="leading-[normal]">Uber Ride</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:163">
            <p className="leading-[normal]">TXN-98126</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:164">
            <p className="leading-[normal]">Aug 05</p>
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-node-id="17:165">
            <div className="bg-[#f7f6e7] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-2 relative rounded-[8px] shrink-0 w-[91px]" data-node-id="17:166">
              <div aria-hidden="true" className="absolute border-0 border-[#aa8318] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#aa8318] text-[14px] text-nowrap" data-node-id="17:167">
                <p className="leading-[normal] whitespace-pre">Pending</p>
              </div>
            </div>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:168">
            <p className="leading-[normal]">Visa ****5578</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:169">
            <p className="leading-[normal]">Transport</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:170">
            <p className="leading-[normal]">Payment pending</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[16px] text-right" data-node-id="17:171">
            <p className="leading-[normal]">-$8.40</p>
          </div>
        </div>
        
        {/* Row 3 - Apple Store */}
        <div className="box-border content-stretch flex items-center justify-between px-4 py-2 relative shrink-0 w-full border-b border-[#d9d8d8]" data-name="table-row" data-node-id="17:172">
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:173">
            <p className="leading-[normal]">Apple Store</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:174">
            <p className="leading-[normal]">TXN-98126</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:175">
            <p className="leading-[normal]">Aug 07</p>
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-node-id="17:176">
            <div className="bg-[#f7f6e7] box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-2 relative rounded-[8px] shrink-0 w-[91px]" data-node-id="17:177">
              <div aria-hidden="true" className="absolute border-0 border-[#aa8318] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#aa8318] text-[14px] text-nowrap" data-node-id="17:178">
                <p className="leading-[normal] whitespace-pre">Pending</p>
              </div>
            </div>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:179">
            <p className="leading-[normal]">Visa ****5578</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:180">
            <p className="leading-[normal]">Electronics</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:181">
            <p className="leading-[normal]">Payment pending</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[16px] text-right" data-node-id="17:182">
            <p className="leading-[normal]">-$8.40</p>
          </div>
        </div>
        
        {/* Row 4 - Starbucks */}
        <div className="box-border content-stretch flex items-center justify-between px-4 py-2 relative shrink-0 w-full border-b border-[#d9d8d8]" data-name="table-row" data-node-id="17:183">
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:184">
            <p className="leading-[normal]">Starbucks</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:185">
            <p className="leading-[normal]">TXN-98127</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:186">
            <p className="leading-[normal]">Aug 08</p>
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-node-id="17:187">
            <div className="bg-[#e7f7f6] box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative rounded-[8px] shrink-0" data-node-id="17:188">
              <div aria-hidden="true" className="absolute border-0 border-[#18aa9d] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#18aa9d] text-[14px] text-nowrap" data-node-id="17:189">
                <p className="leading-[normal] whitespace-pre">Completed</p>
              </div>
            </div>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:190">
            <p className="leading-[normal]">Visa ****5578</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:191">
            <p className="leading-[normal]">Food & Drink</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:192">
            <p className="leading-[normal]">Prime order</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[16px] text-right" data-node-id="17:193">
            <p className="leading-[normal]">-$120.50</p>
          </div>
        </div>
        
        {/* Row 5 - Spotify Premium */}
        <div className="box-border content-stretch flex items-center justify-between px-4 py-2 relative shrink-0 w-full" data-name="table-row" data-node-id="17:194">
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:195">
            <p className="leading-[normal]">Spotify Premium</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:196">
            <p className="leading-[normal]">TXN-98128</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:197">
            <p className="leading-[normal]">Aug 10</p>
          </div>
          <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-node-id="17:198">
            <div className="bg-[#e7f7f6] box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative rounded-[8px] shrink-0" data-node-id="17:199">
              <div aria-hidden="true" className="absolute border-0 border-[#18aa9d] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#18aa9d] text-[14px] text-nowrap" data-node-id="17:200">
                <p className="leading-[normal] whitespace-pre">Completed</p>
              </div>
            </div>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:201">
            <p className="leading-[normal]">Visa ****5578</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:202">
            <p className="leading-[normal]">Subscriptions</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[14px]" data-node-id="17:203">
            <p className="leading-[normal]">Family plan</p>
          </div>
          <div className="basis-0 font-['SF_Pro_Display:Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#553ed5] text-[16px] text-right" data-node-id="17:204">
            <p className="leading-[normal]">-$120.50</p>
          </div>
        </div>
      </div>
      
      {/* View more link */}
      <div className="box-border content-stretch flex gap-2.5 items-end justify-start px-6 py-4 relative shrink-0 w-full" data-node-id="17:205">
        <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#553ed5] text-[16px] text-nowrap" data-node-id="17:206">
          <p className="leading-[normal] whitespace-pre">View more</p>
        </div>
      </div>
    </div>
  );
}
