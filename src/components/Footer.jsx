import { FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import LogoMark from './LogoMark.jsx'

const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Para candidatos', href: '#candidatos' },
  { label: 'Para voluntários', href: '#voluntarios' },
  { label: 'Contato', href: '#contato' },
]

const socialLinks = [
  { label: 'Instagram', icon: FiInstagram, href: '#' },
  { label: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { label: 'YouTube', icon: FiYoutube, href: '#' },
]

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <LogoMark size={20} />
            <span>conecta</span>
          </a>

          <nav className="footer__nav">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__social">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a href={social.href} key={social.label} aria-label={social.label}>
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <p className="footer__tagline">Prepare · Conecte · Evolua</p>
      </div>
    </footer>
  )
}

export default Footer
