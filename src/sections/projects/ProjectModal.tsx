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
        className={`bg-gray-800/50 border-gray-700 text-white hover:bg-gray-800/70 transition-colors group cursor-pointer ${
          isSingleCard ? 'w-full max-w-sm mobile-m:max-w-md tablet:max-w-lg laptop:max-w-xl' : ''
        }`}
        onClick={handleCardClick}
      >
        {project.image && (
          <div className="relative w-full h-40 mobile-m:h-48 tablet:h-56 laptop:h-64 overflow-hidden px-3 mobile-m:px-4 tablet:px-5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
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
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors p-1"
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
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors p-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
                </a>
              )}
            </div>
          </div>
          <CardDescription className="text-gray-300 text-left text-sm mobile-m:text-base tablet:text-lg">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 mobile-m:p-4 tablet:p-6 pt-0">
          <div className="flex gap-1.5 mobile-m:gap-2 flex-wrap">
            {project.technologies.map((tech, index) => {
              const colors = [
                'bg-blue-600/20 text-blue-300',
                'bg-purple-600/20 text-purple-300',
                'bg-green-600/20 text-green-300',
                'bg-orange-600/20 text-orange-300',
                'bg-yellow-600/20 text-yellow-300',
              ]
              return (
                <span
                  key={index}
                  className={`px-1.5 py-0.5 mobile-m:px-2 mobile-m:py-1 tablet:px-3 tablet:py-1.5 ${
                    colors[index % colors.length]
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 mobile-m:p-4 tablet:p-6">
          <div className="bg-gray-900 rounded-lg w-full max-w-sm mobile-m:max-w-md tablet:max-w-lg laptop:max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 mobile-m:top-3 mobile-m:right-3 tablet:top-4 tablet:right-4 text-gray-400 hover:text-white transition-colors z-10 p-1"
              >
                <X size={18} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
              </button>

              {/* Project image */}
              {project.image && (
                <div className="relative w-full h-40 mobile-m:h-48 tablet:h-56 laptop:h-64 overflow-hidden rounded-t-lg">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              )}

              {/* Project content */}
              <div className="p-3 mobile-m:p-4 tablet:p-6 laptop:p-8">
                <div className="flex items-center justify-between mb-3 mobile-m:mb-4 tablet:mb-6">
                  <h3 className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-white pr-8">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mobile-m:gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-1"
                      >
                        <Github size={18} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
                      </a>
                    )}
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-1"
                      >
                        <ExternalLink size={18} className="mobile-m:w-5 mobile-m:h-5 tablet:w-6 tablet:h-6" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 mobile-m:mb-6 tablet:mb-8 text-sm mobile-m:text-base tablet:text-lg">
                  {project.description}
                </p>

                {project.content && (
                  <div className="mb-4 mobile-m:mb-6 tablet:mb-8">
                    <h4 className="text-base mobile-m:text-lg tablet:text-xl font-semibold text-white mb-2 mobile-m:mb-3 tablet:mb-4">
                      About this project
                    </h4>
                    <p className="text-gray-300 text-xs mobile-m:text-sm tablet:text-base leading-relaxed">
                      {project.content}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-base mobile-m:text-lg tablet:text-xl font-semibold text-white mb-2 mobile-m:mb-3 tablet:mb-4">
                    Technologies used
                  </h4>
                  <div className="flex gap-1.5 mobile-m:gap-2 tablet:gap-3 flex-wrap">
                    {project.technologies.map((tech: string, index: number) => {
                      const colors = [
                        'bg-blue-600/20 text-blue-300',
                        'bg-purple-600/20 text-purple-300',
                        'bg-green-600/20 text-green-300',
                        'bg-orange-600/20 text-orange-300',
                        'bg-yellow-600/20 text-yellow-300',
                      ]
                      return (
                        <span
                          key={index}
                          className={`px-2 py-1 mobile-m:px-3 mobile-m:py-2 tablet:px-4 tablet:py-2 ${
                            colors[index % colors.length]
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
