import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar({ darkMode, onToggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: '01 about', href: '#about' },
    { label: '02 education', href: '#education' },
    { label: '03 experience', href: '#experience' },
    { label: '04 projects', href: '#projects' },
    { label: '05 skills', href: '#skills' },
    { label: '06 contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="nav">
      <div className="navbar__inner">
        <a href="#" className="navbar__name">Nathan Stanislavsky</a>
        <div className="navbar__right">
          <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="navbar__theme-toggle"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀' : '☾'}
          </button>
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
