export default function Footer() {
  return (
    <footer className="bg-[#f4f3f3] w-full border-t border-[#d3c4b7]/15">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-16 mt-24 max-w-[1920px] mx-auto">
        <div className="mb-8 md:mb-0">
          <span
            className="text-lg font-bold text-[#1a1c1c] uppercase"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            HESTRA
          </span>
          <p className="text-[#1a1c1c]/60 uppercase text-[10px] tracking-widest mt-2">
            © 2024 HESTRA GLOVES. CRAFTED IN SWEDEN.
          </p>
        </div>
        <div className="flex gap-12">
          <a
            href="#"
            className="text-[#1a1c1c]/60 uppercase text-[10px] tracking-widest hover:text-[#785834] transition-colors"
          >
            Sustainability
          </a>
          <a
            href="#"
            className="text-[#1a1c1c]/60 uppercase text-[10px] tracking-widest hover:text-[#785834] transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-[#1a1c1c]/60 uppercase text-[10px] tracking-widest hover:text-[#785834] transition-colors"
          >
            Care Guide
          </a>
          <a
            href="#"
            className="text-[#1a1c1c]/60 uppercase text-[10px] tracking-widest hover:text-[#785834] transition-colors"
          >
            Shipping
          </a>
        </div>
        <div className="mt-8 md:mt-0 flex gap-4">
          <div className="w-10 h-10 rounded-full bg-[#faf9f9] flex items-center justify-center text-[#4f453c] hover:bg-[#785834] hover:text-white transition-all cursor-pointer">
            <span className="material-symbols-outlined text-lg">public</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#faf9f9] flex items-center justify-center text-[#4f453c] hover:bg-[#785834] hover:text-white transition-all cursor-pointer">
            <span className="material-symbols-outlined text-lg">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
