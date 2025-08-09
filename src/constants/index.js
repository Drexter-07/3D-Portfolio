import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: " Gen AI Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Technical Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud Training Intern",
      company_name: "Future Ready Talent (Microsoft)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2021 - Feb 2022",
      points: [
        "Exploring diverse Azure technologies, including:",
        "Azure Bot Service, Web App Bot, QnA Maker, API App Services",
        "Created a Disease Chat Assistant Bot",
        "Organized and integrated Data-sets into a Knowledge Base for QnA Maker training.",
        "Crafted and executed HTTP Requests via Postman",
        "Seamless Deployment of the Chatbot on Telegram using Botfather",
        "Ensured continuous and effective ChatBot operation",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "High Radius",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - April 2022",
      points: [
        "Engineered an AI-powered B2B invoice management solution in the fintech sector.",
        "Using Machine Learning models for accurate payment date prediction upon invoice creation.",
        "Facilitated seamless payment retrieval from clients with overdue invoices.",
        "Orchestrated proactive reminders and follow-ups to ensure timely payments.",
        "Tools Used: Machine Learning, ReactJS, HTML, CSS, JDBC, Java, and Servlets",
      ],
    },
    {
      title: "Application Development Intern",
      company_name: "Futurus",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - July 2023",
      points: [
        "Played a pivotal role in constructing an innovative interview app that harnessed cutting-edge technologies, including ChatGPT models tailored for IELTS and other significant exams.",
        "Spearheaded the creation of the speech-to-text functionality, enhancing user experience and accessibility.",
        "Integral contribution to seamlessly integrating GPT into the interview bot, amplifying user engagement and interaction.",
        "Utilized an arsenal of tools encompassing Android Studio, Kotlin, and OpenAI's ChatGPT and API.",
      ],
    },
    {
      title: "AI Training Freelancer",
      company_name: "Scale AI",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Orchestrated comprehensive AI training by formulating intricate problem-solving methodologies and offering elucidative solutions and coding problem editorials.",
        "Diligently reviewed and optimized existing code, elevating its quality and efficiency.",
        "Nurtured AI bot's capabilities by fine-tuning its responses, offering diverse sample prompts, and meticulously crafting solutions across an array of computer science domains.",
        "Contributed to fostering a more proficient and knowledgeable AI model through hands-on training and refining its interactive capabilities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Winner (2nd Position) at HACKMOREISH (devfolio) 2022 Hackathon. A National Level Hackathon in India",
      name: "Devfolio",
      
      company: "Hackathon Platform and Community",
      image: "https://media.licdn.com/dms/image/C510BAQGV8mUXTdtlYA/company-logo_200_200/0/1545112612695?e=1699488000&v=beta&t=qleSpj-O84VU9UNEQReFE19MlqobY7vRF8Gj9SCeqPg",
    },
    {
      testimonial:
        "Runner up in IPFS/Filecoin category at the Gitcoin L2 Rollathon 2022 hackathon, competing with teams and professionals across the world.",
      name: "Gitcoin",
      
      company: "Incentivizing Open Innovation",
      image: "https://cryptologos.cc/logos/gitcoin-gtc-logo.png?v=026",
    },
    {
      testimonial:
        "Successfully Completed #30daysofgooglecloud challenge, consisting of various quests and tasks competition.",
      name: "GCP",
      
      company: "Cloud Infrastructure Services",
      image: "https://media.licdn.com/dms/image/C560BAQFIFLR7jxm2lg/company-logo_200_200/0/1600274556510?e=1699488000&v=beta&t=jEVtb3fXicv9lT9ZeRAuPKW9_rN8QrKchAuQJ9wTep4",
    },
    {
      testimonial:
        "Successfully Achieved a Micro Grant of $5000 for our Blockchain Project: SkillBlock from Protocol Labs.",
      name: "Protocol Labs",
      
      company: "Decentralized storage solutions",
      image: "https://media.licdn.com/dms/image/C4D0BAQH2qS_5e-9HPA/company-logo_200_200/0/1590695202006?e=1699488000&v=beta&t=Jv8Yop4nsK1o4fkViJomDvbP_vnGVJwm065frCJZDmE",
    },
    {
      testimonial:
        "Received accolades and prizes from renowned companies such as Devpost, Chainlink Labs, and Microsoft Azure, recognizing my consistent dedication to participating in diverse events, hackathons, and online cohorts.",
      
      name: "Devpost",
      
      company: "Hackathons' premier project portal",
      image: "https://img.icons8.com/?size=512&id=38557&format=png",
    },
  ];
  
  const projects = [
    {
      name: "Decentralized AirBNB",
      description:
        "Decentralised alternative for AirBNB. Smart contract to store the details of rentals and handle purchase of any new bookings on the blockchain.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "Google Maps API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Drexter-07/AIRBNB-Clone",
    },
    {
      name: "SkillBlock",
      description:
        "A DAO which helps both the public to search and hire nearest laborers/helpers and also the workmen/helpers to register themselves on the site to get rewarded for their service.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ipfs",
          color: "green-text-gradient",
        },
        {
          name: "solidity",
          color: "pink-text-gradient",
        },
        {
          name: "polygon",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Drexter-07/SkillBlock",
    },
    {
      name: "3D-Portfolio",
      description:
        "3D developer portfolio showcasing my skills in Software Engineering using technologies for immersive graphics, TailwindCSS for styling and Framer Motion for animations.",
      tags: [
        {
          name: "3JS",
          color: "blue-text-gradient",
        },
        {
          name: "react three fiber",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://3d-portfolio-sahil.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };