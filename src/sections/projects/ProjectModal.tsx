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
  isSingleCard?: boolean
}

const techTagColors = [
  'bg-purple-accent/15 text-purple-accent border border-purple-accent/30 font-mono',
  'bg-pink-accent/15 text-pink-accent border border-pink-accent/30 font-mono',
]

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -8 },
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
  hover: { scale: 1.05 },
}

const buttonsVariants = {
  rest: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0 },
}

const ProjectModal = ({ project, isSingleCard = false }: ProjectModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const hasButtons = project.githubUrl || project.projectUrl

  return (
    <>
      {/* ── Card ── */}
      <motion.div
        className={`relative rounded-xl bg-card border border-border overflow-hidden cursor-pointer ${
          isSingleCard ? 'w-full max-w-sm mobile-m:max-w-md tablet:max-w-lg laptop:max-w-xl' : 'w-full'
        }`}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        onClick={() => setIsModalOpen(true)}
        style={{ boxShadow: '0 0 0 0 transparent' }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Hover shadow boost */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          style={{ boxShadow: '0 20px 60px rgba(168,85,247,0.18)' }}
        />

        {/* Bright top-line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] z-10"
          variants={topLineVariants}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
        />
        {/* Glow behind top-line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-[1]"
          variants={glowVariants}
          transition={{ duration: 0.28 }}
          style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.08), transparent)' }}
        />

        {/* Image */}
        {project.image && (
          <div className="relative w-full h-44 mobile-m:h-48 tablet:h-52 laptop:h-56 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              variants={imageVariants}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          </div>
        )}

        {/* Body */}
        <div className="p-4 mobile-m:p-5 tablet:p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base mobile-m:text-lg tablet:text-xl laptop:text-2xl font-bold text-foreground leading-tight">
              {project.title}
            </h3>
            {/* "Open" hint icon — fades out on hover when buttons appear */}
            <motion.div
              variants={{ rest: { opacity: 0.4 }, hover: { opacity: 0 } }}
              className="text-muted-foreground mt-0.5 shrink-0"
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </div>

          <p className="text-muted-foreground text-sm mobile-m:text-base mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex gap-1.5 mobile-m:gap-2 flex-wrap mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-1.5 py-0.5 mobile-m:px-2 mobile-m:py-1 tablet:px-3 tablet:py-1.5 ${
                  techTagColors[index % techTagColors.length]
                } text-xs mobile-m:text-sm rounded`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Animated action buttons */}
          {hasButtons && (
            <motion.div
              variants={buttonsVariants}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex gap-2 pt-3 border-t border-border/60"
              onClick={(e) => e.stopPropagation()}
            >
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 mobile-m:py-2 rounded-lg text-xs mobile-m:text-sm font-medium border border-primary/40 text-purple-accent hover:bg-primary/15 hover:border-primary/70 transition-colors duration-200"
                >
                  <Github size={13} />
                  GitHub
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-1.5 mobile-m:py-2 rounded-lg text-xs mobile-m:text-sm font-medium text-foreground hover:opacity-90 transition-opacity duration-200"
                  style={{
                    background: 'linear-gradient(135deg, rgba(168,85,247,0.8), rgba(236,72,153,0.8))',
                  }}
                >
                  <ExternalLink size={13} />
                  Live
                </a>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-background/75 backdrop-blur-sm flex items-center justify-center z-50 p-2 mobile-m:p-4 tablet:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              key="modal"
              className="bg-card border border-border rounded-xl w-full max-w-sm mobile-m:max-w-md tablet:max-w-lg laptop:max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-primary/15"
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top gradient line */}
              <div
                className="h-[2px] w-full rounded-t-xl"
                style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)' }}
              />

              <div className="relative">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-3 right-3 mobile-m:top-4 mobile-m:right-4 text-foreground hover:text-pink-accent transition-colors z-10 p-2 bg-background/60 hover:bg-background/80 rounded-full backdrop-blur-sm border border-border hover:border-pink-accent/50"
                >
                  <X size={18} className="mobile-m:w-5 mobile-m:h-5" />
                </button>

                {/* Image */}
                {project.image && (
                  <div className="relative w-full h-40 mobile-m:h-48 tablet:h-56 laptop:h-64 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-4 mobile-m:p-5 tablet:p-7 laptop:p-8">
                  <div className="flex items-center justify-between mb-3 mobile-m:mb-4 tablet:mb-5">
                    <h3 className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-foreground pr-8">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-purple-accent transition-colors p-1"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-pink-accent transition-colors p-1"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-5 mobile-m:mb-6 text-sm mobile-m:text-base tablet:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {project.content && (
                    <div className="mb-5 mobile-m:mb-6">
                      <h4 className="text-sm mobile-m:text-base tablet:text-lg font-semibold text-foreground mb-2 mobile-m:mb-3">
                        About this project
                      </h4>
                      <p className="text-muted-foreground text-xs mobile-m:text-sm tablet:text-base leading-relaxed">
                        {project.content}
                      </p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm mobile-m:text-base tablet:text-lg font-semibold text-foreground mb-3">
                      Technologies used
                    </h4>
                    <div className="flex gap-1.5 mobile-m:gap-2 tablet:gap-3 flex-wrap">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 mobile-m:px-3 mobile-m:py-1.5 tablet:px-4 tablet:py-2 ${
                            techTagColors[index % techTagColors.length]
                          } text-xs mobile-m:text-sm tablet:text-base rounded-lg`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA buttons in modal */}
                  {hasButtons && (
                    <div className="flex gap-3 mt-6 mobile-m:mt-8 pt-5 border-t border-border/60">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium border border-primary/40 text-purple-accent hover:bg-primary/15 hover:border-primary/70 transition-colors"
                        >
                          <Github size={15} /> GitHub
                        </a>
                      )}
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-foreground hover:opacity-90 transition-opacity"
                          style={{
                            background: 'linear-gradient(135deg, rgba(168,85,247,0.85), rgba(236,72,153,0.85))',
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
