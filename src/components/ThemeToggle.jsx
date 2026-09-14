import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

// Reads any theme saved from a previous visit, falling back to the
// visitor's OS-level preference the first time they land on the page.
function getInitialTheme() {
  const saved = window.localStorage.getItem('conecta-theme')
  if (saved === 'light' || saved === 'dark') return saved

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Whenever the theme state changes, reflect it on <html> (so every CSS
  // rule scoped to [data-theme="dark"] applies) and remember the choice.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('conecta-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}

export default ThemeToggle
