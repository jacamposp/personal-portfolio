import ProjectCard from './ProjectCard'
import projects from '@/data/projects/projects'

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col h-screen pt-50 w-6xl">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Projects.</h2>
      <div
        className={`w-full ${projects.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}`}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} isSingleCard={projects.length === 1} />
        ))}
      </div>
    </section>
  )
}

export default Projects
