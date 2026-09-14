import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import CandidateSection from './components/CandidateSection.jsx'
import VolunteerSection from './components/VolunteerSection.jsx'
import Benefits from './components/Benefits.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
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
      <Footer />
    </>
  )
}

export default App
