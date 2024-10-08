import { Link } from '@remix-run/react'
import { ReactNode } from 'react'
import Section from '~/components/home/section'

function About() {
  return (
    <Section title="About Me" id="about">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
            className="mx-auto max-w-full rounded-xl border-2 bg-muted"
            src=""
            alt="Image of Ankit kumar jat"
            width={300}
            height={300}
          />
        </div>
        <article className="max-w-3xl space-y-4 text-foreground/85 md:col-span-2">
          <p>
            Hello!, I’m Ankit Kumar Jat, a Software Development Engineer at{' '}
            <ExtLink href="https://affle.com/">Affle</ExtLink>, based in{' '}
            <ExtLink href="https://maps.app.goo.gl/4QWbrBEV4gfwcPTZ7">
              Rajasthan, India
            </ExtLink>
            .
          </p>
          <p>
            I graduated in Computer Science from{' '}
            <ExtLink href="https://jecrcfoundation.com/">
              Jaipur Engineering College and Research Centre
            </ExtLink>
            . Over the years, I’ve transitioned from freelancing to working
            professionally in web development, gaining experience across various
            technologies and industries. <br />
          </p>
          <p>
            I’m passionate about building web applications that are not only
            visually appealing but also optimized for performance and
            scalability. From websites to full-scale applications, my goal is to
            create seamless digital experiences that users love.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="ml-2 grid max-w-lg list-['▹'] grid-cols-2 gap-2 font-mono marker:text-primary">
            <li className="pl-3 text-sm sm:text-base">
              JavaScript (TypeScript)
            </li>
            <li className="pl-3 text-sm sm:text-base">RemixJS (React)</li>
            <li className="pl-3 text-sm sm:text-base">NextJS (React)</li>
            <li className="pl-3 text-sm sm:text-base">Tailwind CSS</li>
            <li className="pl-3 text-sm sm:text-base">Node.js</li>
            <li className="pl-3 text-sm sm:text-base">Cloudflare & Vite</li>
          </ul>
        </article>
      </div>
    </Section>
  )
}

interface ExtLinkProps {
  href: string
  children: ReactNode
}

function ExtLink({ href, children }: ExtLinkProps) {
  return (
    <Link
      to={href}
      className="text-primary underline-offset-2 outline-none focus-within:underline hover:underline"
    >
      {children}
    </Link>
  )
}

export { About }
