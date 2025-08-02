import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
