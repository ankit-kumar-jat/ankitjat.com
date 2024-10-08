import type { MetaFunction } from '@remix-run/cloudflare'
import { GetInTouch } from '~/components/home/get-in-touch'
import { Hero } from '~/components/home/hero'
import { About } from '~/components/home/about'
import { SectionGroup } from '~/components/home/section-group'
import { Experience } from '~/components/home/expirence'
import { Projects } from '~/components/home/projects'

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'Ankit Kumar Jat - Full Stack Web Developer | Personal Blog & Projects',
    },
    {
      name: 'description',
      content:
        'Explore the personal website of Ankit Kumar Jat, a full stack web developer specializing in TypeScript, JavaScript, React, Remix, NodeJS, and NextJS. Follow his blog for insights on web development, programming tips, and his latest projects.',
    },
  ]
}

export default function Index() {
  return (
    <div>
      <Hero />
      <SectionGroup>
        <About />
        <Experience />
        <Projects />
        <GetInTouch />
      </SectionGroup>
    </div>
  )
}
