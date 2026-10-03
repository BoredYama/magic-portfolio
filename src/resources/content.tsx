import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sagar",
  lastName: "Gaud",
  name: "Sagar Gaud",
  role: "AI Workflow & Automation Specialist",
  avatar: "/images/avatar-v2.jpg",
  email: "sagargaud88@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationLabel: "Mumbai, India",
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Notes on local AI pipelines, automation and self-hosted infrastructure.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+917977059140",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sagar-gaud-244ab0b5/",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BoredYama",
    essential: true,
  },
  {
    name: "ArtStation",
    icon: "artstation",
    link: "https://www.artstation.com/bored_yama",
    essential: true,
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://youtu.be/PKCgRCNnps0",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: `/api/og/generate?title=${encodeURIComponent(`${person.name} | Portfolio`)}`,
  label: "Home",
  title: `${person.name} | Portfolio`,
  description: `Portfolio of ${person.name}, ${person.role} with a background in 3D production`,
  headline: <>AI pipelines and automation, built on a 3D production background</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>Recent work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Local AI generation pipeline
        </Text>
      </Row>
    ),
    href: "/work/local-ai-generation-pipeline",
  },
  subline: (
    <>
      I am a Mumbai-based builder of AI workflows: local generation pipelines, LLM-powered
      automations and the self-hosted infrastructure that runs them. I bring years of 3D texturing
      and quality analysis for clients including Disney and Amazon to every pipeline I build.
    </>
  ),
  showreel: {
    display: true,
    videoId: "PKCgRCNnps0",
    title: `${person.name} – showreel`,
  },
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.locationLabel || person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  resume: {
    display: true,
    link: "/SagarGaud-Resume.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I build and run AI workflows: a local generation pipeline for video and music on my own
        Linux/NVIDIA workstation, n8n automations that use LLMs to filter and deliver information,
        and the self-hosted cloud infrastructure behind them. Before AI, I spent years as a 3D
        artist and quality analyst in animation, VFX and eCommerce, working for clients including
        Disney and Amazon. That production background shapes how I work with AI: reference-driven,
        detail-oriented and focused on output that holds up to review.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "AI & Automation Projects",
        timeframe: "2025 - Present",
        role: "Independent / Self-Directed",
        achievements: [
          <>
            Built and maintain a local AI generation pipeline (ComfyUI, LTX video, ACE-Step music)
            on a custom Linux/NVIDIA workstation, including custom node debugging and Python
            environment management.
          </>,
          <>
            Developed automated job-scraping workflows in n8n that filter Reddit and Google Jobs
            postings via LLM integration (Gemini) and deliver curated leads to Discord.
          </>,
          <>
            Manage self-hosted infrastructure on an Oracle Cloud VM (Linux administration, Docker,
            systemd) supporting multiple automation workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Assemble / Clickable Network",
        timeframe: "Jan 2025 - Present",
        role: "Quality Analyst",
        achievements: [
          <>
            Review videos created by video editors to find glitches and artifacts in the audio or
            video before publication.
          </>,
          <>
            Provide subtitle corrections that sync with the audio, and write detailed feedback in
            Google Sheets with a clean record for each video.
          </>,
        ],
        images: [],
      },
      {
        company: "Various Clients",
        timeframe: "May 2024 - Oct 2025",
        role: "Freelance 3D Artist",
        achievements: [
          <>
            Delivered 3D assets for different client briefs, including product-focused and
            animation-ready outputs.
          </>,
          <>
            Managed reference analysis, UV preparation, and texture creation from start to final
            delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "Creators3D / Hexa3D",
        timeframe: "Aug 2023 - Apr 2024",
        role: "Quality Analyst",
        achievements: [
          <>
            Reviewed 3D models against client-provided reference images to enforce quality
            guidelines.
          </>,
          <>Wrote actionable feedback for artists to improve consistency and final output quality.</>,
        ],
        images: [],
      },
      {
        company: "SuperDNA 3D Lab",
        timeframe: "Aug 2022 - Aug 2023",
        role: "Freelance 3D Artist",
        achievements: [
          <>
            Returned as a freelance artist to support eCommerce asset production with the same
            quality standards.
          </>,
          <>
            Delivered UV-unwrapped and realistically textured assets aligned with product references.
          </>,
        ],
        images: [],
      },
      {
        company: "Fat Hamster Studio",
        timeframe: "Feb 2022 - Aug 2022",
        role: "Executive Animation",
        achievements: [
          <>Analyzed and interpreted concept art for production assets.</>,
          <>Handled UV unwrapping and created textures closely aligned with approved concepts.</>,
        ],
        images: [],
      },
      {
        company: "SuperDNA 3D Lab",
        timeframe: "Feb 2021 - Feb 2022",
        role: "3D Artist (Full-time)",
        achievements: [
          <>
            Analyzed reference images and concept requirements for eCommerce-focused 3D assets.
          </>,
          <>
            Performed UV unwrapping and built realistic textures based on client references.
          </>,
        ],
        images: [],
      },
      {
        company: "Disney Animated Flipbooks & Various Clients",
        timeframe: "Jan 2017 - Jan 2019",
        role: "Freelance",
        achievements: [
          <>Created digital flipbooks for various clients, including Disney.</>,
          <>Analyzed the stories, adjusted audio and synced the animation with speech.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Survodaya School",
        description: <>SSC, Mumbai</>,
      },
      {
        name: "Keerti Institute of Thane",
        description: <>Diploma in Animation and VFX, Thane</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "AI & Automation",
        description: (
          <>
            Local generative AI pipelines, LLM-powered automations and the self-hosted
            infrastructure that runs them.
          </>
        ),
        tags: [
          {
            name: "ComfyUI",
          },
          {
            name: "LTX Video",
          },
          {
            name: "ACE-Step",
          },
          {
            name: "n8n",
          },
          {
            name: "Gemini",
            icon: "gemini",
          },
          {
            name: "Local LLMs",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Linux",
            icon: "linux",
          },
        ],
        images: [],
      },
      {
        title: "3D Texturing and UV Unwrapping",
        description: (
          <>Hands-on texturing and UV workflows for animation and product visualization assets.</>
        ),
        tags: [
          {
            name: "Autodesk Maya",
          },
          {
            name: "Substance Painter",
          },
          {
            name: "Adobe Photoshop",
          },
        ],
        images: [],
      },
      {
        title: "Detailing and Asset Finishing",
        description: <>Detailing in ZBrush and mesh refinement for production-ready quality.</>,
        tags: [
          {
            name: "ZBrush",
          },
          {
            name: "Blender 3D",
            icon: "blender",
          },
        ],
        images: [],
      },
      {
        title: "Image and Video Editing",
        description: <>Post-processing and media support for presentation and delivery.</>,
        tags: [
          {
            name: "Premiere Pro",
          },
          {
            name: "After Effects",
          },
          {
            name: "DaVinci Resolve",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes and Insights",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Work – ${person.name}`,
  description: `AI automation and 3D production work by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Renders",
  title: `3D Renders – ${person.name}`,
  description: `Textured 3D assets by ${person.name}`,
  // Add renders to public/images/projects/3d and list them here
  images: [
    {
      src: "/images/projects/3d/it_taxi.png",
      alt: "Yellow taxi cab with a checkered stripe on a dark background",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/sofa.png",
      alt: "Purple velvet three-seat sofa",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/haunted_house.png",
      alt: "Haunted house interior with weathered red wood panelling",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/recliner.png",
      alt: "Tan leather recliner with matching footstool",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/potion.png",
      alt: "Stylised brass potion still standing on grass",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/rustic.png",
      alt: "Rustic distressed wooden side table with a drawer",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/gaming.png",
      alt: "Black and red gaming chair",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/window_frame.png",
      alt: "Haunted house window with red curtains",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/bean.png",
      alt: "Black leather bean bag with pouf and cushion",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/chair.png",
      alt: "Pair of green chairs with cane seats and backs",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/3d/office.png",
      alt: "Black ergonomic office chair",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
