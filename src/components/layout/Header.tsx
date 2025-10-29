import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/logo-wo-name.jpg" 
              alt="ROFECH Logo" 
              className="w-10 h-10 object-cover transform group-hover:rotate-45 transition-transform duration-300"
            />
            <span className={`font-heading font-bold text-xl tracking-tight transition-colors ${
              isScrolled ? 'text-rofech-black' : 'text-white'
            }`}>
              ROFECH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 font-semibold text-sm uppercase tracking-[0.15em] transition-all duration-300 relative ${
                    isActive
                      ? 'text-rofech-yellow after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-rofech-yellow'
                      : isScrolled
                      ? 'text-rofech-black hover:text-rofech-yellow after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-rofech-yellow after:transition-all after:duration-300 hover:after:w-full'
                      : 'text-white hover:text-rofech-yellow after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-rofech-yellow after:transition-all after:duration-300 hover:after:w-full'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-rofech-black' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="section-container py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 font-medium transition-colors ${
                        isActive
                          ? 'text-rofech-yellow'
                          : 'text-rofech-black hover:text-rofech-yellow'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

