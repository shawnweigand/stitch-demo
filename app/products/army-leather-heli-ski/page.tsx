export default function ProductDetailPage() {
  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c]">
      <main className="pt-32 pb-24 max-w-[1920px] mx-auto px-6 lg:px-12">
        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Gallery */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-xl bg-[#f4f3f3] group">
              <img
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Professional leather ski glove in mountain landscape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCC68Nfp2FqUNQzvxkHGUA_Y3zNSDENH6Iw3G0WVOng-45D7q6uNwcbCDbn6gqABVIkTkKXrMztFNdvYYj4Cn7eCYuPyVJaIPZTlvVn6vra_3lNWGtVQsga83-fdusrXhkRMAnhrdNj54sCA-SkNTufutB0HNUKUrtl0q21HCLeoQkxnugA8KNho7r2E1ySb6swU9u_vLRIxlfuLqvB3MavK9Hy5wXTA1_vo3xeF8HhRbIDVrVivdtLGvlnbQYsqHcmiNMEUDdiQ"
              />
            </div>
            <div className="overflow-hidden rounded-xl bg-[#f4f3f3] aspect-[4/5]">
              <img
                className="w-full h-full object-cover"
                alt="Close up of goat leather texture and stitching"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2GW7s3hXQx00wXNzUWVsNHh7sBEliPfLcmg-nYMCyAv83MlPzK6bmpFPWQczY1bmF7CaQzPSB1fehyBqy4DXzKTnBxUhlKXcjFaYCx8V7ua6ai1wPctWNx8mJo0-ihTGIQrGsJRQMxOLMS6q__jfeyGtBICpb9f8DJLA9cM5NpsJad3nKnAVN6M4CjpQio8gnD4cESM3B37ctn-S2ZpgajdFk0Yzp8OTp2e74nClqe-03PApecAdXIzWJWzqJI4lb6YKuCDVYrA"
              />
            </div>
            <div className="overflow-hidden rounded-xl bg-[#f4f3f3] aspect-[4/5] mt-8">
              <img
                className="w-full h-full object-cover"
                alt="Glove inner lining detail showing warmth material"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcRr3v0taoEFYtr1kYj3lSf99OHX5v50e_VzImHY7i81004RWgnsI330wyEDVByHIh_aB8zegsiVZPBJmsNRqBSM4juNCnp79AiZLmD1puUSx2urXlbKAFU4FljFAHIWBGQFYnfiOMnLEO9tnUWjIEYSG7Ee0QJ9mlhZgLO4Mmlvm5ilNtcyQ2_6qapMUPlBeXt7CAxdJvUoY4gaaB7QLfPrAh3Np5g9UPFxvfHFMWXmI3HvkDKDepTe-sf1A6npn1C_uAZ8v0qw"
              />
            </div>
          </div>

          {/* Product Info: Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.2rem] text-[#785834] uppercase">
                Skier&apos;s Choice
              </span>
              <h1
                className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-[#1a1c1c]"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                Army Leather Heli Ski
              </h1>
              <p className="text-2xl font-light text-[#4f453c]">$160.00 USD</p>
            </div>
            <p className="text-lg leading-relaxed text-[#4f453c] max-w-md">
              Our most legendary model. A long, durable ski glove for those who ski a lot and often need a warm and reliable companion on the mountain.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 gap-4 py-8 border-y border-[#d3c4b7]/15">
              <div className="flex items-center space-x-4">
                <span
                  className="material-symbols-outlined text-[#785834]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  layers
                </span>
                <span className="text-sm font-medium uppercase tracking-wider">Removable liner</span>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className="material-symbols-outlined text-[#785834]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  ac_unit
                </span>
                <span className="text-sm font-medium uppercase tracking-wider">Snow lock</span>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className="material-symbols-outlined text-[#785834]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  anchor
                </span>
                <span className="text-sm font-medium uppercase tracking-wider">Carabiner</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-60">Select Size</label>
                  <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#785834] border-b border-[#785834]/30">
                    Size Guide
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="w-12 h-12 flex items-center justify-center border border-[#d3c4b7]/30 text-xs font-medium hover:border-[#785834] transition-colors">
                    7
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border-2 border-[#785834] bg-[#785834]/5 text-xs font-bold">
                    8
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border border-[#d3c4b7]/30 text-xs font-medium hover:border-[#785834] transition-colors">
                    9
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border border-[#d3c4b7]/30 text-xs font-medium hover:border-[#785834] transition-colors">
                    10
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center border border-[#d3c4b7]/30 text-xs font-medium opacity-30 cursor-not-allowed">
                    11
                  </button>
                </div>
              </div>
              <button className="w-full py-6 bg-gradient-to-r from-[#785834] to-[#b08a62] text-white font-bold uppercase tracking-[0.2rem] text-sm rounded-sm hover:opacity-90 transition-all editorial-shadow">
                Add to Bag
              </button>
            </div>
          </div>
        </div>

        {/* Craftsmanship Section */}
        <section className="mt-32 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#d3c4b7]/15 pb-8">
            <h2
              className="text-4xl font-bold tracking-tighter max-w-xs leading-none"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              The Anatomy of Performance
            </h2>
            <p className="text-[#4f453c] max-w-sm uppercase text-[10px] tracking-widest leading-relaxed">
              Each pair is handcrafted to endure the harshest alpine conditions, merging Swedish tradition with technical innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Close up of heavy duty sewing machine on leather"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM6T4mCjVzQQy4GCV5Jgemedkj535WUnmMfDhHN2mx2fD2VbA-8OsbNaEQg8pvV9A-H0fIZpdqRTs1Pee8rE_qEe3vCUWpy3sFGkZFQsdMeWuKR3ZTuBbYM1oiUx2fPOqIlSTgsL79V4IjbctjRYFrP3ghG8Z05hg-bRNHBiCnXoMnWM8v2K9FhldkSTEIwrpqDntWlBjiYPTLRetzovygcdPjkIKkQoOIQ5_SWS2uiFaWkDQK0h2tbXywAc_IMCmrwpSPXGXqRg"
                />
              </div>
              <div className="space-y-4 max-w-lg">
                <h3
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display-var)" }}
                >
                  Army Goat Leather
                </h3>
                <p className="text-[#4f453c] leading-relaxed">
                  Our most durable leather. Originally used to make gloves for military purposes. A specially treated goat leather that withstands tough, outdoor conditions. The leather is thoroughly waterproofed and its structural properties provide effective protection against moisture.
                </p>
              </div>
            </div>
            <div className="space-y-8 pt-12 md:pt-24">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Synthetic technical fabric macro shot"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4LxXadjS2JBn-ja2zYuE73id6cbf9KNuURdXZRhf4S-jwK7Q5YFNbep4puv4nnyo35bmHHLEibd_20RZM9A1wN7_2e3buaN-zlYNwi1iiEvhSNK0xnYy6ZeQRx7QKwW_v5lsFs28c-Ez3sT88oG_-3Bib4VfePYfoNj8HFNFJO3c26T12zhXc47id3zX0_n61xYfGC5vWGjrp1etlpwX4MqT7nGqm7Z2riYw1qunthmDGPKs9bDAg_oJDiD45tdxBW-FLV_56mg"
                />
              </div>
              <div className="space-y-4 max-w-lg">
                <h3
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display-var)" }}
                >
                  Hestra Triton Fabric
                </h3>
                <p className="text-[#4f453c] leading-relaxed">
                  A highly breathable and windproof 3-layer polyamide fabric. Used on the backhand of our most technical gloves to provide weather protection while allowing moisture to escape during high-intensity activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* You May Also Like */}
        <section className="mt-48 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-bold tracking-[0.3rem] text-[#785834] uppercase">Complete the kit</span>
            <h2
              className="text-4xl font-bold tracking-tighter"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#f4f3f3] mb-4 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Hestra glove balm in small container"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZKgw8OGO6KB6xZFCfa71OjheZrT7_ejT9BIyhLZbaQTRy5l-btmFpaDhuuH2yEtyVIDVr5BWKaTXhLFEfLpu82_Djjr1IjWfd45pftL3iBlo9B0Fj7OnURLIMwGZS2IlzY7t2EqIY5MbVThckie-hJwsOQs3DxPPpw0K5gp_2FLOppXF9hnYUs00xKsUUJnr2CUwV4MlWEQP3FLOqq2HGusHBCLWwyru1ajokT59LSfHh0PEyRly3AN-0nA5zGRyE7u9HYOytng"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 text-[8px] font-bold tracking-widest uppercase">
                  Essential
                </div>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide">Hestra Leather Balm</h4>
              <p className="text-xs text-[#4f453c] mt-1">$15.00</p>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#f4f3f3] mb-4 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Wool inner liner for winter gloves"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBcW6wpvWr4qWj8Ihei9i4KswV8cF17xUXoy_i7wkimG4W16rOLz8N8LnX-eGvdfs756dPDdxOaVn_ZNVYcw_Gu1eaSKzFWgqwyHOryhcBxagEbroJVZVuxsxGQamoGEgsRFfv4JtFqDcqpsZyKc2cikDuJhm8OBM73ZgewRXFic0WDQzTWY0t921X77VPbUr4umViqKy6oZMqIcyJrQAfrCeu-LSIsG6nQQ36rD2AQcLHB95l3Z8RGs6egeqXVaYmUR_wSKXjRQ"
                />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide">Wool Terry Liner</h4>
              <p className="text-xs text-[#4f453c] mt-1">$45.00</p>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#f4f3f3] mb-4 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Gore-Tex technical mountain glove"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_GCftR2J7yOizp-ngD_RdL2GnlnWaGn4u5CIafxJNIwrCywV1bebfMlx7N10UMQywOJ5n2L3IhV7ErGlJvgBP4-I3mCcDNToUMFpmqOPP_hy00bLEhTPki7EjjmnzoXd8MjZfSBMBKaCVB03TyqeSU27AS12kjrq9C3DnjlDOZAx3DP9NS81YBn9B4rVbBJPCkVbSv5GEudTMEZy0vTpEZ43-YMG9jDxPE3UfvS6vHPc2XUOZ8OJvTNNDVFbrbB_iVOmb5ScCVA"
                />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide">Gauntlet Sr. Glove</h4>
              <p className="text-xs text-[#4f453c] mt-1">$110.00</p>
            </div>

            {/* Card 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#f4f3f3] mb-4 relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Premium leather work glove style"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6xjze_1dGiG5CCdC57ikt4QvinpTkW4CXE1hdJFTFUKrJfCllaUKzG9euXXeXGS9ZTmkDbwpaqaFsvTantjmgjYz2x_3S-B17_XyZioSkI3HXGIwUlwSXm_Gj6bi8ci3RVPP4jHRmmGvRCwvJj6dQ2zXoktuimZwJUlxv-uP2P3jF-tAzHkz3NrxSmdcbIIh55XFipdyjD1HrwTiK_f0p_ErMSVeBUuCdnOEyB02UencvwOH1QsHGXwDIJaymNUHq3AO7FZf8Cg"
                />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wide">Wakayama Glove</h4>
              <p className="text-xs text-[#4f453c] mt-1">$150.00</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
