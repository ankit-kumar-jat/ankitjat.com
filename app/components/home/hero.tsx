import { useEffect, useRef, useState } from 'react'
import { Link } from '@remix-run/react'
import { CanvasSpace, Create, Group, Line, Pt } from 'pts'
import { SocialLinks } from '~/components/social-links'
import { Button } from '~/components/ui/button'
import { useHydrated } from '~/components/hooks/use-hydrated'

function Hero() {
  const isHydrated = useHydrated()
  return (
    <div className="relative h-screen max-h-[1536px] min-h-[640px]">
      {isHydrated && <DynamicLinesBackground />}
      <div className="container pointer-events-none absolute inset-0 h-full pt-28">
        <div className="flex h-full flex-col justify-center">
          <div className="pb-24">
            <p className="mb-2 font-mono text-primary">Namste, my name is</p>
            <h1 className="text-[clamp(36px,_8vw,_80px)] font-bold leading-tight">
              Ankit Kumar Jat.
            </h1>
            <p className="text-[clamp(36px,_8vw,_80px)] font-bold leading-tight text-muted-foreground">
              I build things for the web.
            </p>
            <p className="my-4 max-w-lg text-muted-foreground">
              Building modern web applications from the heart of Rajasthan,
              India. Specializing in full-stack development with a focus on
              performance, scalability, and clean code.
            </p>
            <div className="pointer-events-auto mt-10 flex gap-4 md:mt-14">
              <Button asChild className="font-semibold" size="lg">
                <Link to="/blog">Read The Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <section className="pointer-events-auto ml-auto">
            <SocialLinks />
          </section>
        </div>
      </div>
    </div>
  )
}

const COLORS = [
  '#c8553d',
  '#588B8B',
  '#ACE894',
  '#dc2626',
  '#d97706',
  '#0891b2',
  '#e11d48',
]
const POINTS_COUNT = 150

function DynamicLinesBackground() {
  const canvasSpaceRef = useRef<CanvasSpace | null>(null)

  useEffect(() => {
    if (!canvasSpaceRef.current) {
      document.getElementById('#lines-bg_canvas')?.remove()
      floatySpace()
    }
  }, [])

  function floatySpace() {
    canvasSpaceRef.current?.removeAll()

    let canvasSpace = new CanvasSpace('#lines-bg').setup({
      bgcolor: 'transparent',
      resize: true,
      retina: true,
    })
    canvasSpaceRef.current = canvasSpace
    let canvasForm = canvasSpace.getForm()

    let pts = new Group()
    let timeOutId: ReturnType<typeof setTimeout>
    let count = Math.round(window.innerWidth * 0.05)
    if (count > POINTS_COUNT) count = POINTS_COUNT

    canvasSpace.add({
      // creatr random points
      // no need for start as sesize will render points
      // start: bound => {
      //   pts = Create.distributeRandom(canvasSpace.innerBound, count)
      // },

      animate: (time, ftime) => {
        // this adds the rotation of lines
        pts.rotate2D(0.0006, canvasSpace.center)

        pts.forEach((pt, idx) => {
          // make a line and turn it into an "op" (see the guide on Op for more)
          let perpend = new Group(
            new Pt(0, -(canvasSpace.size.x * 0.5)),
            new Pt(canvasSpace.size.x, 0),
          ).op(Line.perpendicularFromPt)

          // for each point, find the perpendicular to the line
          let lp = perpend(pt)

          let r = Math.min(canvasSpace.size.x, canvasSpace.size.y) * 1.8

          // this adds the opdacity of lines
          let ratio = Math.min(0.9, 1 - lp.$subtract(pt).magnitude() / r)
          if (ratio < 0.1) ratio = 0.1

          let mouse = canvasSpace.pointer
          let distFromMouse = Line.perpendicularFromPt([pt, lp], mouse)
            .$subtract(mouse)
            .magnitude()

          if (distFromMouse < 50) {
            ratio += 0.1
          } else {
            ratio -= 0.05
          }

          canvasForm
            .stroke(`rgba(120,113,108,${ratio})`, ratio * 2)
            .line([pt, lp])
          canvasForm.fillOnly(COLORS[idx % 3]).point(pt, 1.5, 'circle')
        })
      },

      resize: () => {
        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => {
          pts = Create.distributeRandom(canvasSpace.innerBound, count)
        }, 500)
      },
    })

    canvasSpace.bindMouse().play()
  }

  return (
    <div
      className="h-full w-full overflow-hidden bg-transparent"
      id="lines-bg"
    ></div>
  )
}

export { Hero }
