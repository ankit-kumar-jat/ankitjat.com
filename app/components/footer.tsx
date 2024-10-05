import { SocialLinks } from '~/components/social-links'

function Footer() {
  return (
    <footer className="container py-4">
      <section className="my-6 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="text-center font-mono text-xs text-muted-foreground sm:text-left">
            <span>Built with &hearts; by </span>
            <span className="whitespace-nowrap">Ankit Kumar Jat</span>
          </p>
        </div>
        <SocialLinks />
      </section>
      <div className="text-center font-mono text-xs text-muted-foreground">
        <p>
          <span>All rights reserved </span>
          <span className="whitespace-nowrap">© Ankit Kumar Jat 2024</span>
        </p>
      </div>
    </footer>
  )
}

export { Footer }
