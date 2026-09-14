import { FiCompass, FiUsers, FiFolder, FiShare2, FiHeart } from 'react-icons/fi'

const benefits = [
  {
    icon: FiCompass,
    title: 'Autoconhecimento e desenvolvimento pessoal',
  },
  {
    icon: FiUsers,
    title: 'Networking estratégico',
  },
  {
    icon: FiFolder,
    title: 'Portfólio para o futuro',
  },
  {
    icon: FiShare2,
    title: 'Colaboração interdisciplinar',
  },
  {
    icon: FiHeart,
    title: 'Impacto social real',
  },
]

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <h2 className="display-lg benefits__title">
          Mais do que uma plataforma, uma rede de possibilidades.
        </h2>

        <div className="benefits__grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div className="benefit" key={benefit.title}>
                <div className="benefit__icon">
                  <Icon size={22} />
                </div>
                <p className="benefit__title">{benefit.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
