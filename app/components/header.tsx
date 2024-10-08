import { Link, NavLink, NavLinkProps } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { LogoIcon } from '~/components/icons'
import { NAV_LINKS } from '~/config'
import { cn } from '~/lib/utils'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenuState = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header className="fixed top-0 z-50 w-full transition-all ease-custom">
      <div className="relative">
        <div
          className={cn(
            'absolute inset-0 -z-10 bg-transparent',
            isScrolled && 'bg-background/40 backdrop-blur-lg',
          )}
        />
        <div
          className={cn(
            'container flex h-28 items-center gap-4 transition-all ease-custom',
            isScrolled && 'h-16',
          )}
        >
          <div className="z-30">
            <Link
              to="/"
              className="group text-primary"
              title="Ankit Kumar Jat's site logo"
            >
              <LogoIcon className="h-11 w-11 group-hover:fill-primary/20" />
            </Link>
          </div>
          <nav
            className={cn(
              'fixed right-0 top-0 z-20 ml-auto h-screen w-full translate-x-full bg-background p-14 pt-36 transition-all ease-custom lg:relative lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:p-0',
              isMenuOpen && 'translate-x-0',
            )}
          >
            <ul className="flex flex-col gap-8 lg:flex-row lg:items-center">
              {NAV_LINKS.map(({ title, ...rest }) => (
                <li key={title} className="[counter-increment:nav-links]">
                  <NavItem title={title} {...rest} />
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={toggleMenuState}
            className="z-30 ml-auto flex h-11 w-11 flex-col items-start justify-center gap-2 px-1 py-2 lg:hidden"
          >
            <span className="sr-only">open/hide menu</span>
            <span
              className={cn(
                'h-1 w-7 rounded-md bg-primary transition-all ease-custom',
                isMenuOpen && 'w-10 origin-left rotate-45',
              )}
            />
            <span
              className={cn(
                'h-1 w-9 rounded-md bg-primary transition-all ease-custom',
                isMenuOpen && '-translate-x-11 opacity-0',
              )}
            />
            <span
              className={cn(
                'h-1 w-5 rounded-md bg-primary transition-all ease-custom',
                isMenuOpen && 'w-10 origin-left -rotate-45',
              )}
            />
          </button>
        </div>
      </div>
    </header>
  )
}

interface NavItemProps extends NavLinkProps {
  title: string
}

function NavItem({ title, ...rest }: NavItemProps) {
  return (
    <NavLink
      {...rest}
      className="group relative py-2 font-mono text-foreground/90 outline-none drop-shadow-md transition-all ease-custom before:mr-1 before:text-primary before:content-['0'_counter(nav-links)_'.'] focus-within:text-primary hover:text-primary"
    >
      <span className="absolute bottom-1 left-0 h-[2px] w-0 rounded-sm bg-primary transition-all ease-custom group-focus-within:w-full group-hover:w-full" />
      {title}
    </NavLink>
  )
}

export { Header }
