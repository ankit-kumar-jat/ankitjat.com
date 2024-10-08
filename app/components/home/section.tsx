import { ReactNode } from 'react'
import { cn } from '~/lib/utils'

interface SectionProps {
  children?: ReactNode
  className?: string
  title: string
  id: string
}

function Section({ children, className, title, id }: SectionProps) {
  return (
    <section
      className={cn(
        'container my-24 scroll-mt-32 [counter-increment:section_1] sm:my-32 lg:my-40',
        className,
      )}
      id={id}
    >
      <div className="space-y-12 py-6 md:space-y-24">
        <h2 className="flex flex-nowrap items-end before:font-mono before:text-lg before:leading-none before:text-primary before:content-['0'_counter(section)_'.'] before:md:text-2xl before:md:leading-none">
          <span className="ml-2 mr-6 whitespace-nowrap text-2xl font-bold leading-none md:text-4xl md:leading-none">
            {title}
          </span>
          <span className="mb-3 mt-auto h-px w-80 bg-border" />
        </h2>
        <div className="">{children}</div>
      </div>
    </section>
  )
}

export default Section
