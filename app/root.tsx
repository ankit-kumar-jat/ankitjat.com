import type { LoaderFunctionArgs } from '@remix-run/cloudflare'
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useRouteLoaderData,
  type ShouldRevalidateFunction,
} from '@remix-run/react'

import '~/tailwind.css'
import { PageLayout } from '~/components/layout'
import { GeneralErrorBoundary } from '~/components/error-boundary'
import { ErrorPage } from '~/components/error'
import { cn, getErrorMessage } from '~/lib/utils'
import { ClientHintCheck, getHints } from '~/lib/client-hints'
import { getTheme } from '~/lib/theme.server'

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
  const data = useRouteLoaderData<typeof loader>('root')

  const theme =
    data?.requestInfo.userPrefs.theme ?? data?.requestInfo.hints.theme
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
        {/* This should be in head to prevent blinking */}
        <ClientHintCheck />
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
