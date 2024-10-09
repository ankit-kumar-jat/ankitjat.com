import { SVGProps } from 'react'
import { cn } from '~/lib/utils'

function LoadingIcon({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={cn('-ml-1 mr-3 h-5 w-5 animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <title>Loading</title>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.25}
      ></circle>
      <path
        opacity={0.75}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default LoadingIcon
