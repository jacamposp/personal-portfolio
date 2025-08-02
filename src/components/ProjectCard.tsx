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

interface ProjectCardProps {
  project: Project
  isSingleCard?: boolean
}

const ProjectCard = ({ project, isSingleCard = false }: ProjectCardProps) => {
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
          isSingleCard ? 'w-full max-w-md' : ''
        }`}
        onClick={handleCardClick}
      >
        {project.image && (
          <div className="relative w-full h-64 overflow-hidden px-5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-left">{project.title}</CardTitle>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} />
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          <CardDescription className="text-gray-300 text-left">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mt-4 flex-wrap">
            {project.technologies.map((tech, index) => {
              const colors = [
                'bg-blue-600/20 text-blue-300',
                'bg-purple-600/20 text-purple-300',
                'bg-green-600/20 text-green-300',
                'bg-orange-600/20 text-orange-300',
                'bg-yellow-600/20 text-yellow-300',
              ]
              return (
                <span key={index} className={`px-2 py-1 ${colors[index % colors.length]} text-xs rounded`}>
                  {tech}
                </span>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Modal/Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>

              {/* Project image */}
              {project.image && (
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
              )}

              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={24} />
                      </a>
                    )}
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                {project.content && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">About this project</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.content}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies used</h4>
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech: string, index: number) => {
                      const colors = [
                        'bg-blue-600/20 text-blue-300',
                        'bg-purple-600/20 text-purple-300',
                        'bg-green-600/20 text-green-300',
                        'bg-orange-600/20 text-orange-300',
                        'bg-yellow-600/20 text-yellow-300',
                      ]
                      return (
                        <span key={index} className={`px-3 py-2 ${colors[index % colors.length]} text-sm rounded-lg`}>
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

export default ProjectCard
