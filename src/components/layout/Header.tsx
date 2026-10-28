import MaximCodeLogo from "@/components/features/MaximCodeLogo";

const Header = () => (
  <header className="bg-gradient-to-r from-[#0a1f42] to-[#0f2d5e] shadow-xl border-b border-[#c8a84b]/30 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MaximCodeLogo size={42} />
        <div>
          <h1 className="text-white font-extrabold text-lg tracking-widest leading-tight">MAXIM CODE</h1>
          <p className="text-[#c8a84b] text-[9px] tracking-[2.5px] font-semibold">BUILDING FUTURE INNOVATORS</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <span className="bg-[#c8a84b]/20 border border-[#c8a84b]/40 text-[#c8a84b] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">
          DOCUMENT GENERATOR
        </span>
      </div>
    </div>
  </header>
);

export default Header;
