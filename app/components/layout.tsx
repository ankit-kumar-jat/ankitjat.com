import { ReactNode, useEffect } from 'react'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

function PageLayout({ children }: { children: ReactNode }) {
  // add target="_blank" rel="noopener noreferrer" on all external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer')
          link.setAttribute('target', '_blank')
        }
      })
    }
  }

  useEffect(() => {
    handleExternalLinks()
  }, [])

  return (
    <div className="min-h-screen">
      {/* <a
        className=""
        href="#content"
      >
        Skip to Content
      </a> */}

      <div>
        <Header />
        <div id="contant">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export { PageLayout }
