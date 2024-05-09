import clothes from './assets/img/clothesCommerce.png';
import accessory from './assets/img/accessory.png';
import guide from './assets/img/guide.png';
import comments from './assets/img/comments.png';

interface SkillsUrl {
  url: string
}

interface Projects {
  url: string,
  description: string,
  warningText?: string,
  repo: string,
  live: string,
  warningTitle?: string,
  aggregates: string[];
}

export const skillsUrl: SkillsUrl[] = [
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg" 
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/CSS.svg" 
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/Sass.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/TailwindCSS-Dark.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/TypeScript.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/JQuery.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/NextJS-Dark.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/Prisma.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/SQLite.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/SolidJS-Dark.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/Redux.svg"
  },
  {
    url: "https://seeklogo.com/images/M/mobx-logo-0C59CBBAD9-seeklogo.com.png"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/GraphQL-Dark.svg"
  },
  {
    url: "https://github.com/tandpfun/skill-icons/raw/main/icons/Vite-Dark.svg"
  },
]

export const projects: Projects[] = [
  {
    url: clothes,
    description: "This project specializes in caps, hats, and winter headwear. This project showcases frontend development skills through sleek web layouts tailored for digital storefronts. Explore mock designs featuring a variety of headwear categories, providing insight into potential e-commerce projects.",
    repo: "https://github.com/george1994grandmaster/clothes-e-commerce",
    live: "https://clothes-e-commerce-eight.vercel.app",
    aggregates: ["Next.js", "TypeScript", "Redux", "Tailwind"],
  },
  {
    url: guide,
    description: "This project is a digital showcase focusing on accessory e-commerce. This project serves as a demonstration of frontend development skills, featuring sleek and intuitive web layouts tailored for digital storefronts. Explore mock designs representing various accessory categories, offering a glimpse into potential e-commerce projects.",
    repo: "https://github.com/george1994grandmaster/mountain-guide",
    live: "https://mountain-guide-indol.vercel.app",
    aggregates: ["React", "TypeScript", "Scss"],
  },
  {
    url: accessory,
    description: "This project  is a digital platform tailored for mountain exploration. It showcases frontend development skills through intuitive web layouts designed for outdoor enthusiasts. Explore detailed trail guides and safety tips, providing a glimpse into potential projects for mountain adventure enthusiasts.",
    repo: "https://github.com/george1994grandmaster/e-commerce-elite-accessory",
    live: "https://e-commerce-elite-accessory.vercel.app",
    aggregates: ["React", "TypeScript", "Redux", "Scss"],
  },
  {
    url: comments,
    description: "This project showcases an infinite nested comments system, similar to YouTube's. Users engage in dynamic discussions with nested replies, fostering interactive commenting experiences.",
    repo: "https://github.com/george1994grandmaster/infinitive_nested_comments_system",
    warningText: "The reason here is that this project utilizes Node.js, which prevents it from being deployed through Vercel. To run it, you need to execute 'npx json-server -p 3500 -w data/users.json' and 'npx json-server -p 3400 -w data/comments.json' after installing React",
    warningTitle: "NOTE!",
    live: "",
    aggregates: ["React", "Css", "Node.js"],
  },
]
