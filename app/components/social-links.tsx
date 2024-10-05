import { Link } from '@remix-run/react'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'

function SocialLinks() {
  return (
    <div className="flex flex-nowrap gap-2 text-muted-foreground">
      <Link
        className="p-2 outline-none transition-all ease-custom focus-within:-translate-y-2 focus-within:text-primary hover:-translate-y-2 hover:text-primary"
        to="https://www.linkedin.com/in/ankit-kumar-jat/"
        title="LinkdIn"
      >
        <LinkedinIcon width={20} />
      </Link>
      <Link
        className="p-2 outline-none transition-all ease-custom focus-within:-translate-y-2 focus-within:text-primary hover:-translate-y-2 hover:text-primary"
        target="_blank"
        to="https://github.com/ankit-kumar-jat"
        title="GitHub"
      >
        <GithubIcon width={20} />
      </Link>
      <Link
        className="p-2 outline-none transition-all ease-custom focus-within:-translate-y-2 focus-within:text-primary hover:-translate-y-2 hover:text-primary"
        target="_blank"
        to="https://www.instagram.com/ankit.kumar.jat/"
        title="Instagram"
      >
        <InstagramIcon width={20} />
      </Link>
      <Link
        className="p-2 outline-none transition-all ease-custom focus-within:-translate-y-2 focus-within:text-primary hover:-translate-y-2 hover:text-primary"
        target="_blank"
        to="https://twitter.com/_ankitkumarjat"
        title="Twitter"
      >
        <TwitterIcon width={20} />
      </Link>
    </div>
  )
}

export { SocialLinks }
