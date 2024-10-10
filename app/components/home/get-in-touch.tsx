import Section from '~/components/home/section'
import { Button } from '~/components/ui/button'
import { ContactForm } from '~/routes/resources.contact'

function GetInTouch() {
  return (
    <Section title="Get In Touch" id="contact">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6">
        <div className="space-y-8">
          <p className="max-w-xl">
            My inbox is always open. Whether Have a project in mind or just want
            to connect? Drop me a message or mail me. I'll try my best to get
            back to you!
          </p>
          <Button size="lg" asChild>
            <a href="mailto:ankitkumarjat@zohomail.com">Email Me</a>
          </Button>
        </div>
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}

export { GetInTouch }
