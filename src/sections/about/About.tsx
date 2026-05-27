import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal, ScrollRevealItem } from '@/components/ui/scroll-reveal'

const techStack = [
  'React',
  'Next.js',
  'Tailwind',
  'TypeScript',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'n8n',
  'ChatGPT',
]

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen pt-20 mobile-m:pt-24 tablet:pt-28 laptop:pt-32 w-full justify-center px-4 mobile-m:px-6 tablet:px-8 laptop:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <ScrollReveal>
          <ScrollRevealItem>
            <h2 className="text-4xl mobile-m:text-3xl tablet:text-4xl laptop:text-5xl font-bold text-foreground text-center mobile-m:text-left mb-2 mobile-m:mb-3">
              About<span className="text-gradient-accent">.</span>
            </h2>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-muted-foreground mb-6 mobile-m:mb-8 tablet:mb-10 text-center mobile-m:text-left max-w-full">
              Passionate about creating digital solutions that make a difference.
            </p>
          </ScrollRevealItem>

          <div className="flex flex-col gap-6 mobile-m:gap-8 tablet:gap-10">
            <ScrollRevealItem>
              <Card className="w-full bg-card border-border hover:border-primary/40 transition-colors duration-300">
                <CardHeader className="p-4 mobile-m:p-6 tablet:p-8">
                  <CardTitle className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-left mb-3 mobile-m:mb-4">
                    My Journey<span className="text-purple-accent">.</span>
                  </CardTitle>
                  <CardDescription className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-muted-foreground text-left leading-relaxed space-y-3 mobile-m:space-y-4">
                    <p>
                      Hey! I'm a Full‑Stack Developer with 5 years of experience turning ideas into scalable, high-impact
                      software. From sleek frontends to robust backend APIs, I build solutions that save time and deliver
                      real value—often enhanced with smart automation.
                    </p>
                    <p>
                      I've led and contributed to both client projects and personal builds, like{' '}
                      <strong className="text-foreground">SportBook</strong> (a sports field booking platform in development), a{' '}
                      <strong className="text-foreground">TechNews Scraper</strong> for automatic content aggregation, and
                      accounting integrations powered by <strong className="text-foreground">QuickBooks</strong>.
                    </p>
                    <p>
                      Outside of coding, I'm always exploring new projects to sharpen my skills and stay aligned with
                      industry demands. I learn by building—constantly growing and creating solutions that matter.
                    </p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <Card className="w-full border-border bg-card hover:border-accent/40 transition-colors duration-300">
                <CardHeader className="p-4 mobile-m:p-6 tablet:p-8">
                  <CardTitle className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-left mb-4 mobile-m:mb-6">
                    Tech Stack<span className="text-pink-accent">.</span>
                  </CardTitle>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mobile-m:gap-3 tablet:gap-4">
                      {techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="font-mono text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2 border-primary/30 text-foreground hover:border-pink-accent/50 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </CardHeader>
              </Card>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About
