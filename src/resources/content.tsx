import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sagar",
  lastName: "Gaud",
  name: "Sagar Gaud",
  role: "3D Artist",
  avatar: "/images/avatar-v2.jpg",
  email: "sagargaud88@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationLabel: "Mumbai, India",
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights from my 3D production workflow and project breakdowns.</>,
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
    icon: "openLink",
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
    icon: "openLink",
    link: "https://www.artstation.com/bored_yama",
    essential: true,
  },
  {
    name: "YouTube",
    icon: "openLink",
    link: "https://youtu.be/PKCgRCNnps0",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>3D assets for animation, VFX, and eCommerce</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Recent work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Quality analysis pipeline
        </Text>
      </Row>
    ),
    href: "/work/quality-analysis-workflow-at-creators3d-hexa3d",
  },
  subline: (
    <>
      I am a Mumbai-based 3D Artist with hands-on experience in texturing, UV unwrapping, and
      quality analysis. I work across animation and product visualization pipelines for
      client-facing deliveries.
    </>
  ),
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
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an experienced 3D Artist with a strong background in animation and VFX. My work
        focuses on production-ready 3D texturing, UV workflows, and quality-first execution across
        client-focused pipelines.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
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
        company: "Assemble.gg",
        timeframe: "Oct 2025 - Present",
        role: "Quality Analyst",
        achievements: [
          <>
            Reviewed YouTube videos to identify visual and audio issues before publication.
          </>,
          <>
            Provided corrected transcripts and wrote detailed feedback for artists in Google Sheets.
          </>,
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
  description: `3D production and quality work by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
