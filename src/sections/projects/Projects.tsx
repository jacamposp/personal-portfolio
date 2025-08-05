import ProjectCard from './ProjectModal'
import projects from '@/data/projects/projects'

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen pt-20 mobile-m:pt-24 tablet:pt-28 laptop:pt-32 w-full px-4 mobile-m:px-6 tablet:px-8 laptop:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl mobile-m:text-3xl tablet:text-4xl laptop:text-5xl font-bold text-white mb-6 mobile-m:mb-8 tablet:mb-10 text-center mobile-m:text-left">
          Projects.
        </h2>
        <div
          className={`w-full ${
            projects.length === 1
              ? 'flex justify-center'
              : 'grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mobile-m:gap-6 tablet:gap-8'
          }`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isSingleCard={projects.length === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
