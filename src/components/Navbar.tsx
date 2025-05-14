import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="py-6 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight"
        >
          <div className="flex items-center">
            <span className="text-white">SEB KAY</span>
            <div className="w-6 h-1 bg-blue-500 ml-2"></div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-4 px-6 bg-slate-900 mt-2">
          <div className="flex flex-col space-y-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => {
  const location = useLocation();
  const links = [
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/process', label: 'Process' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/blog', label: 'Blog' },
  ];
  
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`hover:text-white transition-colors duration-200 ${
            location.pathname === link.to ? 'text-white' : 'text-gray-400'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;