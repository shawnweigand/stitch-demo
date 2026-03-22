export default function HomePage() {
  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c]">
      {/* Hero Section */}
      <section className="relative min-h-[1100px] w-full flex flex-col items-center">
        {/* Immersive Background */}
        <div className="absolute top-0 left-0 w-full h-[850px] overflow-hidden hero-clip">
          <img
            className="w-full h-full object-cover"
            alt="Expansive alpine mountain landscape"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4hJwDBNDAt_57ZyZC2r3PhROpQPKuT4Ql2Q7r9lLYSeVD3HIoPxmFsWn2T-4v3r4kWix09U-UwYDR9Cf_jSbMXS0jarzOJDuslCjjsMi3O3SDn_KloMqcwqYfJGdZRd-akAcIYe1XptBX_FWqG-QgIV7Jz_dasSaRGUCEatGYRyLCIuuWvVU4MJsbFSrPTZzC5N2P-YdNBP4XIj8Mlu2PflvBJkGgrFwLcFTtvnfZI7_OCCIlBcsxY90jiBD8ijnpGSOx4YCeCA"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
          {/* Large Typography */}
          <div className="absolute inset-0 flex items-start justify-center pt-32 md:pt-48">
            <h1
              className="text-white font-bold text-[12vw] md:text-[15vw] tracking-tighter leading-none opacity-90 select-none fade-text"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              MASTER
            </h1>
          </div>
        </div>

        {/* Floating Cards Container */}
        <div className="relative z-10 mt-[480px] w-full max-w-7xl px-8 flex flex-col md:flex-row items-end justify-center">
          {/* Card 1: Alpine */}
          <div className="bg-white p-2 shadow-2xl rounded-sm transition-transform hover:-translate-y-4 duration-500 w-full md:w-1/3 border-b-[8px] border-[#C8A97E] md:translate-x-2">
            <div className="aspect-[4/5] overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover"
                alt="Alpine skiing"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7VQcUrm44WNlTkhJW2MmErs5QehtE-wWiRgvEPH5jcszGlFcCV7L3jVPeFTFX1s2AdefbaU2SNOk1eLu6JsMlFO9kYbAljlvuLkIWZbMP3d1ZexOl6ovaDCcLO5oTR4Fd9a9O1ub8wxPLqKGuAM8ItxuxWkUdvBhtgzhyA2biudnbBWkis7u-Jx4TaetjA9WGF6SaERHIdNmGkZaaRKr-1PN7KsywnZe6btjd4IqRSrrvQKF4YRkedlVhzekLLKDeQkxy4MxIRQ"
              />
            </div>
            <div className="text-center pb-8 px-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1c1c]/40 mb-2 block">Iconic Series</span>
              <h3
                className="text-3xl font-bold tracking-tighter text-[#C8A97E] mb-4"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                ALPINE
              </h3>
              <p className="text-xs text-[#4f453c] leading-relaxed mb-6">
                Built for the highest peaks and the coldest winds. Professional grade hand protection.
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-[#eeeeed]">
                <div>
                  <span className="block text-[8px] font-bold uppercase opacity-40">Durability</span>
                  <span className="text-[10px] font-bold uppercase">Extreme</span>
                </div>
                <span className="text-[#b08a62] text-xl material-symbols-outlined">expand_more</span>
                <div>
                  <span className="block text-[8px] font-bold uppercase opacity-40">Activity</span>
                  <span className="text-[10px] font-bold uppercase">Freeride</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Outdoor (Featured/Tall) */}
          <div className="bg-white p-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-sm transition-transform hover:-translate-y-4 duration-500 md:-mt-12 md:mb-[-100px] card-chevron w-full md:w-1/3 relative z-10">
            <div className="aspect-[4/6] overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover"
                alt="Outdoor work"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAairrKnjtdraIeKoGhjV_7mfB0sepbIS1AfSzjVnGVbFDurrWg9elV-AerL8t0Ipo_KV12bXc2MB9odqVyecEsRmQz30q2wlGPRtNVOQUkqv-Wj-ATjLnGFPqObQXx8J-TXDrjfBCll-7Ealw8R-ShmoFs9FbRh2qe3nzgCNF2G1pTDLpLgoM1o6tRDWi9OMFn8HO9ONUYXDOz9p138-UhPlOVjzlyVVdNl-ZM4MHQxTgMh_5XEADA0UtdoSWBGyEITjWb9IVMBw"
              />
            </div>
            <div className="text-center pb-24 px-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1c1c]/40 mb-2 block">
                Utility &amp; Work
              </span>
              <h3
                className="text-4xl font-bold tracking-tighter text-[#5C8AB4] mb-4"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                OUTDOOR
              </h3>
              <div className="flex justify-between items-center pt-4 border-t border-[#eeeeed]">
                <div>
                  <span className="block text-[8px] font-bold uppercase opacity-40">Durability</span>
                  <span className="text-[10px] font-bold uppercase">High</span>
                </div>
                <span className="text-[#b08a62] text-xl material-symbols-outlined">expand_more</span>
                <div>
                  <span className="block text-[8px] font-bold uppercase opacity-40">Activity</span>
                  <span className="text-[10px] font-bold uppercase">Multi</span>
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 w-full h-full bg-[#5C8AB4] pointer-events-none"
              style={{ clipPath: "polygon(0 88%, 50% 100%, 100% 88%, 100% 85%, 50% 97%, 0 85%)" }}
            ></div>
          </div>

          {/* Card 3: Dress */}
          <div className="bg-white p-2 shadow-2xl rounded-sm transition-transform hover:-translate-y-4 duration-500 w-full md:w-1/3 border-b-[8px] border-[#A46E6E] md:-translate-x-2">
            <div className="aspect-[4/5] overflow-hidden mb-6">
              <img
                className="w-full h-full object-cover"
                alt="Dress gloves"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYbi5xRfBNr8h9vhXMUAWAKTG7pb7swLa6voFKugZdx_1CtmWocR5uGybm7qUP1ZWVUoBoJs_JtpF8KOoXWUP-tSuql1GFHzKMUH1FvEB6g5oWMd4BJczUZHUqDRxlAgO6cryfbdSNEH7h08cRFJH0k-eLBkErNypg3EpXHN1aw-pDUIJczwHkd3Rz0FWnOFbBHXwDJIlyzkyRgzK7e_3DRf-dHdyOzr0vFswpkvAx2Dgrf42KWxHdI6U6r-RHhwa_bWOUyFV9qg"
              />
            </div>
            <div className="text-center pb-8 px-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1c1c]/40 mb-2 block">Heritage Collection</span>
              <h3
                className="text-3xl font-bold tracking-tighter text-[#A46E6E] mb-4"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                DRESS
              </h3>
              <p className="text-xs text-[#4f453c] leading-relaxed mb-6">
                The ultimate refined tool for the urban winter. Hand-sewn luxury since 1936.
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-[#eeeeed]">
                <div>
                  <span className="block text-[8px] font-bold uppercase opacity-40">Style</span>
                  <span className="text-[10px] font-bold uppercase">Classic</span>
                </div>
                <span className="text-[#b08a62] text-xl material-symbols-outlined">expand_more</span>
                <div>
                  <span className="block text-[8px] font-bold uppercase opacity-40">Leather</span>
                  <span className="text-[10px] font-bold uppercase">Deerskin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-32 px-8 md:px-24 bg-[#faf9f9] max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2
              className="text-5xl font-bold tracking-tighter text-[#1a1c1c] mb-6"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              TOP DESTINATIONS
            </h2>
            <p className="text-[#4f453c] leading-relaxed text-lg">
              Whether you are carving lines in the backcountry, navigating the morning commute, or working in the forest, we have the perfect layer for your hands.
            </p>
          </div>
          <a
            href="#"
            className="uppercase tracking-widest text-sm font-bold text-[#1a1c1c] border-b-2 border-[#b08a62] pb-1 hover:text-[#785834] transition-colors"
          >
            View All Collections
          </a>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
          {/* Ski */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-xl editorial-shadow">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Ski gloves detail on a mountain peak during sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7VQcUrm44WNlTkhJW2MmErs5QehtE-wWiRgvEPH5jcszGlFcCV7L3jVPeFTFX1s2AdefbaU2SNOk1eLu6JsMlFO9kYbAljlvuLkIWZbMP3d1ZexOl6ovaDCcLO5oTR4Fd9a9O1ub8wxPLqKGuAM8ItxuxWkUdvBhtgzhyA2biudnbBWkis7u-Jx4TaetjA9WGF6SaERHIdNmGkZaaRKr-1PN7KsywnZe6btjd4IqRSrrvQKF4YRkedlVhzekLLKDeQkxy4MxIRQ"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="absolute bottom-12 left-12">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 block">Adventure</span>
              <h3
                className="text-white text-5xl font-bold tracking-tighter"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                Ski &amp; Alpine
              </h3>
              <button className="mt-6 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                Shop Category <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>

          {/* Outdoor */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-xl editorial-shadow">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Durable leather gloves for outdoor work in autumn forest"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAairrKnjtdraIeKoGhjV_7mfB0sepbIS1AfSzjVnGVbFDurrWg9elV-AerL8t0Ipo_KV12bXc2MB9odqVyecEsRmQz30q2wlGPRtNVOQUkqv-Wj-ATjLnGFPqObQXx8J-TXDrjfBCll-7Ealw8R-ShmoFs9FbRh2qe3nzgCNF2G1pTDLpLgoM1o6tRDWi9OMFn8HO9ONUYXDOz9p138-UhPlOVjzlyVVdNl-ZM4MHQxTgMh_5XEADA0UtdoSWBGyEITjWb9IVMBw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
            <div className="absolute top-12 left-12">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 block">Rugged Utility</span>
              <h3
                className="text-white text-4xl font-bold tracking-tighter"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                Outdoor
              </h3>
            </div>
          </div>

          {/* Dress */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-xl editorial-shadow h-[400px] md:h-auto">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Handmade luxury leather dress gloves on a stone table"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYbi5xRfBNr8h9vhXMUAWAKTG7pb7swLa6voFKugZdx_1CtmWocR5uGybm7qUP1ZWVUoBoJs_JtpF8KOoXWUP-tSuql1GFHzKMUH1FvEB6g5oWMd4BJczUZHUqDRxlAgO6cryfbdSNEH7h08cRFJH0k-eLBkErNypg3EpXHN1aw-pDUIJczwHkd3Rz0FWnOFbBHXwDJIlyzkyRgzK7e_3DRf-dHdyOzr0vFswpkvAx2Dgrf42KWxHdI6U6r-RHhwa_bWOUyFV9qg"
            />
            <div className="absolute inset-0 bg-[#2b1700]/20 group-hover:bg-[#2b1700]/40 transition-all duration-300"></div>
            <div className="absolute bottom-12 left-12">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 block">Heritage Craft</span>
              <h3
                className="text-white text-4xl font-bold tracking-tighter"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                Dress
              </h3>
            </div>
          </div>

          {/* Cross Country */}
          <div className="md:col-span-7 relative group overflow-hidden rounded-xl editorial-shadow h-[400px] md:h-auto">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Person cross country skiing through a frozen forest"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiv7YPqTRKfPKO2U8rTiPNrJ6KDr3pQj0Bv9xgN5Uioiqxbx2H-ay9XRtuVog6X_8od35MWVrmX2X8vCB4EiV0Gw_vbI9buG_MNJEhFX0NQfytQyEIpz1NH1skY9cRi3cvWfyp6VnTYTf3VFtr7XKgf8k5NhONOIkgK4HIJzUxlPoopWrWS9jnBE4-d6HcwEH98-opXnGVPaSgQXmGLZAmX8FgGktO-T124gufJ-zl560YJoo8HaNW6XP_-jCPeJCYfOgYfTz0Kg"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="absolute top-12 right-12 text-right">
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 block">Endurance</span>
              <h3
                className="text-white text-4xl font-bold tracking-tighter"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                Cross Country
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted for Longevity */}
      <section className="py-24 bg-[#f4f3f3] overflow-hidden">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-8 md:px-24">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-20 bg-white p-12 editorial-shadow max-w-lg lg:ml-auto lg:-mr-24 rounded-sm ghost-border">
              <span className="text-[#785834] font-bold uppercase tracking-widest text-xs mb-4 block">The Leather Selection</span>
              <h2
                className="text-5xl font-bold tracking-tighter mb-8 leading-none"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                CRAFTED FOR LONGEVITY
              </h2>
              <p className="text-[#4f453c] leading-relaxed mb-8">
                Every piece of leather is hand-selected. From the supple goat leather used in our alpine models to the durable deerskin of our dress line, we ensure that every pair is built to last a lifetime.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#785834]">verified</span>
                  <div>
                    <span className="block font-bold text-sm uppercase">Durability First</span>
                    <span className="text-sm opacity-70">Double stitched seams for extreme conditions.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#785834]">eco</span>
                  <div>
                    <span className="block font-bold text-sm uppercase">Renewable Insulation</span>
                    <span className="text-sm opacity-70">Using natural wool liners for moisture control.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute -top-12 -left-12 w-full h-full bg-[#e3e2e2]/50 -z-10 rounded-xl"></div>
          </div>
          <div className="relative order-1 lg:order-2 h-[600px] lg:h-[800px]">
            <img
              className="w-full h-full object-cover rounded-xl editorial-shadow"
              alt="Close up of a leather worker sewing a Hestra glove"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtflc314aUVu_9e9cGPe5nQNGAJVXmiqZf3qZS107jpB4wSfKh6E2zLSP_aFr7tHVx8eW5C3kQF0noKDtwAYABA5ZH1ZJMCyxwiOk1xNgwJ3lDd2ZzDtm_6wqItpHahVf5a3pRKX9ceTp5nuXuzd4eUn0Di0Xz6xjvU1HAp-OcxESq8H1Xpc39E861065B1_SLl3iAPIchcjN0lhHlQh4_VaVqr67y6wb6jAa-YjxGgLwGtO8oqq_pNhMjDqImTwjekYcMN-GrLQ"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#b08a62] p-8 text-[#3d2505] hidden md:block">
              <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-display-var)" }}>87+</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest mt-2">Years of Swedish Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Winter Essentials */}
      <section className="py-32 px-8 md:px-24 bg-[#faf9f9] max-w-[1920px] mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#785834] font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Seasonal Picks</span>
          <h2
            className="text-6xl font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            THE WINTER ESSENTIALS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="group">
            <div className="aspect-[4/5] bg-[#f4f3f3] overflow-hidden rounded-lg mb-6 relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Hestra Army Leather Heli Ski Glove"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvqMQqQ_Ojy_lmusk_SmH_rgp5WD846-1V9115qfUIf3-WjQnk4nrPJH2UmHqWcS9LOjhWPiUhMcaswWMdWKoa1hvbkiC_7YQRc4ifBEE_8u4wlz1f7g1rzVWao1YQCMYCGzGj8Dy_K-WUmLTcwdZSs_SXETWnYB_bOmILIE0OS69lKLl0mhj5NxFjEmIupEMjZUUM959uGK1QnMtgq4YT9XkcRV-S-RaDJxgvDSM7e9u0tPoWKcOZzkbU45hxPtbuX3itQG3SbQ"
              />
              <div className="absolute top-4 left-4 bg-[#1a1c1c] text-[#faf9f9] px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                Iconic
              </div>
              <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#1a1c1c] px-8 py-4 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-2xl">
                Quick Shop
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg tracking-tight uppercase">Army Leather Heli Ski</h3>
                <p className="text-[#4f453c] text-sm mt-1">Our most legendary model.</p>
              </div>
              <span className="font-medium" style={{ fontFamily: "var(--font-display-var)" }}>$165</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group">
            <div className="aspect-[4/5] bg-[#f4f3f3] overflow-hidden rounded-lg mb-6 relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Hestra Fall Line Leather Glove in cork color"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBhSi7qHc_5EFlc882t7srNr__g1MNMx2FqT5dTTBaZaO1ifTLMgoeu--HiKUSU4otz66qWfkjeLLKVewijJCwA_9GcQNNqG9VlFYkX5sraxQg5rBJQcAdsmNm_2sxy04ul0fDsN2B4FklKdpXIDOY059riF5u0tj6b2TaZdXdO3SiwVjlayYRAmcr-76g81TCheQDI7typ-71uioUPzqArfc543m6KWf7C8tzDSHkUPcohzmuWAgFnaWV0gC-HYI-OWRXVU_2fw"
              />
              <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#1a1c1c] px-8 py-4 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-2xl">
                Quick Shop
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg tracking-tight uppercase">Fall Line</h3>
                <p className="text-[#4f453c] text-sm mt-1">Short cuff freeride classic.</p>
              </div>
              <span className="font-medium" style={{ fontFamily: "var(--font-display-var)" }}>$150</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group">
            <div className="aspect-[4/5] bg-[#f4f3f3] overflow-hidden rounded-lg mb-6 relative">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Hestra Peccary Leather Dress Glove in dark brown"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoUFJnqLXl-sfYtSHLVxth01ivHy-ETPuryBBjWH33MVRll091__Ayok63LQ0afyVPWYVwkCQi8raowVD78mfTpxTp5FUVXWYQm9DAiYqv71GoHTvIIUC4BkG2YJYTQehDOdxRwAy3kipXbWPIDAaXXNyDg6Yg4cUJao0CO10zcskhqQ-OzrFDZ7oXWQYZFSe8Sw-4RaX509DxP2IAG7GbGXVR8RZBwr7D7aaU-qj3nmmJAoCAeEavezK2vl6rjnGfeF7iI4t1xg"
              />
              <div className="absolute top-4 left-4 bg-[#785834] text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                Hand Sewn
              </div>
              <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#1a1c1c] px-8 py-4 text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-2xl">
                Quick Shop
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg tracking-tight uppercase">Peccary Handsewn</h3>
                <p className="text-[#4f453c] text-sm mt-1">The pinnacle of luxury handwear.</p>
              </div>
              <span className="font-medium" style={{ fontFamily: "var(--font-display-var)" }}>$385</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Vision */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            alt="Massive alpine mountain range under direct sunlight"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4hJwDBNDAt_57ZyZC2r3PhROpQPKuT4Ql2Q7r9lLYSeVD3HIoPxmFsWn2T-4v3r4kWix09U-UwYDR9Cf_jSbMXS0jarzOJDuslCjjsMi3O3SDn_KloMqcwqYfJGdZRd-akAcIYe1XptBX_FWqG-QgIV7Jz_dasSaRGUCEatGYRyLCIuuWvVU4MJsbFSrPTZzC5N2P-YdNBP4XIj8Mlu2PflvBJkGgrFwLcFTtvnfZI7_OCCIlBcsxY90jiBD8ijnpGSOx4YCeCA"
          />
          <div className="absolute inset-0 bg-[#785834]/20"></div>
        </div>
        <div className="relative z-10 w-full text-center px-8">
          <h2
            className="text-white text-8xl md:text-[12rem] font-bold tracking-[-0.05em] leading-none opacity-20"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            HESTRA
          </h2>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white max-w-2xl text-xl md:text-2xl font-light italic leading-relaxed">
              &ldquo;Hands come first. Everything we do is a tribute to the craftsmanship and the utility of the tool that connects us to the world.&rdquo;
            </p>
            <button className="mt-12 text-white border-b border-white pb-2 font-bold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity">
              Discover Our History
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
