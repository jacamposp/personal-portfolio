import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <section
      id="#"
      className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 pb-16 relative text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center max-w-4xl mx-auto"
      >
        <Avatar className="w-16 h-16 mobile-m:w-20 mobile-m:h-20 tablet:w-24 tablet:h-24 laptop:w-28 laptop:h-28 mb-4 mobile-m:mb-6 ring-2 ring-primary/40 ring-offset-2 ring-offset-background">
          <AvatarImage src="/profilePicture.png" alt="Joel Campos Profile Picture" />
          <AvatarFallback>JC</AvatarFallback>
        </Avatar>
        <h1 className="text-xl mobile-m:text-2xl tablet:text-3xl laptop:text-4xl font-bold text-foreground leading-tight">
          Hi, I'm <span className="text-gradient-accent">Joel Campos</span>.
        </h1>
        <p className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-muted-foreground mt-2 mobile-m:mt-3 tablet:mt-4 max-w-2xl">
          Full stack developer based in Costa Rica.
        </p>
        <div className="flex items-center justify-center gap-4 mobile-m:gap-6 tablet:gap-8 mt-6 mobile-m:mt-8 tablet:mt-10">
          <a
            href="https://www.instagram.com/campos_j10"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons p-2 mobile-m:p-3 hover:bg-primary/15 rounded-full transition-all duration-300 text-foreground hover:text-pink-accent"
          >
            <Instagram className="w-5 h-5 mobile-m:w-6 mobile-m:h-6 tablet:w-7 tablet:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/joelcamposp/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons p-2 mobile-m:p-3 hover:bg-primary/15 rounded-full transition-all duration-300 text-foreground hover:text-purple-accent"
          >
            <Linkedin className="w-5 h-5 mobile-m:w-6 mobile-m:h-6 tablet:w-7 tablet:h-7" />
          </a>
          <a
            href="https://github.com/jacamposp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons p-2 mobile-m:p-3 hover:bg-primary/15 rounded-full transition-all duration-300 text-foreground hover:text-accent"
          >
            <Github className="w-5 h-5 mobile-m:w-6 mobile-m:h-6 tablet:w-7 tablet:h-7" />
          </a>
        </div>
        <ArrowDown className="w-4 h-4 mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6 text-purple-accent absolute bottom-6 mobile-m:bottom-8 tablet:bottom-12 left-1/2 -translate-x-1/2 transition-transform duration-300 hover:animate-bounce cursor-pointer" />
      </motion.div>
    </section>
  )
}

export default Home
