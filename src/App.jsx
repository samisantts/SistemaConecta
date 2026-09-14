import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import CandidateSection from './components/CandidateSection.jsx'
import VolunteerSection from './components/VolunteerSection.jsx'
import Benefits from './components/Benefits.jsx'
import Impact from './components/Impact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  // Watches every element tagged with the "reveal" class (currently the
  // HowItWorks step cards) and adds "is-visible" once it enters the
  // viewport, so the fade/slide-up transition in global.css can run.
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <CandidateSection />
      <VolunteerSection />
      <Benefits />
      <Impact />
      <Footer />
    </>
  )
}

export default App
