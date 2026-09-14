import { FiArrowRight, FiTrendingUp, FiBarChart2 } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import LogoMark from './LogoMark.jsx'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        
        <div className="hero__intro">
          <div className="hero__intro-mark">
            <LogoMark size={26} />
          </div>
          <p className="hero__intro-text">
            Uma plataforma que conecta pessoas a oportunidades reais, com apoio de
            diferentes áreas do conhecimento.
          </p>
          <div className="hero__intro-rule" />
          <p className="hero__intro-tags">
            Simulação de processo seletivo · Networking · Feedback · Desenvolvimento profissional
          </p>
        </div>

  
        <div className="hero__main">
          <h1 className="display-xl">
            Seu futuro profissional
            <br />
            começa <span className="text-accent">aqui.</span>
          </h1>
          <p className="body-lg hero__subtitle">
            Viva uma experiência completa de preparação para o mercado de trabalho,
            com apoio de uma rede interdisciplinar e muito mais do que uma simples
            entrevista.
          </p>
          <div className="hero__actions">
            <a href="#candidatos" className="btn btn-primary">
              Quero me preparar <FiArrowRight />
            </a>
            <a href="#voluntarios" className="btn btn-outline">
              Quero ser voluntário <FiArrowRight />
            </a>
          </div>
        </div>

        {/* Right column — illustration with floating info cards */}
        <div className="hero__visual">
          <div className="hero__visual-frame">
            <div className="hero__silhouette" aria-hidden="true" />
          </div>

          <div className="floating-card floating-card--linkedin">
            <FaLinkedinIn size={16} />
          </div>

          <div className="floating-card floating-card--profile">
            <div className="floating-card__avatar" />
            <div className="floating-card__lines">
              <span />
              <span />
            </div>
          </div>

          <div className="floating-card floating-card--stats">
            <FiBarChart2 size={20} />
          </div>

          <div className="floating-card floating-card--growth">
            <FiTrendingUp size={18} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
