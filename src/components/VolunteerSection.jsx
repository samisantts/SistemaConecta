import { FiArrowRight } from 'react-icons/fi'

// Rendered with .map() below so adding or removing an area only means
// editing this array, not touching the JSX.
const areas = [
  'Tecnologia',
  'Psicologia',
  'RH',
  'Marketing',
  'Design',
  'Administração',
  'Comunicação',
  'Gestão de Projetos',
]

function VolunteerSection() {
  return (
    <section className="volunteers" id="voluntarios">
      <div className="container">
        <div className="volunteers__card">
          <span className="eyebrow">Para voluntários</span>
          <h2 className="display-lg">Ganhe experiência real e faça a diferença.</h2>
          <p className="body-lg volunteers__text">
            Seja parte de um projeto interdisciplinar, vivencie novas áreas,
            desenvolva suas habilidades e construa um portfólio com impacto
            social.
          </p>
          <a href="#contato" className="btn btn-primary">
            Quero ser voluntário <FiArrowRight />
          </a>

          <div className="volunteers__areas">
            <span className="volunteers__areas-label">Áreas disponíveis</span>
            <div className="volunteers__tags">
              {areas.map((area) => (
                <span className="tag" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VolunteerSection
