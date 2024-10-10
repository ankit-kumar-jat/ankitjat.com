import { ActionFunctionArgs, json } from '@remix-run/cloudflare'
import { Form, useFetcher } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import { EMAIL } from '~/config'
import { cn } from '~/lib/utils'

export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.formData()

  const name = formData.get('name') ?? ''
  const email = formData.get('email') ?? ''
  const message = formData.get('message') ?? ''

  // !NOTE: following input is a honeypot
  const honeypot = formData.get('nameConfirm')

  if (honeypot)
    return json(
      { success: false, errorMessage: '', errors: {} },
      { status: 400 },
    )

  const errors: { name?: string; email?: string; message?: string } = {}

  if (!name || typeof name !== 'string') {
    errors.name = 'Name is required.'
  }

  if (!email || typeof email !== 'string') {
    errors.email = 'Email is required.'
  }

  if (!message || typeof message !== 'string') {
    errors.message = 'Message is required.'
  }

  if (errors.name || errors.email || errors.message) {
    return json(
      {
        errorMessage: 'Please enter all required fields.',
        success: false,
        errors,
      },
      { status: 400 },
    )
  }

  const body = new FormData()

  body.set('name', name)
  body.set('email', email)
  body.set('message', message)
  body.set('formDataNameOrder', `["name","email","message"]`)
  body.set('formGoogleSheetName', 'responses')
  body.set('formGoogleSendEmail', EMAIL)

  const URL = context.cloudflare.env.GOOGLE_CONTACT_MACRO_URL

  await fetch(URL, { method: 'post', body })

  return json({ success: true, errors: null })
}

type FormState = 'idle' | 'success' | 'error' | 'submitting'

export function ContactForm() {
  const fetcher = useFetcher<typeof action>()

  const state: FormState =
    fetcher.state === 'submitting'
      ? 'submitting'
      : fetcher.data?.success
        ? 'success'
        : fetcher.data?.errors
          ? 'error'
          : 'idle'

  return (
    <div className="grid grid-cols-[1/1]">
      <div
        className={cn(
          'pointer-events-none scale-75 opacity-0 transition-[transform,opacity] delay-0 duration-300 [grid-area:1/1]',
          state !== 'success' &&
            'pointer-events-auto scale-100 opacity-100 delay-300',
        )}
      >
        <fetcher.Form
          method="POST"
          action="/resources/contact"
          className="flex flex-col gap-4"
        >
          <label className="relative">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="peer w-full rounded-t-lg border-b-2 bg-muted px-3 py-2 text-lg outline-none"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-custom peer-focus:w-full" />
            <span className="sr-only">Enter your name</span>
          </label>
          <label className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="peer w-full rounded-t-lg border-b-2 bg-muted px-3 py-2 text-lg outline-none"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-custom peer-focus:w-full" />
            <span className="sr-only">Enter your email</span>
          </label>
          <label className="relative leading-none">
            <textarea
              name="message"
              cols={20}
              rows={5}
              placeholder="Enter your message here..."
              required
              className="peer w-full rounded-t-lg border-b-2 bg-muted px-3 py-2 text-lg outline-none"
            ></textarea>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-custom peer-focus:w-full" />
            <span className="sr-only">Enter your message</span>
          </label>
          {/* NOTE: following input is a honeypot */}
          <input type="text" name="nameConfirm" defaultValue="" hidden />
          <div>
            <Button
              type="submit"
              size="lg"
              disabled={state === 'submitting'}
              className="min-w-40"
            >
              {state === 'submitting' ? (
                <span>Sending...</span>
              ) : (
                <span>Send Message</span>
              )}
            </Button>
          </div>
        </fetcher.Form>
      </div>
      <div
        className={cn(
          'pointer-events-none scale-75 opacity-0 transition-[transform,opacity] delay-0 duration-300 [grid-area:1/1]',
          state === 'success' &&
            'pointer-events-auto scale-100 opacity-100 delay-300',
        )}
      >
        <h3 className="text-2xl drop-shadow-md sm:text-3xl lg:text-4xl">
          Thank you !
        </h3>
        <p className="mt-2 drop-shadow-sm">
          Your response has been submitted successfully.
        </p>
      </div>
    </div>
  )
}
