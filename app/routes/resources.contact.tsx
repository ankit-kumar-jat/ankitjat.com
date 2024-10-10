import { ActionFunctionArgs, json } from '@remix-run/cloudflare'
import { Form } from '@remix-run/react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()

  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  // if (redirectTo && typeof redirectTo !== 'string') {
  //   return json(
  //     { errorMessage: 'Invalid redirectTo received', success: false },
  //     { status: 400 },
  //   )
  // }

  return json({ success: true })
}

export function ContactForm() {
  return (
    <div className="grid grid-cols-[1/1]">
      <div
        className={cn(
          'pointer-events-none scale-75 opacity-0 transition-[transform,opacity] delay-0 duration-300 [grid-area:1/1]',
          true && 'pointer-events-auto scale-100 opacity-100 delay-300',
        )}
      >
        <Form action="/" method="POST" className="flex flex-col gap-4">
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
            <Button type="submit" size="lg">
              <span>Send Message</span>
            </Button>
          </div>
        </Form>
      </div>
      <div
        className={cn(
          'pointer-events-none scale-75 opacity-0 transition-[transform,opacity] delay-0 duration-300 [grid-area:1/1]',
          false && 'pointer-events-auto scale-100 opacity-100 delay-300',
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
