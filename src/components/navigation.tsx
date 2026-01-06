import { useState } from "react";
import { Menu, X, Gamepad2 } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "./start" },
    { href: "#about", label: "./profile" },
    { href: "#projects", label: "./levels" },
    { href: "#skills", label: "./stats" },
    { href: "#contact", label: "./connect" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 terminal-window backdrop-blur-sm border-b-2 border-neon-cyan">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-lg flex items-center">
            <Gamepad2 className="w-6 h-6 text-neon-magenta mr-2 pulse-glow" />
            <span className="text-neon-cyan">player@</span>
            <span className="text-neon-magenta">matrix</span>
            <span className="text-neon-yellow">:~$ </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-mono text-sm">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-neon-cyan transition-colors duration-300 text-neon-magenta hover:text-shadow pixel-border px-3 py-1 hover:bg-darker-surface"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t-2 border-neon-magenta">
            <div className="flex flex-col space-y-4 font-mono text-sm">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left hover:text-neon-cyan transition-colors duration-300 text-neon-magenta"
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
