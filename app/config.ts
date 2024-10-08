const NAV_LINKS = [
  { title: 'About', to: '/#about' },
  { title: 'Experience', to: '/#experience' },
  { title: 'Project', to: '/#projects' },
  { title: 'Contact', to: '/#contact' },
  { title: 'Blog', to: '/blog' },
]
const EMAIL = 'ankitkumarjat@zohomail.com'

const SOCIAL_MEDIA = [
  { title: 'Linkedin', link: 'https://www.linkedin.com/in/ankit-kumar-jat/' },
  { title: 'GitHub', link: 'https://github.com/ankit-kumar-jat' },
  { title: 'Instagram', link: 'https://www.instagram.com/ankit.kumar.jat/' },
  { title: 'Twitter', link: 'https://twitter.com/_ankitkumarjat' },
]

const PROJECTS = [
  {
    title: 'Tomeki',
    description:
      'Tomeki allows users to discover and explore millions of books with ease from openlibrary. Built with a focus on performance and user experience.',
    tech: ['RemixJS', 'React', 'TypeScript', 'TailwindCSS', 'Cloudflare'],
    githubLink: 'https://github.com/ankit-kumar-jat/tomeki',
    liveLink: 'https://www.tomeki.site',
    image: '/tomeki.png',
  },
  {
    title: 'Tomeki Blog',
    description:
      'A space for book reviews and recommendations, helping readers discover new books across genres. Built for book lovers, the blog offers curated insights and recommendations.',
    tech: ['RemixJS', 'React', 'TypeScript', 'TailwindCSS', 'Cloudflare'],
    githubLink: 'https://github.com/ankit-kumar-jat/tomeki',
    liveLink: 'https://www.tomeki.site/blogs',
    image: '/tomeki-blog.png',
  },
  {
    title: 'Internet Speed Tester',
    description:
      'A simple, accurate tool to test your internet speed using the NDT7 protocol. It measures download and upload speeds, giving you real-time insights into your connection performance.',
    tech: ['RemixJS', 'React', 'TypeScript', 'TailwindCSS'],
    githubLink: 'https://github.com/ankit-kumar-jat/internet-speed-test-ndt7',
    liveLink: 'https://ankit-kumar-jat.github.io/internet-speed-test-ndt7/',
    image: '/internet-speed-tester.png',
  },
  {
    title: 'Image Optimizer',
    description:
      'A web app that optimizes images using compression techniques to shrink images to minimum possible size while keeping the required level of quality.',
    tech: ['NodeJS', 'Express', 'JQuery'],
    githubLink: 'https://github.com/ankit-kumar-jat/imageoptimizer',
    liveLink: 'http://imageoptimizer.glitch.me/',
    image: '/image-optimizer.png',
  },
  {
    title: 'Limp-Dark',
    description:
      'A minimal jekyll theme with search and emoji suport. Limp theme for elegant writers with modern flat style and beautiful dark colors with fast speed.',
    tech: ['Jekyll', 'Scss', 'Markdown', 'JavaScript'],
    githubLink: 'https://github.com/ankit-kumar-jat/limp-dark',
    liveLink: 'https://ankit-kumar-jat.github.io/limp-dark',
    image: '/limp-dark.png',
  },
  {
    title: 'Iss Info',
    description:
      'A web app that shows current information of International Space Station. such as location, crew info and next visual pass from your city by city name.',
    tech: ['NodeJS', 'LeafletJS', 'JQuery', 'Scss', 'Webpack'],
    githubLink: 'https://github.com/ankit-kumar-jat/iss-info',
    liveLink: 'http://issinfo.glitch.me/',
    image: '/iss-info.png',
  },
]

const EXPERIENCE = [
  {
    company: 'Affle',
    companyWebsite: 'https://affle.com/',
    position: 'Software Development Engineer II',
    start: 'June 2021',
    end: 'Present',
    experience: [
      'Responsible for debugging, fixing client issues, and implementing new features.',
      'Developed and maintained scalable and user-friendly web applications using ReactJS, RemixJS, NextJS, NodeJS and TypeScript.',
      'Collaborated with cross-functional teams, including designers and backend engineers, to deliver optimal user experiences.',
      'Integrated RESTful APIs and third-party libraries for application enhancement.',
      'Implemented best practices and coding standards to enhance code quality and maintainability.',
      'Successfully identified and resolved issues promptly, minimizing the impact on end-users and maintaining optimal system functionality.',
      'Spearheaded the initiative to update and modernize the tech stack, leading to significant improvements (40%) in development speed and process efficiency.',
    ],
    tech: [
      'JavaScript',
      'TypeScript',
      'React',
      'NextJS',
      'RemixJS',
      'NodeJS',
      'HTML & SCSS',
      'TailwindCSS',
    ],
  },
]

export { NAV_LINKS, EMAIL, SOCIAL_MEDIA, PROJECTS, EXPERIENCE }