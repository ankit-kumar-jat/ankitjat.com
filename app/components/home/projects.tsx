import { Link } from '@remix-run/react'
import Section from '~/components/home/section'
import { PROJECTS } from '~/config'
import { ExternalLinkIcon, GitHubIcon } from '~/components/icons'
import { Fragment } from 'react/jsx-runtime'

function Projects() {
  return (
    <Section title="Some Things I've Built" id="projects">
      <div className="space-y-10 md:space-y-16">
        {PROJECTS.map(project => (
          <div
            className="grid gap-x-6 gap-y-4 md:grid-cols-3"
            key={project.title}
          >
            <div className="col-span-1 md:text-right">
              <picture>
                {project.image.map(({ url, type }) => (
                  <Fragment key={url}>
                    {type === 'image/png' ? (
                      <img
                        src={url}
                        alt={`Image of ${project.title}`}
                        className="mx-auto aspect-video max-w-full rounded-xl border-2 bg-muted object-cover"
                        width={1200}
                        height={657}
                        loading="lazy"
                      />
                    ) : (
                      <source srcSet={url} type={type} />
                    )}
                  </Fragment>
                ))}
              </picture>
            </div>
            <div className="col-span-1 max-w-3xl space-y-5 md:col-span-2">
              <div className="space-y-1">
                <p className="font-mono text-sm text-primary">
                  Featured Project
                </p>
                <h3 className="text-lg font-medium sm:text-xl lg:text-2xl">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm leading-tight text-foreground/85 lg:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="whitespace-nowrap rounded-full bg-primary/20 px-4 py-1 font-mono text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-nowrap gap-2 text-muted-foreground">
                <Link
                  className="p-2 outline-none transition-all ease-custom focus-within:-translate-y-2 focus-within:text-primary hover:-translate-y-2 hover:text-primary"
                  to={project.githubLink}
                >
                  <GitHubIcon width={20} />
                </Link>
                <Link
                  className="p-2 outline-none transition-all ease-custom focus-within:-translate-y-2 focus-within:text-primary hover:-translate-y-2 hover:text-primary"
                  to={project.liveLink}
                >
                  <ExternalLinkIcon width={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export { Projects }
