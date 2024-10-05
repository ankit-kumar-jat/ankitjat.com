import React, { SVGProps } from 'react'

function Logo({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M4.31347 11.366L21 1.73205L37.6865 11.366V30.634L21 40.2679L4.31347 30.634V11.366Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M24.293 25.0273H17.6836L16.3008 29H13.2188L19.6641 11.9375H22.3242L28.7812 29H25.6875L24.293 25.0273ZM18.5156 22.6367H23.4609L20.9883 15.5586L18.5156 22.6367Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { Logo }
