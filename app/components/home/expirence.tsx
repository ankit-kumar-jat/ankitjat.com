import { Link } from '@remix-run/react'
import React, { Fragment } from 'react'
import Section from '~/components/home/section'
import { EXPERIENCE } from '~/config'

function Experience() {
  return (
    <Section title="Where I’ve Worked" id="experience">
      <div className="space-y-10 md:space-y-16">
        {EXPERIENCE.map(job => (
          <div
            className="grid gap-x-6 gap-y-2 md:grid-cols-3"
            key={job.company + job.start}
          >
            <div className="col-span-1 md:text-right">
              <p className="text font-mono uppercase text-muted-foreground md:my-1 lg:my-2">
                {job.start} - {job.end}
              </p>
            </div>
            <div className="col-span-1 max-w-3xl space-y-4 md:col-span-2">
              <Link
                to={job.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 outline-none focus-within:underline hover:underline"
              >
                <h3 className="inline text-lg font-medium sm:text-xl lg:text-2xl">
                  {job.position} At {job.company}
                </h3>
              </Link>
              <ul className="ml-2 list-['▹'] space-y-2 text-sm leading-tight text-foreground/85 marker:text-primary lg:text-base">
                {job.experience.map((exp, index) => (
                  <li key={index} className="pl-3">
                    {exp}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.tech.map(tech => (
                  <span
                    key={tech}
                    className="whitespace-nowrap rounded-full bg-primary/20 px-4 py-1 font-mono text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { Experience }
