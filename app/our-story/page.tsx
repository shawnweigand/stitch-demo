export default function OurStoryPage() {
  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c] pt-24 overflow-x-hidden">
      {/* Hero Section: Editorial Asymmetry */}
      <section className="relative min-h-[921px] flex items-center mb-32">
        <div
          className="w-full px-8 max-w-[1920px] mx-auto"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
          }}
        >
          <div className="col-span-12 md:col-span-7 z-10">
            <span className="inline-block text-[10px] tracking-[0.2em] text-[#785834] font-bold mb-6 uppercase">
              ESTABLISHED 1936
            </span>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter text-[#1a1c1c] mb-8"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              HANDS OF<br />HERITAGE
            </h1>
            <p className="max-w-md text-lg text-[#4f453c] font-light leading-relaxed mb-12">
              For four generations, the Magnusson family has defined the boundary between human skill and the rugged alpine cold. From the forests of Småland to the highest peaks on Earth.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5 absolute top-0 right-0 h-full w-full md:w-auto -mr-8 pointer-events-none">
            <div className="h-full w-full bg-[#f4f3f3] overflow-hidden">
              <img
                className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Vintage black and white photo of Swedish mountain landscape"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJKVM59IU9u3NIIJNmlm72ZEhPuMeBW-J0psNGLj2_mFgqYqCdQx4lLcf3frdNROhS-xzX_I3vTJAgLjRGsUi04B0luZmd5Cx04cGNHaMEH6jUWs6vuFmAUgL_4vUUOX0q83g4pYcStl8p90kAToFLyfw8mhPL4dgLpJx8ub5BxLlzzwBtvMyPt9ANAsgvygMTC-uoNkodGFFvNcPUZWGpsj00g2lCs0XSq2SmjQVOd0XxhvAFhc8kIonAdgoI2PL3kYM5M6lqYQ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="mb-48 px-8 max-w-[1920px] mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="material-symbols-outlined text-[#b08a62] text-4xl mb-8"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>
          <blockquote
            className="text-3xl md:text-5xl font-medium leading-tight text-[#1a1c1c] italic mb-8"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            &ldquo;A glove is only as good as the hand that cuts it. My grandfather knew this in 1936, and we honor that truth every day.&rdquo;
          </blockquote>
          <cite className="text-xs tracking-widest text-[#4f453c] uppercase not-italic">
            — Anton Magnusson, CEO &amp; 4th Generation
          </cite>
        </div>
      </section>

      {/* The Hestra Hand */}
      <section className="mb-48 bg-[#f4f3f3] py-32">
        <div
          className="max-w-[1920px] mx-auto px-8 items-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
          }}
        >
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <div className="rounded-xl overflow-hidden shadow-2xl transform md:-rotate-2">
              <img
                className="w-full aspect-[4/5] object-cover"
                alt="Close up of master craftsman hands cutting premium leather"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-2F1H6LFfiNqzautZpE7g3hG6Modj0kjJIOg4yQQgH3oJ1NMr-C_oXiCKDvIIYmzEBA0tzD4Cqow_5asVT0WrpdhhRCVLjiapbpsBJeIVL0o0fLJ6sYlpE_JoH_BCICZWigCjcBiwe7CmItnL1agwh1BEdKJnrgfjAhFI4JbD87Bjnj2eRjxkFm4HBgfCwRMJqpCp6Cwu-9OE5es4Dx7qDAmR9YKCVtdO62YrGyCTN2U1GsUyGsRmqY6xLY_H7wDBd_fOCmxU-w"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 mb-16 md:mb-0">
            <h2
              className="text-5xl font-bold mb-8 text-[#1a1c1c]"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              THE HESTRA HAND
            </h2>
            <div className="space-y-6 text-[#4f453c] leading-relaxed text-lg">
              <p>
                Glove cutting is a dying art. At Hestra, it is our heartbeat. Only a few master cutters remain in the world, and many of them work in our small Swedish village.
              </p>
              <p>
                The process starts with the leather—sourced from the finest alpine tanneries. Each piece is hand-stretched and inspected for flaws. The cutter must understand the fiber direction of the skin, ensuring the glove stretches across the width of the hand, never in length.
              </p>
              <div className="pt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-4 text-[#1a1c1c] font-bold uppercase text-xs tracking-widest group"
                >
                  <span className="border-b-2 border-[#b08a62] pb-1 transition-all group-hover:border-[#785834]">
                    Discover our craft
                  </span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-48 px-8 max-w-[1920px] mx-auto">
        <h2
          className="text-xs tracking-[0.3em] text-[#785834] font-bold mb-24 text-center uppercase"
          style={{ fontFamily: "var(--font-display-var)" }}
        >
          THE CHRONICLE
        </h2>
        <div className="relative space-y-32">
          {/* Timeline Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#d3c4b7]/30 hidden md:block"></div>

          {/* 1936 */}
          <div
            className="relative items-center"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1.5rem",
            }}
          >
            <div className="col-span-12 md:col-span-5 text-right hidden md:block">
              <h3
                className="text-7xl font-bold text-[#e3e2e2]"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                1936
              </h3>
            </div>
            <div className="hidden md:flex col-span-2 justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-[#785834] ring-8 ring-[#faf9f9]"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="md:hidden mb-4">
                <h3
                  className="text-5xl font-bold text-[#b08a62]/30"
                  style={{ fontFamily: "var(--font-display-var)" }}
                >
                  1936
                </h3>
              </div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                MARTIN&apos;S VISION
              </h4>
              <p className="text-[#4f453c] leading-relaxed">
                Martin Magnusson starts making gloves for local lumberjacks in Hestra. He builds a workshop in his farmhouse, focused on durability and protection against the harsh Swedish winters.
              </p>
              <img
                className="mt-8 rounded-lg w-full h-64 object-cover"
                style={{ filter: "sepia(0.3)" }}
                alt="Vintage black and white image of a farmhouse in Sweden"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvuyvJ3avbiywNWO3gXdrsgFdkvStVDiuXmdmXD9gFGP7IKg_faWmdzuImOUrd7tbAw5d9scIJ99n9A-Kle5JfXKvAmdiklM7QWvMNloK0_4MIIGSyiBJfS6_srShnkNudHN_doxrhN4anbnMHFvD0PwQYBCpHaw31pqjg3CqzCowr_udGDRLihqXo_OZkkWNWyVNzDvDejVq5uEXyuNv35Bbd4sKzOg6I028oh5PoBGPtgzPPR9PouAI0hsVbgvcmtZnKz7Gj5w"
              />
            </div>
          </div>

          {/* 1960 */}
          <div
            className="relative items-center"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1.5rem",
            }}
          >
            <div className="col-span-12 md:col-span-5 md:order-2">
              <h3
                className="text-7xl font-bold text-[#e3e2e2] hidden md:block"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                1960
              </h3>
            </div>
            <div className="hidden md:flex col-span-2 md:order-1 justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-[#785834] ring-8 ring-[#faf9f9]"></div>
            </div>
            <div className="col-span-12 md:col-span-5 md:order-0 text-right">
              <div className="md:hidden mb-4 text-left">
                <h3
                  className="text-5xl font-bold text-[#b08a62]/30"
                  style={{ fontFamily: "var(--font-display-var)" }}
                >
                  1960
                </h3>
              </div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                THE SKI REVOLUTION
              </h4>
              <p className="text-[#4f453c] leading-relaxed">
                The construction of Isaberg ski resort near Hestra changes everything. Martin&apos;s sons, Lars-Olof and Göte, begin designing specialized ski gloves that would become the industry standard.
              </p>
              <img
                className="mt-8 rounded-lg w-full h-64 object-cover grayscale"
                alt="Historical photo of skiers in vintage gear"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyL1aL9E3GiU_PnmoZvxPrxkjahFcAmoXtJ2Gw97RLrDfyV4kNEGmz_GNYDtpEIQYBWX3mqU94C_LevwuxKaC69qdqvSZjNn16MJe9sIPFpXUiBGMCh9ra8fcJg15nBfxBumF8uAERw5Jgvrr3MZjraUea08YGB2HHLIFy9f9SIP0LtqKMWyfUoI9ggWz06lxvfU6Gd7Cyo5G6Gwq5hwVH6qKGwpQKUsNQmftRX0AIxhEPmfQi3SV_5d2o6g_QNl0w26y1_LWClw"
              />
            </div>
          </div>

          {/* TODAY */}
          <div
            className="relative items-center"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1.5rem",
            }}
          >
            <div className="col-span-12 md:col-span-5 text-right hidden md:block">
              <h3
                className="text-7xl font-bold text-[#e3e2e2]"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                TODAY
              </h3>
            </div>
            <div className="hidden md:flex col-span-2 justify-center z-10">
              <div className="w-3 h-3 rounded-full bg-[#785834] ring-8 ring-[#faf9f9]"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="md:hidden mb-4">
                <h3
                  className="text-5xl font-bold text-[#b08a62]/30"
                  style={{ fontFamily: "var(--font-display-var)" }}
                >
                  TODAY
                </h3>
              </div>
              <h4
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                GLOBAL EXCELLENCE
              </h4>
              <p className="text-[#4f453c] leading-relaxed">
                With subsidiaries across the world and a range of 400+ styles, Hestra remains family-owned, family-operated, and dedicated to the original craft of Martin Magnusson.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Immersive Shot */}
      <section className="mb-48 h-[716px] relative overflow-hidden">
        <img
          className="w-full h-full object-cover scale-105"
          alt="Cinematic wide shot of snow-capped alpine mountains at dawn"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgCjG6ZBBMzI90T6GFyTv1NxeGAFMHRH23OGuxEDdRAPqp0kfPC13JQjvZUq0DUAVw1VO-e3_npVSdI1AiTTp8VBLBLHN2yc-AcLfNn61A8dNvB2cpHh2zeCDCpcMOmcb3uD9q6jyeBXeSR8hXod7jqTq4bdWDhBbTooK6XG2JCRAr2K6G8zq2KoObPWGOdGsMigmr7puohJCrGguu27fgBMQWCyX8Z619Bs2eGFjqAZwmsmbmrdELkLXp5wsIaAbBhRHTtvXClg"
        />
        <div className="absolute inset-0 bg-[#785834]/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-8">
            <h2
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              MADE IN NATURE. MADE BY HAND.
            </h2>
          </div>
        </div>
      </section>

      {/* Product Philosophy Bento */}
      <section className="mb-48 px-8 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#e3e2e2] p-12 flex flex-col justify-between group overflow-hidden relative">
            <div className="z-10">
              <h3
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                REPLACEABLE LINERS
              </h3>
              <p className="max-w-md text-[#4f453c] leading-relaxed mb-8">
                Extend the life of your gloves. Our philosophy is rooted in longevity—repair, don&apos;t replace.
              </p>
              <a
                href="#"
                className="uppercase text-[10px] tracking-widest font-bold border-b border-[#785834] pb-1"
              >
                Our Sustainability Promise
              </a>
            </div>
            <img
              className="absolute -right-20 -bottom-20 w-80 h-80 object-cover rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"
              alt="Macro photo of textile texture and stitching"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHYXbubU76jB8XBshM6C4Xn0CrqVrTkgMWCfkt_zzpQ_CoNFsuLF5W-e3nsB9NIRLyph2g-82fFql0ZAAKo4L3jNSZ8BHTT-WU7nUzJROE75QUKE2e7vAk4VDFKKfHbfVEwc7VTTRoaywOHefrrsWIxwcZYbNpKUyvjQpoMUOJvjDW3GjAr61tIhG5x8bPaDEoChpyRoR0y9uA_8j2w72XrO2mcxmqr4h8f-4G68FphwUzgRVhCj3FXMwscLHJGwIb-u98uLwD4g"
            />
          </div>
          <div className="bg-[#785834] text-white p-12 flex flex-col justify-center">
            <span className="material-symbols-outlined text-4xl mb-6">temp_preferences_custom</span>
            <h3
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              TESTED AT -40°C
            </h3>
            <p className="opacity-80 leading-relaxed">
              Every professional model is field-tested by alpine guides in the world&apos;s most extreme conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
