import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import LogoMark from './LogoMark.jsx'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Para candidatos', href: '#candidatos' },
  { label: 'Para voluntários', href: '#voluntarios' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  // Controls whether the mobile menu is expanded. Only relevant below the
  // desktop breakpoint — on desktop the nav links are always visible.
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header" id="inicio">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" onClick={closeMenu}>
          <LogoMark size={20} />
          <span>conecta</span>
        </a>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="header__toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
