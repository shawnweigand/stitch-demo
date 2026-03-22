export default function AlpineCollectionPage() {
  return (
    <div className="bg-[#faf9f9] text-[#1a1c1c]">
      {/* Hero Section */}
      <section className="relative w-full h-[870px] overflow-hidden bg-[#f4f3f3]">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale-[0.2] brightness-90"
            alt="Epic snow-covered mountain peaks in Sweden"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw9d2GBmhQaBIb4PnWDigWXNgdLQsM4g9VyuThp2JHUe7qq-IIAQNZcylOhLVjjnN8tjEeBlV6O4j6-vp5CYTxwaSt-e2zSnLesSo7Y4DS0zV_YL5FEo8W-TeLjVo0jq-3yH-7xs4QzYx3pIYbdPAhY3WozRI-BxoMhWPYZVP-PH3AB8QOHsqBkem7qcc0UULwOggsjuvhd0Kh0yZkBQKkoY7Vd5AuEa2wwMQFPn0CVyoARNaCs1fklpNO8xTeKOtxZPnUHYjroA"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf9f9]/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-12 pb-24 max-w-[1920px] mx-auto">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-[#785834] text-white text-[10px] tracking-[0.2em] font-medium mb-6 uppercase">
              Est. 1936 Småland
            </span>
            <h1
              className="text-7xl md:text-9xl font-bold tracking-tighter text-[#1a1c1c] leading-[0.9] mb-8"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              Alpine <br />Collection
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#4f453c] leading-relaxed max-w-2xl">
              Crafted for the demanding conditions of the Swedish mountains. Our Alpine series combines timeless leather craftsmanship with modern technical performance.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Block */}
      <section className="py-32 px-12 max-w-[1920px] mx-auto overflow-hidden">
        <div className="editorial-grid items-center">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <h2
              className="text-4xl font-bold tracking-tight mb-8"
              style={{ fontFamily: "var(--font-display-var)" }}
            >
              Hand-Picked <br />Hairsheep &amp; Goat Leather
            </h2>
            <p className="text-[#4f453c] leading-loose mb-12">
              Every glove in the Alpine collection starts with the material. We select only the highest grade of Army Leather—a durable, specially treated goatskin that withstands the most rigorous use while maintaining exceptional grip and feel.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#d3c4b7]"></div>
              <span className="text-[10px] tracking-widest font-bold uppercase text-[#b08a62]">Technical Excellence</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Close up of artisanal leather glove stitching"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk-powOp87_2iCCIsdaYeyKtYb0hETEe2waFbTTX0MVoNR0DjkGmATQYGI9OOqr7Z8ncuybJLjzpmOmWKwYd_L4dVUPctOWu8_gF91q4ExllOLYDq_igAXSdUTvmZv965LgSsoDt2E7UZdKR5oZxFzjtkueTYcvX8EZD77JP-KJ4y4YacCHX1819DRfRG41csfdMv8zOtHHlDLCh5_V4YMJ7EYHOXYSFzzRJycdrL5UzjZAL40P5wDyDS0vX4qhMac3UPvJ5LK8w"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="bg-[#f4f3f3] py-24 px-12">
        <div className="max-w-[1920px] mx-auto">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="flex gap-12 overflow-x-auto hide-scrollbar pb-4 w-full md:w-auto">
              <div className="group cursor-pointer">
                <span className="block text-[10px] tracking-widest text-[#4f453c]/60 font-bold mb-2">ACTIVITY</span>
                <div className="flex items-center gap-2 group-hover:text-[#785834] transition-colors">
                  <span className="text-sm font-medium">All Mountain</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
              <div className="group cursor-pointer">
                <span className="block text-[10px] tracking-widest text-[#4f453c]/60 font-bold mb-2">WARMTH</span>
                <div className="flex items-center gap-2 group-hover:text-[#785834] transition-colors">
                  <span className="text-sm font-medium">Extra Warm</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
              <div className="group cursor-pointer">
                <span className="block text-[10px] tracking-widest text-[#4f453c]/60 font-bold mb-2">MATERIAL</span>
                <div className="flex items-center gap-2 group-hover:text-[#785834] transition-colors">
                  <span className="text-sm font-medium">Army Leather</span>
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] tracking-widest text-[#4f453c]/60 font-bold">SORT BY</span>
              <p className="text-sm font-medium">Newest Arrivals</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {/* Product 1 */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#e3e2e2] transition-all duration-500 group-hover:shadow-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Hestra Army Leather Heli Ski gloves"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7bmhJLVYhiOG_5AfXoGQFeiHqtCvcEqFJbn6VJoZ86hx4ukkz3H-aySgf9iFjUBIkjXttTyCuCyL1G9mqrwoxVUIADDtJBH4-b9Fp5rCn2lNkJmlrEYg3Q23-PiBv5581bKzPZYml5z0M3W2UExKAXO3J8ApZHDC21frDTL7-MG6nyrLSCRA-s6hbqNnbGnzwGh0MayhpN_ZzL0bCjZM6Tb9n8yXIRjTBk7c_bw-upUAe6L1cmQ5FsS5rni9hC8hLvzPbSVk6RQ"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#faf9f9]/90 backdrop-blur px-3 py-1 text-[9px] tracking-widest font-bold uppercase">
                    Skier&apos;s Choice
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-[#785834] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display-var)" }}>Army Leather Heli Ski</h3>
                  <p className="text-xs text-[#4f453c] tracking-wide mb-4 uppercase">Long-cuff technical glove</p>
                  <p className="text-sm text-[#4f453c] leading-relaxed max-w-xs">Our most famous glove. A modern classic for skiing and snowboarding in cold conditions.</p>
                </div>
                <span className="font-bold text-[#785834]" style={{ fontFamily: "var(--font-display-var)" }}>$165.00</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#e3e2e2] transition-all duration-500 group-hover:shadow-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Cognac leather fall line gloves"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFoqwnbqYGwJm1EXXmlwq-sg664konWL6u4WXM8pqTR5OtuH5-UpbpalKSgP1UP5W3evkWK9wDWYfGSM1feYUHjEpL2Tq4WE4-fvE-4-iRISz8QAFv8b2vCWEAZ5kDIzFhcoVGlTGFYHJyuTOkAi9Ku9Fsy98aaNxsuGgqeemSsdgKibAg7cNdTS9lGkuzkVgUQPpSKAwg6H-tdxTCiWTj5kIvakyMVwX0wzWRz8EgxhweV00RFkA0Xv4LsELU5mUy8NsANlq1gQ"
                />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-[#785834] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display-var)" }}>Fall Line</h3>
                  <p className="text-xs text-[#4f453c] tracking-wide mb-4 uppercase">Short-cuff leather freeride</p>
                  <p className="text-sm text-[#4f453c] leading-relaxed max-w-xs">A short, soft glove for freeriders. Made of durable cowhide with external seams.</p>
                </div>
                <span className="font-bold text-[#785834]" style={{ fontFamily: "var(--font-display-var)" }}>$150.00</span>
              </div>
            </div>

            {/* Product 3 - offset */}
            <div className="group lg:translate-y-12">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#e3e2e2] transition-all duration-500 group-hover:shadow-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Vertical Cut C-Zone technical black gloves"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgQ4oR5cWYpETjDM8CZGAlQPr4LHnviFbgexQ4RCmNBJT89mUrkfAGTUGrY2XC4sKvdBu1q4RLtouM835Zwb1MnTIRohUI4EQp6QL-cgaSpeCTjsca4zxbHgiZkfFKLrC_e_U4az3EvEsorTiVDYOQFJgcxEfRXnh9EYzaUcPaDBg8xnVHSkYZ1G8E85GJhmBNdMd2AA6IaahGxiTUSPbll94nbHN8P3ulfUx7z_6wSOch8A4FkZZlbYiTsCSxbvxe_CohSG1BSQ"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#785834] text-white px-3 py-1 text-[9px] tracking-widest font-bold uppercase">Waterproof</span>
                </div>
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-[#785834] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display-var)" }}>Vertical Cut C-Zone</h3>
                  <p className="text-xs text-[#4f453c] tracking-wide mb-4 uppercase">Advanced competitive glove</p>
                  <p className="text-sm text-[#4f453c] leading-relaxed max-w-xs">A high-performance glove for technical riders. Features G-Loft insulation.</p>
                </div>
                <span className="font-bold text-[#785834]" style={{ fontFamily: "var(--font-display-var)" }}>$180.00</span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#e3e2e2] transition-all duration-500 group-hover:shadow-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Sarek Ecocuir high quality leather gloves"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3iymBMOWZrclODGF8E0gSYYN1VhqWn9qy3NRy65UD3Cn3XKXPwMQ5EehWxKDzqwLjHJP3hLYpMpQLJLHFB1rcm59EZ0lKYxITtspbNyPqBOuayieJ8_jlRCxAkeCJCQkIhMPvc0oZalWA9uB_guQwyxvbTSE_ANcbTwszxwmLXttEVvW-uY0bYHDDBAGvOxFC9Cc6E3u2fVi1LX-ZDqt_q1q9uaLk0OtxFFI_kbvH72G7AfB86VPDbj_Bt0S8Ry6XTOoKzY5CNA"
                />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-[#785834] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display-var)" }}>Sarek Ecocuir</h3>
                  <p className="text-xs text-[#4f453c] tracking-wide mb-4 uppercase">Eco-conscious durability</p>
                  <p className="text-sm text-[#4f453c] leading-relaxed max-w-xs">A long-cuff glove made from chrome-free tanned cowhide. Timeless and sustainable.</p>
                </div>
                <span className="font-bold text-[#785834]" style={{ fontFamily: "var(--font-display-var)" }}>$145.00</span>
              </div>
            </div>

            {/* Product 5 */}
            <div className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#e3e2e2] transition-all duration-500 group-hover:shadow-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Wakayama glove with retro aesthetic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTXwJGeAzyMQd4P3CXgK2JMVDWiL6YGKyftFLjVxfnvm3tocgQuJ-GGCnQjT4JSUiNflJ0ov6XwPLr7w61BIdj3uI_VKfm2tNNM__dQMYSam1rVR6g3NfPiO5q3i3x4EAx0cWRVwQbjjywVoQNQzGj5h32Bsx3hKQfYmgi7J93ma4bHa6lEHko_t1VmoGjH9kdY5ZfY1e8NUhiMXHxsB5eduWFL4VMFkD-GUSpCHnrn-vCQIh1Kp2LV7DtrNXp4JTJSgf-bicdbw"
                />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-[#785834] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display-var)" }}>Wakayama</h3>
                  <p className="text-xs text-[#4f453c] tracking-wide mb-4 uppercase">Retro inspired goat leather</p>
                  <p className="text-sm text-[#4f453c] leading-relaxed max-w-xs">A retro-inspired glove made from beautiful cowhide. Paracord wrist adjustment.</p>
                </div>
                <span className="font-bold text-[#785834]" style={{ fontFamily: "var(--font-display-var)" }}>$135.00</span>
              </div>
            </div>

            {/* Product 6 - offset */}
            <div className="group lg:translate-y-12">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#e3e2e2] transition-all duration-500 group-hover:shadow-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Hestra Leather Fall Line 3-finger mitten"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4wSxZa-Fs45YH2xI8Z3XtpWpW0OU8QmeEWw5a-qIyllHqxywvTtFt0Mh-3gVioNsjYlp4JjxfyYmiHK_n9A6kiDQ_ATuEvlcUVhYEwtyaUW9KF2QA_asnKNPLv6kuruIM5ymxDiKwK9ypyCPA9u3U7cbBOS6LALcf9-EXHNjn6G-MkVdizwyzaPyGqoNYTqXIKAKOQmdQ01SjW8CiNF-PfsBBdrrNt8tIy7sdb3PLw1nTvGmv_rbg51n4J31MUPhsqNrSq2dqRw"
                />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-[#785834] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-display-var)" }}>Fall Line 3-Finger</h3>
                  <p className="text-xs text-[#4f453c] tracking-wide mb-4 uppercase">Hybrid warmth &amp; dexterity</p>
                  <p className="text-sm text-[#4f453c] leading-relaxed max-w-xs">The best of both worlds. Mitten warmth with the dexterity of a glove.</p>
                </div>
                <span className="font-bold text-[#785834]" style={{ fontFamily: "var(--font-display-var)" }}>$155.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-48 px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase text-[#b08a62] mb-8 block">Built To Last</span>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            The Longevity of Leather
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-24">
            <div>
              <span
                className="text-6xl font-light text-[#785834]/30 mb-6 block"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                01
              </span>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Clean with Care</h4>
              <p className="text-sm text-[#4f453c] leading-relaxed">Wipe with a damp cloth. Never machine wash leather gloves.</p>
            </div>
            <div>
              <span
                className="text-6xl font-light text-[#785834]/30 mb-6 block"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                02
              </span>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4">The Balm Effect</h4>
              <p className="text-sm text-[#4f453c] leading-relaxed">Apply Hestra Leather Balm regularly to maintain suppleness and water resistance.</p>
            </div>
            <div>
              <span
                className="text-6xl font-light text-[#785834]/30 mb-6 block"
                style={{ fontFamily: "var(--font-display-var)" }}
              >
                03
              </span>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Dry Naturally</h4>
              <p className="text-sm text-[#4f453c] leading-relaxed">Let them dry at room temperature. Intense heat will crack the leather.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
