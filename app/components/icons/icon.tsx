import { SVGProps } from 'react'
import {
  GitHubIcon,
  InstagramIcon,
  LinkdinIcon,
  LogoIcon,
  TwitterIcon,
} from '~/components/icons'

interface IconProps extends SVGProps<SVGSVGElement> {
  iconName: string
}

function Icon({ iconName, ...rest }: IconProps) {
  switch (iconName) {
    case 'GitHub':
      return <GitHubIcon {...rest} />
    case 'Instagram':
      return <InstagramIcon {...rest} />
    case 'Linkedin':
      return <LinkdinIcon {...rest} />
    case 'Logo':
      return <LogoIcon {...rest} />
    case 'Twitter':
      return <TwitterIcon {...rest} />
    default:
      return null
  }
}

export default Icon
