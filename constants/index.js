export const myProjects = [
{
  id: 1,
  title: "Sharity",
  description:
    "Sharity is a full-stack app for sharing unused items, featuring JWT auth, MongoDB data management, real-time chat, and a responsive UI.",
  subDescription: [
    "Built with Next.js (TypeScript) for server-side rendering and seamless frontend-backend integration.",
    "Implemented user authentication using custom JWT tokens for secure and stateless sessions.",
    "Managed data persistence with MongoDB and Mongoose ODM for flexible schema design.",
    "Enabled real-time chat functionality using Socket.io.",
    
  ],
  href: "https://sharity-production.up.railway.app/",
  logo: "/assets/logos/sharity-logo.svg",
  image: "/sharity.png",
  tags: [
    { id: 1, name: "Next.js", path: "/nextjs.svg" },
    { id: 2, name: "TypeScript", path: "/ts.svg" },
    { id: 3, name: "Mongoose", path: "/mongoose.png" },
    { id: 4, name: "JWT", path: "jwt.jpg" },
    { id: 5, name: "Socket.io", path: "/socket.jpg" },
    { id: 6, name: "Tailwind CSS", path: "/tailwindcss.svg" },
  ],
},
 {
  id: 2,
  title: "DealHunt",
  description:
"DealHunt is a full-stack app for finding and sharing online deals, with Google OAuth, tagging, and custom search integration.",

  subDescription: [
    "Built with Next.js (TypeScript) using API routes for backend functionality.",
    "Implemented authentication using Auth.js (NextAuth) with Google OAuth provider for seamless login.",
    "Used MongoDB and Mongoose ODM for flexible and scalable data storage.",
    "Integrated Google Custom Search Engine API in the backend to enhance deal search capabilities.",
    
  ],
  href: "https://dealhunt-brown.vercel.app/",
  logo: "/assets/logos/dealhunt.svg",
  image: "/dealhunt.png",
  tags: [
    { id: 1, name: "Next.js", path: "/nextjs.svg" },
    { id: 2, name: "TypeScript", path: "/ts.svg" },
    { id: 3, name: "Mongoose", path: "/mongoose.png" },
    { id: 4, name: "Auth.js", path: "/authjs.png" },
    { id: 5, name: "Tailwind CSS", path: "/tailwindcss.svg" },
  ],
}
,
  {
  id: 3,
  title: "MindTrek",
  description:
    "MindTrek is a full-stack mental wellness web application designed to provide users with tools for mindfulness, tracking mental health progress, and accessing personalized content. It features secure user authentication, intuitive data visualization, and a responsive UI.",
  subDescription: [
    "Developed using Next.js (TypeScript) for server-side rendering and seamless frontend-backend integration.",
    "Implemented authentication with Auth.js (NextAuth) using Github OAuth provider for secure login.",
    "Used MongoDB with Mongoose ODM for storing user data and mental health records.",
  ],
  href: "https://mind-trek-two.vercel.app/",
  logo: "/assets/logos/mindtrek-logo.svg",
  image: "/mindtrek.png",
  tags: [
    { id: 1, name: "Next.js", path: "/nextjs.svg" },
    { id: 2, name: "TypeScript", path: "/ts.svg" },
    { id: 3, name: "Mongoose", path: "/mongoose.png" },
    { id: 4, name: "Auth.js", path: "/authjs.png" },
    { id: 5, name: "Tailwind CSS", path: "/tailwindcss.svg" },
  ],
}

 
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/asok-tamang11/",
    icon: "/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/asook_tamang/",
    icon: "/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    job: "Popular Consultancy",
    date: "2020 - 2022",
    contents: [
      "Developed responsive and dynamic user interfaces using React.js and Tailwind CSS, enhancing user engagement and accessibility.",
      "Collaborated with designers and backend teams to implement seamless frontend-backend integrations.",
      "Optimized web applications for maximum speed and scalability.",
      "Implemented reusable UI components and maintained code quality with ESLint and Prettier.",
    ],
  },
  {
    title: "Full-Stack Developer",
    job: "Times College",
    date: "2022 - 2024",
    contents: [
      "Built and maintained scalable full-stack applications using React, TypeScript, Node.js, and MongoDB.",
      "Implemented secure authentication and authorization using Auth.js with Google OAuth.",
      "Integrated Google Custom Search API for advanced search capabilities in web applications.",
      "Designed and developed RESTful APIs and managed data models using Mongoose ODM.",
      "Utilized React Hook Form and Zod for efficient form handling and validation.",
      "Ensured responsive design and optimized user experience using Tailwind CSS.",
      "Collaborated in an Agile environment with continuous integration and code reviews.",
    ],
  },
];
;
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];