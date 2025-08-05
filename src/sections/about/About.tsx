import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen pt-20 mobile-m:pt-24 tablet:pt-28 laptop:pt-32 w-full justify-center px-4 mobile-m:px-6 tablet:px-8 laptop:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl mobile-m:text-3xl tablet:text-4xl laptop:text-5xl font-bold text-white text-center mobile-m:text-left mb-2 mobile-m:mb-3">
          About.
        </h2>
        <p className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-gray-400 mb-6 mobile-m:mb-8 tablet:mb-10 text-center mobile-m:text-left max-w-full">
          Passionate about creating digital solutions that make a difference.
        </p>

        <div className="flex flex-col gap-6 mobile-m:gap-8 tablet:gap-10">
          <Card className="w-full bg-[#181818] border-gray-700">
            <CardHeader className="p-4 mobile-m:p-6 tablet:p-8">
              <CardTitle className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-left mb-3 mobile-m:mb-4">
                My Journey.
              </CardTitle>
              <CardDescription className="text-sm mobile-m:text-base tablet:text-lg laptop:text-xl text-gray-400 text-left leading-relaxed space-y-3 mobile-m:space-y-4">
                <p>
                  Hey! I'm a Full‑Stack Developer with 5 years of experience turning ideas into scalable, high-impact
                  software. From sleek frontends to robust backend APIs, I build solutions that save time and deliver
                  real value—often enhanced with smart automation.
                </p>
                <p>
                  I've led and contributed to both client projects and personal builds, like{' '}
                  <strong className="text-white">SportBook</strong> (a sports field booking platform in development), a{' '}
                  <strong className="text-white">TechNews Scraper</strong> for automatic content aggregation, and
                  accounting integrations powered by <strong className="text-white">QuickBooks</strong>.
                </p>
                <p>
                  Outside of coding, I'm always exploring new projects to sharpen my skills and stay aligned with
                  industry demands. I learn by building—constantly growing and creating solutions that matter.
                </p>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full border-gray-700 bg-[#181818]">
            <CardHeader className="p-4 mobile-m:p-6 tablet:p-8">
              <CardTitle className="text-lg mobile-m:text-xl tablet:text-2xl laptop:text-3xl font-bold text-left mb-4 mobile-m:mb-6">
                Tech Stack.
              </CardTitle>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2 mobile-m:gap-3 tablet:gap-4">
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    Tailwind
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    TypeScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    Node.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    Express
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    MySQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    MongoDB
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    n8n
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs mobile-m:text-sm tablet:text-base px-2 py-1 mobile-m:px-3 mobile-m:py-2"
                  >
                    ChatGPT
                  </Badge>
                </div>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About
