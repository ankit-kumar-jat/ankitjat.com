import { ReactNode } from 'react'
import { cn } from '~/lib/utils'

interface SectionGroupProps {
  children?: ReactNode
  className?: string
}

function SectionGroup({ children, className }: SectionGroupProps) {
  return (
    <div className={cn('[counter-set:section]', className)}>{children}</div>
  )
}

export { SectionGroup }
