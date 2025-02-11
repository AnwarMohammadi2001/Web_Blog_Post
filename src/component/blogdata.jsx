const blogPosts = [
  {
    title: "Why Tailwind CSS is the Future of Web Design",
    category: "Web Development",
    date: "January 20, 2025",
    heroImage: "/images/blogs/tailwind-hero.png",
    readingTime: "6 min",
    generalInfo: 
      "Tailwind CSS is revolutionizing how developers build modern, responsive websites. With utility-first styling and rapid prototyping, it's quickly becoming a favorite in the web development industry.",
    sections: [
      {
        id: "what-is-tailwind",
        subtitle: "What is Tailwind CSS?",
        image: "/images/blogs/tailwind-what.png",
        description: 
          "Tailwind CSS is a utility-first CSS framework that enables rapid UI development without writing custom CSS. Unlike traditional frameworks like Bootstrap, Tailwind provides low-level utility classes that help developers create highly customizable designs."
      },
      {
        id: "why-tailwind",
        subtitle: "Why Developers Love Tailwind CSS",
        image: "/images/blogs/tailwind-benefits.png",
        description: 
          "Tailwind allows for fast development, better design consistency, and reduced CSS file size. It also eliminates the need for writing lengthy CSS files, making it a game-changer for modern web development."
      },
      {
        id: "tailwind-setup",
        subtitle: "How to Get Started with Tailwind CSS",
        image: "/images/blogs/tailwind-setup.png",
        description: 
          "Getting started is easy. Install Tailwind via npm or a CDN, configure your Tailwind settings, and start applying utility classes directly to your HTML elements."
      }
    ],
    conclusion: 
      "Tailwind CSS simplifies styling and speeds up development. If you haven’t tried it yet, it’s time to integrate it into your next project!"
  },
  {
    title: "How to Build a Scalable MERN Stack Application",
    category: "Full Stack Development",
    date: "January 12, 2025",
    heroImage: "/images/blogs/mern-hero.png",
    readingTime: "8 min",
    generalInfo: 
      "The MERN stack (MongoDB, Express.js, React.js, and Node.js) is one of the most popular tech stacks for full-stack web development. In this guide, we’ll cover how to build a scalable MERN stack application from scratch.",
    sections: [
      {
        id: "mern-setup",
        subtitle: "Setting Up the MERN Environment",
        image: "/images/blogs/mern-setup.png",
        description: 
          "Start by installing Node.js and MongoDB. Set up your project folder with a backend and frontend directory. Use Express.js for backend routes and React for frontend UI."
      },
      {
        id: "mern-backend",
        subtitle: "Building the Backend with Express and MongoDB",
        image: "/images/blogs/mern-backend.png",
        description: 
          "Create a REST API using Express.js. Use Mongoose to connect and interact with MongoDB, defining models and schemas for structured data."
      },
      {
        id: "mern-frontend",
        subtitle: "Creating a Dynamic Frontend with React.js",
        image: "/images/blogs/mern-frontend.png",
        description: 
          "Develop reusable React components, manage state using Redux, and integrate API calls to fetch and display data dynamically."
      },
      {
        id: "mern-deployment",
        subtitle: "Deploying a MERN Stack Application",
        image: "/images/blogs/mern-deployment.png",
        description: 
          "Use services like Vercel for frontend hosting and Render for backend deployment. Ensure database security and API performance optimization."
      }
    ],
    conclusion: 
      "MERN stack development is powerful and flexible. With the right architecture and deployment strategies, you can build scalable applications for real-world use."
  },
  {
    title: "The Importance of SEO in Modern Websites",
    category: "Digital Marketing",
    date: "December 30, 2024",
    heroImage: "/images/blogs/seo-hero.png",
    readingTime: "5 min",
    generalInfo: 
      "SEO (Search Engine Optimization) is essential for driving organic traffic to your website. In this blog, we’ll explore why SEO is important and how you can improve your website’s ranking.",
    sections: [
      {
        id: "seo-basics",
        subtitle: "Understanding SEO Basics",
        image: "/images/blogs/seo-basics.png",
        description: 
          "SEO involves optimizing website content, improving page speed, and ensuring mobile-friendliness to rank higher on search engines."
      },
      {
        id: "seo-types",
        subtitle: "On-Page vs. Off-Page SEO",
        image: "/images/blogs/seo-types.png",
        description: 
          "On-page SEO includes optimizing content, meta tags, and keywords, while off-page SEO focuses on backlinks and social signals."
      },
      {
        id: "seo-best-practices",
        subtitle: "SEO Best Practices for 2025",
        image: "/images/blogs/seo-best-practices.png",
        description: 
          "Focus on user experience, core web vitals, and high-quality content. Use structured data and optimize for voice search to stay ahead."
      }
    ],
    conclusion: 
      "SEO is a long-term investment. Implementing the right strategies will help your website rank higher and attract more visitors over time."
  }
];

export default blogPosts;
