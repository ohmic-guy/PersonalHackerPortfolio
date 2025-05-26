import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "./home" },
    { href: "#about", label: "./recon" },
    { href: "#projects", label: "./exploits" },
    { href: "#skills", label: "./arsenal" },
    { href: "#contact", label: "./contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 terminal-window backdrop-blur-sm border-b border-hack-red">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-hack-red text-lg">
            <span className="text-warning-orange">root@</span>
            <span className="text-text-primary">redteam</span>
            <span className="text-hack-red">:~# </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-mono text-sm">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-hack-red transition-colors duration-300 text-text-secondary hover:text-shadow"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-hack-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Terminal className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-hack-red">
            <div className="flex flex-col space-y-4 font-mono text-sm">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left hover:text-hack-red transition-colors duration-300 text-text-secondary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
