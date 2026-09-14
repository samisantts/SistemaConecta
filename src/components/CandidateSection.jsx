import { FiArrowRight } from 'react-icons/fi'
import LogoMark from './LogoMark.jsx'

function CandidateSection() {
  return (
    <section className="candidates" id="candidatos">
      <div className="container">
        <div className="candidates__card">
          <div className="candidates__content">
            <span className="eyebrow eyebrow--light">Para candidatos</span>
            <h2 className="display-lg">Prepare-se para o seu próximo passo.</h2>
            <p className="body-lg candidates__text">
              Aqui você encontra uma jornada completa de preparação, que vai muito
              além das entrevistas. É sobre autoconhecimento, estratégia e
              confiança.
            </p>
            <a href="#contato" className="btn btn-light">
              Quero me preparar <FiArrowRight />
            </a>
          </div>

          <div className="candidates__visual">
            <div className="candidates__mark">
              <LogoMark size={40} color="#c9b8ee" />
            </div>
            <div className="candidates__device" aria-hidden="true">
              <div className="candidates__device-screen" />
              <div className="candidates__device-base" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CandidateSection
