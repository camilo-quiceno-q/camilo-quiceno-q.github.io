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
        As a <strong>Software Engineer</strong> with a <strong>Master’s in Data Science</strong> and <strong>AWS certifications (Cloud & AI)</strong>, I specialize in designing and building scalable, data-driven backend solutions for large-scale distributed systems. I bridge the gap between high-performance software engineering, cloud infrastructure, and intelligent data systems.
        <br></br>
        <br></br>
        Currently, at <strong>Nu Colombia</strong>, I work in the Growth team (Upper Funnel Pack), engineering the core microservices for customer acquisition. I focus heavily on the <strong>'Member Get Member' (MGM)</strong> referral flow and building cutting-edge <strong>agentic architectures</strong> to deliver intelligent end-to-end solutions, collaborating with Product and Design teams to build frictionless, high-availability services that turn customer curiosity into action.
        <br></br>
        <br></br>
        Previously, at <strong>Talent.com</strong>, I played a key role in the migration of their core monolith to Go and TypeScript microservices deployed on AWS and Kubernetes. During this project, I integrated real-time monitoring with Prometheus and Grafana, and transformed unstructured job listings into valuable, structured data to enable new AI-driven capabilities.
        <br></br>
        <br></br>
        My earlier experience includes leading the <strong>CMF Plastic Team</strong> at Materialise, taking end-to-accountability for the quality and delivery of customized surgical guides, applying my background in Bioengineering to high-precision processes.
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
            "As a member of the Growth team (Upper Funnel Pack), I engineer the core microservices for customer acquisition, focusing heavily on the 'Member Get Member' (MGM) referral flow and building cutting-edge agentic architectures to deliver intelligent end-to-end solutions",
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
      background: "AWS Certified AI Practitioner",
      place: "Amazon Web Services (AWS)",
      completion: "2025"
    },
    {
      background: "AWS Certified Cloud Practitioner",
      place: "Amazon Web Services (AWS)",
      completion: "2025"
    },
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