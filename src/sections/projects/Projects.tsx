import ProjectCard from './ProjectModal'
import projects from '@/data/projects/projects'
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal'

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen pt-20 mobile-m:pt-24 tablet:pt-28 laptop:pt-32 w-full px-4 mobile-m:px-6 tablet:px-8 laptop:px-12 pb-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <ScrollRevealItem>
            <h2 className="text-4xl mobile-m:text-3xl tablet:text-4xl laptop:text-5xl font-bold text-foreground mb-6 mobile-m:mb-8 tablet:mb-10 text-center mobile-m:text-left">
              Projects<span className="text-gradient-accent">.</span>
            </h2>
          </ScrollRevealItem>
          <div
            className={`w-full ${
              projects.length === 1
                ? 'flex justify-center'
                : 'grid grid-cols-1 md:grid-cols-2 gap-4 mobile-m:gap-6 tablet:gap-8'
            }`}
          >
            {projects.map((project) => (
              <ScrollRevealItem key={project.id}>
                <ProjectCard project={project} isSingleCard={projects.length === 1} />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Projects
