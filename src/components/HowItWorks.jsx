import { FiArrowRight, FiClipboard, FiBriefcase, FiUsers, FiMessageCircle, FiTrendingUp, FiSend } from 'react-icons/fi'

// Keeping the step data in an array lets us render all six cards with a
// single .map() below, instead of repeating the same JSX six times.
const steps = [
  {
    number: '01',
    icon: FiClipboard,
    title: 'Diagnóstico inicial',
    description: 'Conte sobre seus objetivos, experiências e desafios.',
  },
  {
    number: '02',
    icon: FiBriefcase,
    title: 'Vaga personalizada',
    description: 'Criamos uma simulação com base no cargo que você deseja.',
  },
  {
    number: '03',
    icon: FiUsers,
    title: 'Preparação completa',
    description: 'LinkedIn, networking, entrevista e case prático.',
  },
  {
    number: '04',
    icon: FiMessageCircle,
    title: 'Entrevista simulada',
    description: 'Com profissionais de diferentes áreas.',
  },
  {
    number: '05',
    icon: FiTrendingUp,
    title: 'Feedback detalhado',
    description: 'Descubra seus pontos fortes e o que pode evoluir.',
  },
  {
    number: '06',
    icon: FiSend,
    title: 'Evolução contínua',
    description: 'Volte para novas simulações e acompanhe seu progresso.',
  },
]

function HowItWorks() {
  return (
    <section className="how-it-works" id="sobre">
      <div className="container">
        <div className="how-it-works__head">
          <div className="section-heading">
            <h2 className="display-lg">Como funciona?</h2>
            <p className="body-lg">Um caminho completo, do diagnóstico ao seu crescimento.</p>
          </div>
          <a href="#candidatos" className="how-it-works__link" aria-label="Ver mais sobre o processo">
            <FiArrowRight size={20} />
          </a>
        </div>

        <div className="steps">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            return (
              <div className="step reveal" key={step.number}>
                <div className="step__icon">
                  <Icon size={20} />
                </div>
                <span className="step__number">{step.number}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__description">{step.description}</p>
                {!isLast && (
                  <span className="step__pointer" aria-hidden="true">
                    <FiArrowRight size={16} />
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
