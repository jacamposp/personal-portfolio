import './App.css'
import Navigation from './components/navigation/Navigation'
import Home from './sections/home/Home'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'
import Footer from './sections/footer/Footer'
import { ScrollProgress } from './components/ui/scroll-progress'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />
      <header>
        <Navigation />
      </header>
      <main className="w-full">
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
