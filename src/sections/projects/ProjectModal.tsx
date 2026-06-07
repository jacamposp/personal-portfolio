import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, ArrowUpRight } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  content?: string
  technologies: string[]
  image?: string
  githubUrl?: string
  projectUrl?: string
}

interface ProjectModalProps {
  project: Project
  index?: number
  isSingleCard?: boolean
}

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
}

const topLineVariants = {
  rest: { scaleX: 0, opacity: 0, originX: 0 },
  hover: { scaleX: 1, opacity: 1, originX: 0 },
}

const glowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
}

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06 },
}

const buttonsVariants = {
  rest: { opacity: 0, y: 8 },
  hover: { opacity: 1, y: 0 },
}

const ProjectModal = ({ project, index = 0, isSingleCard = false }: ProjectModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hasButtons = project.githubUrl || project.projectUrl
  const projectNumber = String(index + 1).padStart(2, '0')

  return (
    <>
      <motion.div
        className={`relative rounded-lg bg-card border border-border overflow-hidden cursor-pointer corner-brackets group ${
          isSingleCard ? 'w-full max-w-md tablet:max-w-lg' : 'w-full'
        }`}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        onClick={() => setIsModalOpen(true)}
        whileTap={{ scale: 0.99 }}
      >
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          style={{ boxShadow: '0 24px 64px oklch(0.78 0.14 72 / 12%)' }}
        />

        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px] z-10 glow-line"
          variants={topLineVariants}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-[1]"
          variants={glowVariants}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(to bottom, oklch(0.78 0.14 72 / 6%), transparent)',
          }}
        />

        {project.image && (
          <div className="relative w-full h-48 mobile-m:h-52 tablet:h-56 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              variants={imageVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            <span className="absolute top-4 left-4 font-mono text-xs text-gold-accent/80 tracking-widest">
              {projectNumber}
            </span>
          </div>
        )}

        <div className="p-5 mobile-m:p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-display text-xl mobile-m:text-2xl text-foreground leading-tight">
              {project.title}
            </h3>
            <motion.div
              variants={{ rest: { opacity: 0.35 }, hover: { opacity: 0 } }}
              className="text-muted-foreground mt-1 shrink-0"
            >
              <ArrowUpRight size={18} />
            </motion.div>
          </div>

          <p className="text-muted-foreground text-sm mobile-m:text-base mb-5 leading-relaxed">
            {project.description}
          </p>

          <div className="flex gap-2 flex-wrap mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className={`font-mono text-xs px-2.5 py-1 rounded border ${
                  i % 2 === 0
                    ? 'bg-gold-accent/10 text-gold-accent border-gold-accent/25'
                    : 'bg-teal-accent/10 text-teal-accent border-teal-accent/25'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {hasButtons && (
            <motion.div
              variants={buttonsVariants}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex gap-2 pt-4 border-t border-border/60"
              onClick={(e) => e.stopPropagation()}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs mobile-m:text-sm font-mono uppercase tracking-wider border border-border text-muted-foreground hover:text-gold-accent hover:border-gold-accent/40 transition-colors duration-200"
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded text-xs mobile-m:text-sm font-mono uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity duration-200"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.78 0.14 72), oklch(0.68 0.12 195))',
                  }}
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-background/80 backdrop-blur-md flex items-center justify-center z-50 p-3 mobile-m:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              key="modal"
              className="bg-card border border-border rounded-lg w-full max-w-lg laptop:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
              style={{ boxShadow: '0 32px 80px oklch(0.78 0.14 72 / 10%)' }}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[1px] w-full glow-line" />

              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-foreground hover:text-teal-accent transition-colors z-10 p-2 bg-background/70 hover:bg-background/90 rounded-full backdrop-blur-sm border border-border"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                {project.image && (
                  <div className="relative w-full h-44 mobile-m:h-52 tablet:h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <span className="absolute bottom-4 left-5 font-mono text-xs text-gold-accent tracking-widest">
                      {projectNumber}
                    </span>
                  </div>
                )}

                <div className="p-5 mobile-m:p-7 laptop:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl mobile-m:text-3xl text-foreground pr-10">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-gold-accent transition-colors p-1"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-teal-accent transition-colors p-1"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm mobile-m:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {project.content && (
                    <div className="mb-6">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                        About this project
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.content}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Technologies
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`font-mono text-xs px-3 py-1.5 rounded border ${
                            i % 2 === 0
                              ? 'bg-gold-accent/10 text-gold-accent border-gold-accent/25'
                              : 'bg-teal-accent/10 text-teal-accent border-teal-accent/25'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {hasButtons && (
                    <div className="flex gap-3 mt-8 pt-6 border-t border-border/60">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded text-sm font-mono uppercase tracking-wider border border-border text-muted-foreground hover:text-gold-accent hover:border-gold-accent/40 transition-colors"
                        >
                          <Github size={15} /> GitHub
                        </a>
                      )}
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded text-sm font-mono uppercase tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
                          style={{
                            background:
                              'linear-gradient(135deg, oklch(0.78 0.14 72), oklch(0.68 0.12 195))',
                          }}
                        >
                          <ExternalLink size={15} /> Live demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectModal
