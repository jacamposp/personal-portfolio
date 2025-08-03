import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
