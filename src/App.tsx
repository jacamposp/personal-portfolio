import './App.css'
import Navigation from './components/navigation/Navigation'
import Home from './sections/home/Home'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'
import { CustomCursor } from './components/ui/custom-cursor'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <CustomCursor />
      <Navigation />
      <main className="w-full">
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
