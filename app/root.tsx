import type { LinksFunction } from '@remix-run/cloudflare'
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react'

import '~/tailwind.css'
import { PageLayout } from '~/components/layout'
import { GeneralErrorBoundary } from '~/components/error-boundary'
import { ErrorPage } from '~/components/error'
import { getErrorMessage } from '~/lib/utils'

export const links: LinksFunction = () => []

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark min-h-screen bg-background text-foreground">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  )
}

export function ErrorBoundary() {
  const location = useLocation()

  return (
    <GeneralErrorBoundary
      statusHandlers={{
        404: () => (
          <ErrorPage
            title="404 - Oh no, you found a page that's missing stuff."
            subtitle={`"${location.pathname}" is not a page. So sorry.`}
            action={
              <Link to="/" className="underline">
                Go home
              </Link>
            }
          />
        ),
        400: ({ error }) => (
          <ErrorPage
            title="400 - Oh no, you did something wrong."
            subtitle={getErrorMessage(
              error,
              `If you think It is a mistake, let us know...`,
            )}
            action={
              <Link to="/" className="underline">
                Go home
              </Link>
            }
          />
        ),
        500: () => (
          <ErrorPage
            title="500 - Oh no, something did not go well."
            subtitle={`"${location.pathname}" is currently not working. So sorry.`}
            action={
              <Link to="/" className="underline">
                Go home
              </Link>
            }
          />
        ),
      }}
      unexpectedErrorHandler={error => (
        <ErrorPage
          error={error as Error}
          title="500 - Oh no, something did not go well."
          subtitle={`"${location.pathname}" is currently not working. So sorry.`}
          action={
            <Link to="/" className="underline">
              Go home
            </Link>
          }
        />
      )}
    />
  )
}
