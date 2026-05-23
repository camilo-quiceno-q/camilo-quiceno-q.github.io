import heroBackground from '../assets/images/hero/hero.jpg';
import profilePicture from '../assets/images/description/profile.jpg';

export const appConfig = {
  hero: {
    emoji: '👋',
    title1: 'CQQ - Camilo Quiceno Quintero',
    title1Mobile: (<><br></br>CQQ <br></br> Camilo Quiceno Quintero <br></br></>),
    title2: '💻 🟪 Data-Powered Software Engineer | 🎓 MSc Data Science',
    title2Mobile: (<><br></br>💻 🟪 Data-Powered Software Engineer <br></br> 🎓 MSc Data Science <br></br><br></br></>),
    title3: 'Nu Colombia',
    heroText: '💻 🟪 Data-Powered Software Engineer | 🎓 MSc Data Science',
    backgroundImage: heroBackground,
  },
  about: {
    title: '- About -',
  },
  description: {
    image: profilePicture,
    description: (
      <>
        As a <strong>Software Engineer</strong> with over 3 years of experience and a <strong>Master's in Data Science</strong>, I specialize in designing and building scalable, data-driven solutions for large-scale distributed systems.
        <br></br>
        <br></br>
        Currently, at <strong>Nu</strong>, I apply my expertise in microservices to the FinTech sector. As part of the Upper Funnel Pack, my focus is on transforming customer curiosity into action. I collaborate with Product and Design teams to build and enhance the services that guide customers seamlessly through their journey, from their first interaction to product selection, ultimately empowering them to make informed financial decisions.
        <br></br>
        <br></br>
        Previously, at <strong>Talent.com</strong>, I played a key role in the full migration of their website from a PHP monolith to a modern microservices architecture using Go and TypeScript, deployed on Kubernetes and AWS. During this project, I transformed unstructured job listings into valuable, structured data and integrated real-time monitoring with Prometheus and Grafana to ensure optimal performance. This migration significantly improved scalability and set the foundation for new AI-driven capabilities.
        <br></br>
        <br></br>
        My earlier experience includes leading the <strong>Plastic Design Team</strong> at Materialise, where I focused on quality assurance for customized surgical guides to ensure the highest standards of precision.
      </>
    )
  },
  companies: [
    {
      name: "Nu Colombia",
      positions: [
        {
          title: "Software Engineer",
          date: "Mar 2025 - Present",
          tasks: [
            "As a member of the Upper Funnel Pack, my role is to engineer the core services that guide customers through their initial journey. Our team's mission is to transform curiosity into action by designing and building a frictionless and intuitive architecture for selecting financial products",
            "Collaborate in an agile environment with Product, Design, and Engineering teams to design and implement robust, end-to-end solutions for new user experiences and demand generation channels",
            "Drive the adoption of software engineering principles and architectural best practices to ensure a highly available and resilient platform",
            "Architect, build, and maintain scalable microservices that power the customer journey, from initial interaction to product selection",
            "Engineer solutions within a large-scale distributed system, focusing on system design, performance, and long-term maintainability"
          ]
        }
      ]
    },
    {
      name: "Talent.com",
      positions: [
        {
          title: "Back-end Developer",
          date: "Nov 2022 - Feb 2025",
          tasks: [
            "Migrate Talent.com's website from PHP to a modern microservices architecture using Go and TypeScript, deployed on Kubernetes and AWS, enabling AI-driven capabilities and better scalability",
            "Integrated real-time monitoring using Prometheus and Grafana to ensure platform stability, performance, and optimized resource utilization",
            "Researched and tested new methodologies for capturing job attributes, refining data collection processes for greater precision and performance",
            "Implemented continuous improvements and optimizations to data extraction scripts, enhancing efficiency, accuracy, and overall data quality",
            "Developed a unified data platform to transform unstructured job listings into valuable, structured data, improving platform functionality and user experience across Talent.com"
          ]
        }
      ]
    },
    {
      name: "Materialise",
      positions: [
        {
          title: "Team Leader",
          date: "Sep 2021 - Nov 2022",
          tasks: [
            "Hold the end-accountability for the quality, timely delivery, and cost-efficiency of all services performed in the CMF - MatCol Plastic Team",
            "Calculate, Analyze & Present the Key Performance Indicators of the Team",
            "Take a pro-active approach to improve the processes, services and operational efficiency",
            "Manage team motivation and resolve conflicts"
          ]
        },
        {
          title: "Trainer & Technical Leader",
          date: "Jan 2021 - Sep 2021",
          tasks: [
            "Provide trainings to newcomers",
            "Provide intra-office trainings",
            "Support the team resolving all the technical questions",
            "Quality Engineer Tasks"
          ]
        },
        {
          title: "Quality Engineer",
          date: "Jan 2019 - Jan 2021",
          tasks: [
            "Checked the quality of customized surgical guides for use by orthopedic surgeons during actual surgeries",
            "Continue with Conversion & Designer Engineer Tasks"
          ]
        },
        {
          title: "Conversion & Designer Engineer",
          date: "Jan 2018 - Jan 2019",
          tasks: [
            "Utilized Materialise software to convert 2D medical images into precise 3D bone models",
            "Conducted pre-surgery planning using 3D bone models to enhance surgical precision",
            "Designed and crafted customized surgical guides for orthopedic surgeons"
          ]
        }
      ]
    }
  ],
  education: [
    {
      background: "MSc Data Science",
      place: "University of Aberdeen",
      completion: "2024"
    },
    {
      background: "Bachelor's Degree in Bioengineering",
      place: "University of Antioquia",
      completion: "2016"
    },
    {
      background: "High School",
      place: "Normal Superior Copacabana",
      completion: "2009"
    }
  ],
  contact: {
    title: "Shall We Get Started?",
    buttons: [
      {
        icon: "📩",
        text: "Email me",
        href: "mailto:camilo.quiceno.q@gmail.com",
        isClickable: true
      },
      {
        icon: "🔗",
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/camiloqq",
        isClickable: true
      },
      {
        icon: "💻",
        text: "GitHub", 
        href: "https://github.com/Camilo-Quiceno",
        isClickable: true
      },
      {
        icon: "📍",
        text: "Medellín, Colombia",
        href: "https://maps.app.goo.gl/hr3ZabntZ7pX3axUA",
        isClickable: true
      }
    ]
  }
}; 