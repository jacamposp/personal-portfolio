import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const About = () => {
  return (
    <section id="about" className="flex flex-col h-screen pt-30 w-6xl justify-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white">About.</h2>
      <p className="text-lg text-gray-400 mt-2">Passionate about creating digital solutions that make a difference.</p>

      <div className="flex flex-col justify-between items-center gap-10">
        <Card className="w-full max-w-6xl mt-8 bg-[#181818]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-left">My Journey.</CardTitle>
            <CardDescription className="text-lg text-gray-400 mt-2 text-left">
              Hey! I’m a Full‑Stack Developer with 5 years of experience turning ideas into scalable, high-impact
              software. From sleek frontends to robust backend APIs, I build solutions that save time and deliver real
              value—often enhanced with smart automation.
              <br />
              <br />
              I’ve led and contributed to both client projects and personal builds, like{' '}
              <strong className="text-white">SportBook</strong> (a sports field booking platform in development), a{' '}
              <strong className="text-white">TechNews Scraper</strong> for automatic content aggregation, and accounting
              integrations powered by <strong className="text-white">QuickBooks</strong>.
              <br />
              <br />
              Outside of coding, I’m always exploring new projects to sharpen my skills and stay aligned with industry
              demands. I learn by building—constantly growing and creating solutions that matter.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-6xl mt-2 border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-left mb-2">Tech Stack.</CardTitle>
            <CardContent className="p-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Tailwind</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Express</Badge>
                <Badge variant="outline">MySQL</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">n8n</Badge>
                <Badge variant="outline">ChatGPT</Badge>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </section>
  )
}

export default About
