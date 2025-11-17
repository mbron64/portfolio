import Link from 'next/link';

export function MinimalHeader() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-sm bg-[#EDECEC]/90 dark:bg-[#13120A]/90 z-50 border-b border-[#999895]/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-[11px] tracking-[0.3em] font-normal text-[#13120A] dark:text-[#EDECEC] uppercase hover:text-[#F44E01] transition-colors -ml-2">
          Michael Bronikowski
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-[10px] tracking-[0.3em] uppercase">
          <a href="#about" className="text-[#999895] hover:text-[#13120A] dark:hover:text-[#EDECEC] transition-colors">
            Background
          </a>
          <a href="#research" className="text-[#999895] hover:text-[#13120A] dark:hover:text-[#EDECEC] transition-colors">
            Research
          </a>
          <a href="#experience" className="text-[#999895] hover:text-[#13120A] dark:hover:text-[#EDECEC] transition-colors">
            Experience
          </a>
          <a href="#ventures" className="text-[#999895] hover:text-[#13120A] dark:hover:text-[#EDECEC] transition-colors">
            Ventures
          </a>
          <a href="#skills" className="text-[#999895] hover:text-[#13120A] dark:hover:text-[#EDECEC] transition-colors">
            Skills
          </a>
          <a href="#awards" className="text-[#999895] hover:text-[#13120A] dark:hover:text-[#EDECEC] transition-colors">
            Awards
          </a>
          <a href="#contact" className="text-[#999895] hover:text-[#13120A] dark:hover:text-[#EDECEC] transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
