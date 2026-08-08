import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-rofech-limewash/95 backdrop-blur-sm border-rofech-ink/10' : 'bg-rofech-limewash border-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo-wo-name.jpg"
              alt="ROFECH Logo"
              className="w-9 h-9 object-cover"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading font-medium text-lg tracking-tight text-rofech-ink">
                ROFECH
              </span>
              <span className="hidden sm:block font-mono text-[10px] uppercase tracking-widest2 text-rofech-concrete mt-0.5">
                design &amp; development
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 font-mono text-xs uppercase tracking-widest2 transition-colors duration-300 relative ${
                    isActive
                      ? 'text-rofech-ink after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-rofech-brass'
                      : 'text-rofech-concrete hover:text-rofech-ink'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="font-mono text-xs uppercase tracking-widest2 border border-rofech-ink px-5 py-2.5 text-rofech-ink hover:bg-rofech-ink hover:text-rofech-limewash transition-colors duration-300"
            >
              Start a project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-rofech-ink transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
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
            className="md:hidden bg-rofech-limewash border-t border-rofech-ink/10"
          >
            <nav className="section-container py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                      isActive ? 'text-rofech-ink font-medium' : 'text-rofech-concrete hover:text-rofech-ink'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 font-mono text-xs uppercase tracking-widest2 text-rofech-ink font-medium"
              >
                Start a project →
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
