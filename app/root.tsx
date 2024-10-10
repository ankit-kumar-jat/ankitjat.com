import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  type ShouldRevalidateFunction,
} from '@remix-run/react'

import '~/tailwind.css'
import { PageLayout } from '~/components/layout'
import { GeneralErrorBoundary } from '~/components/error-boundary'
import { ErrorPage } from '~/components/error'
import { cn, getErrorMessage } from '~/lib/utils'
import { getHints } from '~/lib/client-hints'
import { getTheme } from '~/lib/theme.server'
import { useTheme } from '~/routes/resources.theme-switch'

export async function loader({ request, context }: LoaderFunctionArgs) {
  return {
    requestInfo: {
      hints: getHints(request),
      path: new URL(request.url).pathname,
      userPrefs: {
        theme: getTheme(request),
      },
    },
  }
}

export type RootLoaderType = typeof loader

export const shouldRevalidate: ShouldRevalidateFunction = ({ formAction }) => {
  if (formAction === '/resources/theme-switch') {
    return true // only revalidate switch theme action is called
  }
  return false
}

export function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background text-foreground',
          theme === 'dark' ? 'dark' : 'light',
        )}
      >
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
