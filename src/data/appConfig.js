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
        With nearly 4 years of experience as a <strong>Software Engineer</strong>, a <strong>Master's in Data Science</strong>, and <strong>AWS certifications in Cloud and AI</strong>, I specialize in architecting highly available, scalable backend systems and leading complex platform modernizations.
        <br></br>
        <br></br>
        Currently at <strong>Nu (Growth BU)</strong>, I engineer core services that transform prospects into customers and scale <strong>Member-Get-Member (MGM)</strong> initiatives for millions of users. I focus on building resilient, frictionless architectures for high-scale systems while architecting custom <strong>AI agents</strong> to optimize the software development lifecycle. Collaborating across Marketing, Design, Product, and Engineering, I deliver robust, end-to-end solutions.
        <br></br>
        <br></br>
        Previously, I played a key role in migrating a high-traffic platform (<strong>Talent.com</strong>) from legacy PHP to a modern microservices architecture using <strong>Go, TypeScript, Kubernetes, and AWS</strong>. My professional trajectory is rooted in my background as a <strong>Design & Quality Team Leader</strong> at <strong>Materialise</strong>, where I honed my skills in cross-functional leadership, KPI management, and driving operational efficiency under strict quality standards.
        <br></br>
        <br></br>
        Driven by the intersection of massive-scale distributed systems and practical AI innovation.
      </>
    )
  },
  companies: [
    {
      name: "Nu Colombia",
      positions: [
        {
          title: "Software Engineer",
          date: "March 2025 - Present",
          tasks: [
            "Operate as an integral Software Engineer within the Growth Business Unit, adopting Nu’s culture of end-to-end feature ownership without traditional frontend or backend silos. Drive the first-contact user journey by architecting frictionless, high-scale systems for financial product selection and scaling critical demand generation channels, including the Member-Get-Member (MGM) referral platform.",
            "Architect and maintain resilient solutions within a large-scale distributed environment, championing architectural best practices and clean code principles to guarantee long-term maintainability.",
            "Own and scale the Member-Get-Member (MGM) referral infrastructure, engineering high-throughput, secure backend logic to process viral growth loops and user rewards for millions of prospects.",
            "Leverage cutting-edge AI agents and skills across all phases of the software development lifecycle to optimize engineering workflows and maximize code quality.",
            "Collaborate closely across Marketing, Design, Product, and Engineering teams to rapidly design, iterate, and deploy end-to-end user acquisition funnels."
          ]
        }
      ]
    },
    {
      name: "Talent.com",
      positions: [
        {
          title: "Backend Developer",
          date: "November 2022 - March 2025",
          tasks: [
            "Migrated Talent.com’s website from PHP to a modern microservices architecture using Go and TypeScript, deployed on Kubernetes and AWS, enabling AI-driven capabilities and better scalability.",
            "Integrated real-time monitoring using Prometheus and Grafana to ensure platform stability, performance, and optimized resource utilization.",
            "Researched and tested new methodologies for capturing job attributes, refining data collection processes for greater precision and performance.",
            "Implemented continuous improvements and optimizations to data extraction scripts, enhancing efficiency, accuracy, and overall data quality.",
            "Developed a unified data platform to transform unstructured job listings into valuable, structured data, improving platform functionality and user experience across Talent.com."
          ]
        }
      ]
    },
    {
      name: "Materialise",
      positions: [
        {
          title: "Design & Quality Team Leader",
          date: "January 2017 - November 2022",
          tasks: [
            "Lead the Plastic Design Team, overseeing service quality, timely delivery, and cost-efficiency.",
            "Analyze and present key performance indicators (KPIs) to track team progress and success.",
            "Drive process improvements and enhance operational efficiency through proactive management."
          ]
        },
        {
          title: "Designer & Quality Engineer",
          date: "January 2017 - September 2021",
          tasks: [
            "Audit the quality of designs, ensuring they meet the required standards for accuracy and functionality.",
            "Design customized surgical guides for orthopedic surgeons based on personalized 3D bone models."
          ]
        }
      ]
    }
  ],
  education: [
    {
      background: "AWS Certified AI Practitioner",
      place: "Amazon Web Services",
      completion: "2026"
    },
    {
      background: "AWS Certified Cloud Practitioner",
      place: "Amazon Web Services",
      completion: "2026"
    },
    {
      background: "Master of Science in Data Science",
      place: "University of Aberdeen",
      completion: "November 2024"
    },
    {
      background: "Bachelor's in Biomedical Engineering",
      place: "University of Antioquia",
      completion: "November 2016"
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
        icon: "📞",
        text: "+57 319 249 44 03",
        href: "tel:+573192494403",
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