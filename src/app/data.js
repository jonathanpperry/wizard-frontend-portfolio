/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Main Portfolio Site",
    description:
      "My landing page site built using SvelteKit, Tailwind, and custom styling",
    date: "2023-06-02",
    demoLink: "https://jonathanperry.info",
  },
  {
    id: 2,
    name: "Notion AI Clone",
    description: "Notion clone built using Next.js, Blocknote, and cloudflare workers, integrating with the OpenAI translate, summary, and chat completion apis",
    date: "2022-06-20",
    demoLink: "https://notion-clone-yt-jonathanpperry-jonathanpperrys-projects.vercel.app/",
  },
  {
    id: 3,
    name: "2D Game Portfolio",
    description: "2D Game version of portfolio",
    date: "2022-09-10",
    demoLink: "https://jonathanpperry.github.io/portfolio/",
  },
  {
    id: 4,
    name: "Personal Blog Site",
    description: "Blog site built using next.js, contentlayer, and tailwind",
    date: "2022-05-30",
    demoLink: "https://jonnyramenblog.netlify.app/",
  },
  {
    id: 5,
    name: "Reactstagram",
    description: "Instagram clone using react and firebase",
    date: "2022-07-12",
    demoLink: "https://reacstagram.com",
  },
  {
    id: 6,
    name: "IonicPokedex",
    description: "Pokedex app built using ionic",
    date: "2022-10-01",
    demoLink: "https://ionic-angular-pokedex.netlify.app/",
  },
  {
    id: 7,
    name: "Jonny Ramen Weather",
    description: "Weather app built using Next.js",
    date: "2022-04-18",
    demoLink: "https://jonnyramenweather.netlify.app/",
  },
  {
    id: 8,
    name: "TechTalk",
    description: "Tech news aggregator",
    date: "2022-11-05",
    demoLink: "https://techtalk.example.com",
  },
  {
    id: 9,
    name: "Next Task Manager",
    description: "Task manager app built on Next.js, clerk auth, and hosted on Vercel",
    date: "2023-06-20",
    demoLink: "https://next-task-manager-omega.vercel.app",
  },
  {
    id: 10,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app",
    date: "2022-02-14",
    demoLink: "https://mindfulmoments.example.com",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/jonathanpperry",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/jonathanpperry",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/jonathanpperry",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Jonathan_Perry_Resume.docx",
    icon: "resume",
    newTab: true,
  },
];
