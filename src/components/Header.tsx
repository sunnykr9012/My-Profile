import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            DevAnalyst
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <NavLinks mobile />
            <div className="mt-4 flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const baseStyles = "text-gray-300 hover:text-blue-400 transition-colors duration-300";
  const mobileStyles = mobile ? "block py-2 text-center" : "";
  
  return (
    <div className={mobile ? "flex flex-col space-y-4" : "flex space-x-8"}>
      {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`${baseStyles} ${mobileStyles}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
      <Github size={20} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
      <Linkedin size={20} />
    </a>
    <a href="mailto:contact@example.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
      <Mail size={20} />
    </a>
  </div>
);

export default Header;