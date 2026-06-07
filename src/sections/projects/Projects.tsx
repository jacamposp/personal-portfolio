import ProjectCard from './ProjectModal'
import projects from '@/data/projects/projects'
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal'

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen pt-28 mobile-m:pt-32 tablet:pt-36 pb-20 px-4 mobile-m:px-6 tablet:px-8 laptop:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <ScrollRevealItem>
            <p className="section-label mb-4 text-center laptop:text-left">
              <span>03</span> — Projects
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <div className="flex flex-col laptop:flex-row laptop:items-end laptop:justify-between gap-4 mb-12">
              <h2 className="font-display text-4xl mobile-m:text-5xl tablet:text-6xl text-foreground text-center laptop:text-left">
                Selected
                <br />
                <span className="text-gradient-accent italic">work.</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-xs text-center laptop:text-right">
                A curated collection of projects that showcase my skills and passion for building.
              </p>
            </div>
          </ScrollRevealItem>

          <div className="rule-gradient mb-10" />

          <div
            className={`w-full ${
              projects.length === 1
                ? 'flex justify-center'
                : 'grid grid-cols-1 md:grid-cols-2 gap-5 mobile-m:gap-7'
            }`}
          >
            {projects.map((project, index) => (
              <ScrollRevealItem key={project.id}>
                <ProjectCard
                  project={project}
                  index={index}
                  isSingleCard={projects.length === 1}
                />
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Projects
