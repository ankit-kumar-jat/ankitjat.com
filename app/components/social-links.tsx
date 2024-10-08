import { Link } from '@remix-run/react'
import { SOCIAL_MEDIA } from '~/config'
import { Icon } from '~/components/icons'

function SocialLinks() {
  return (
    <div className="flex flex-nowrap gap-2 text-muted-foreground">
      {SOCIAL_MEDIA.map(({ title, link }) => (
        <Link
          className="p-2 outline-none transition-all ease-custom focus-within:-translate-y-2 focus-within:text-primary hover:-translate-y-2 hover:text-primary"
          to={link}
          title={title}
        >
          <Icon iconName={title} width={20} />
        </Link>
      ))}
    </div>
  )
}

export { SocialLinks }
