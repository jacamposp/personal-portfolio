import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen pt-5 relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <Avatar className="logo w-24 h-24 mb-4">
          <AvatarImage src="/profilePicture.png" alt="Joel Campos Profile Picture" />
          <AvatarFallback>JC</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-medium text-white">Hi, I'm Joel Campos.</h1>
        <p className="text-lg text-gray-400 mt-2">Full stack developer based in Costa Rica.</p>
        <div className="flex flex-row items-center justify-center gap-8 mt-10">
          <a
            href="https://www.instagram.com/campos_j10"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons left"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/joelcamposp/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons center"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/jacamposp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons right"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
        <ArrowDown className="w-5 h-5 text-white absolute bottom-12 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:animate-bounce" />
      </motion.div>
    </section>
  )
}

export default Home
