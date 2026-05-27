import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, ExternalLink, X } from 'lucide-react'

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

const ProjectModal = ({ project, isSingleCard = false }: ProjectModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Card
        className={`bg-card/80 border-border text-foreground hover:bg-card hover:border-primary/40 transition-colors group cursor-pointer ${
          isSingleCard ? 'w-full max-w-sm mobile-m:max-w-md tablet:max-w-lg laptop:max-w-xl' : ''
        }`}
        onClick={handleCardClick}
      >
        {project.image && (
          <div className="relative w-full h-64 mobile-m:h-48 tablet:h-56 laptop:h-64 overflow-hidden px-3 mobile-m:px-4 tablet:px-5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102 rounded-lg"
            />
          </div>
        )}
        <CardHeader className="p-3 mobile-m:p-4 tablet:p-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base mobile-m:text-lg tablet:text-xl laptop:text-2xl font-semibold text-left">
              {project.title}
            </CardTitle>
            <div className="flex items-center gap-1.5 mobile-m:gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground cursor-pointer hover:text-purple-accent transition-colors p-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground cursor-pointer hover:text-pink-accent transition-colors p-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
                </a>
              )}
            </div>
          </div>
          <CardDescription className="text-muted-foreground text-left text-sm mobile-m:text-base tablet:text-lg">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 mobile-m:p-4 tablet:p-6 pt-0">
          <div className="flex gap-1.5 mobile-m:gap-2 flex-wrap">
            {project.technologies.map((tech, index) => {
              return (
                <span
                  key={index}
                  className={`px-1.5 py-0.5 mobile-m:px-2 mobile-m:py-1 tablet:px-3 tablet:py-1.5 ${
                    techTagColors[index % techTagColors.length]
                  } text-xs mobile-m:text-sm rounded`}
                >
                  {tech}
                </span>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Modal/Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 mobile-m:p-4 tablet:p-6"
          onClick={closeModal}
        >
          <div
            className="bg-card border border-border rounded-lg w-full max-w-sm mobile-m:max-w-md tablet:max-w-lg laptop:max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl shadow-primary/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 mobile-m:top-4 mobile-m:right-4 tablet:top-5 tablet:right-5 text-foreground hover:text-pink-accent transition-colors z-10 p-2 mobile-m:p-2.5 tablet:p-3 bg-background/60 hover:bg-background/80 rounded-full backdrop-blur-sm border border-border hover:border-pink-accent/50"
              >
                <X size={20} className="font-bold mobile-m:w-6 mobile-m:h-6 tablet:w-7 tablet:h-7" />
              </button>

              {/* Project image */}
              {project.image && (
                <div className="relative w-full h-40 mobile-m:h-48 tablet:h-56 laptop:h-64 overflow-hidden rounded-t-lg">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-background/40"></div>
                </div>
              )}

              {/* Project content */}
              <div className="p-3 mobile-m:p-4 tablet:p-6 laptop:p-8">
                <div className="flex items-center justify-between mb-3 mobile-m:mb-4 tablet:mb-6">
                  <h3 className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-foreground pr-8">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mobile-m:gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-purple-accent transition-colors p-1"
                      >
                        <Github size={18} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
                      </a>
                    )}
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-pink-accent transition-colors p-1"
                      >
                        <ExternalLink size={18} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 mobile-m:mb-6 tablet:mb-8 text-sm mobile-m:text-base tablet:text-lg">
                  {project.description}
                </p>

                {project.content && (
                  <div className="mb-4 mobile-m:mb-6 tablet:mb-8">
                    <h4 className="text-base mobile-m:text-lg tablet:text-xl font-semibold text-foreground mb-2 mobile-m:mb-3 tablet:mb-4">
                      About this project
                    </h4>
                    <p className="text-muted-foreground text-xs mobile-m:text-sm tablet:text-base leading-relaxed">
                      {project.content}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-base mobile-m:text-lg tablet:text-xl font-semibold text-foreground mb-2 mobile-m:mb-3 tablet:mb-4">
                    Technologies used
                  </h4>
                  <div className="flex gap-1.5 mobile-m:gap-2 tablet:gap-3 flex-wrap">
                    {project.technologies.map((tech: string, index: number) => {
                      return (
                        <span
                          key={index}
                          className={`px-2 py-1 mobile-m:px-3 mobile-m:py-2 tablet:px-4 tablet:py-2 ${
                            techTagColors[index % techTagColors.length]
                          } text-xs mobile-m:text-sm tablet:text-base rounded-lg`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectModal
