import { useEffect, useRef, useState } from 'react'

// Each stat counts up from 0 to "value" once the section scrolls into view.
const stats = [
  { value: 500, suffix: '+', label: 'candidatos preparados' },
  { value: 1200, suffix: '+', label: 'entrevistas simuladas' },
  { value: 85, suffix: '', label: 'voluntários ativos' },
  { value: 12, suffix: '', label: 'áreas de conhecimento' },
]

const DURATION = 1600

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function Impact() {
  const sectionRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  // Start the count-up animation the first time the section becomes visible.
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Drives every counter from 0 to its target value with a single
  // requestAnimationFrame loop, easing out so the numbers settle smoothly.
  useEffect(() => {
    if (!hasStarted) return

    let frameId
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION, 1)
      const eased = easeOutCubic(progress)

      setCounts(stats.map((stat) => Math.round(stat.value * eased)))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [hasStarted])

  return (
    <section className="impact" ref={sectionRef}>
      <div className="container impact__grid">
        {stats.map((stat, index) => (
          <div className="impact__item" key={stat.label}>
            <span className="impact__number">
              {counts[index].toLocaleString('pt-BR')}
              {stat.suffix}
            </span>
            <span className="impact__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Impact
