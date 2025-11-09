/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Stefon Alfaro",
  title: "Senior Fullstack Developer",
  title2:".NET, Angular, EDI Integration, Logistics Systems",
  subTitle: emoji(
    "With over 8 years of specialized experience in logistics and supply chain technology, I architect and build mission-critical systems that power modern commerce. From developing comprehensive warehouse management platforms to implementing complex EDI integrations and government compliance systems, I bridge the gap between business requirements and technical solutions. My expertise spans the full technology stack from legacy system migrations and custom API integrations to cutting-edge AI platforms with a proven track record of delivering zero-downtime solutions for high-volume operations. Whether it's automating cross-border customs processes, building real-time inventory systems, or leading development teams on enterprise software, I bring both deep technical knowledge and real-world business understanding to every project."
  ),
  resumeLink:
    "https://tor55ty39q.ufs.sh/f/VzFFdXTN6h2HtcXfA8EtTha34S6lipEKjPzVywXAHnWMDRdo", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/stefonalfaro",
  linkedin: "",
  gmail: "stefonalfaro@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  youtube:"https://www.youtube.com/@stefonalfaro4389",
  reddit:"https://www.reddit.com/user/StefonAlfaro3PLDev/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills and Specializations",
  subTitle: "I architect my systems with a separate frontend and backend. My frontend development is done with Angular and my backend development is done with the .NET WebAPI. For enterprise applications I use Entity Framework as the ORM to connect to either SQL Server or Postgres. I have experience deploying and managing both on-premises and cloud so in our CI/DI pipelines we will have Development and Production instances setup to deploy on branch merges.",
  skills: [
    {
      title: "Business Systems",
      description: "EDI X12 Integration, Logistics & Supply Chain, Warehouse Management, Transportation Management, Customs & Cross-Border Trade"
    },
    {
      title: "Backend Development",
      description: "C#, .NET WebAPI, Entity Framework, Azure Functions, AWS Lambda, SignalR Real-time Communication"
    },
    {
      title: "Frontend Development",
      description: "Angular, TypeScript, Responsive Web Design, Mobile-First Development"
    },
    {
      title: "System Integration",
      description: "BizTalk Server, API Development, custom Middlewares, Legacy System Migration, Government Compliance Systems (PARS/PAPS)"
    },
    {
      title: "Cloud & DevOps",
      description: "Azure (Functions, ServiceBus, CosmosDB, Docker), AWS (Lambda, Docker), IIS Deployment, Windows Server Administration"
    },
    {
      title: "Database Systems",
      description: "SQL Server, MySQL, CosmosDB, PostgreSQL, and Firebase. Database Performance Optimization, Custom Migration Scripts"
    },
    {
      title: "AI & Machine Learning",
      description: "OpenAI Integration, LangChain, Custom LLM Platforms, Document Processing, Python. I have built custom RAG systems giving LLMs access to knowledge bases using Vector Databases and Embedding models."
    },
    {
      title: "Android and iOS Apps",
      description: "I use the Cordova framework which allows my Angular code to be compiled into native Android .APKs and iOS .IPA files. This allows a single code base to deploy, sign, and publish Apps for both Google Play and Apple App Store. I have my own Google and Apple Developer Account and understand the business process you will need to go through."
    },
    {
      title: "Payment Processing",
      description: "I use Stripe for processing credit cards allowing you to process payments online and also setup recurring subscriptions. For eCommerce websites we use WooCommerce which integrates with Stripe and you can manage your products easily. I have done custom integrations with Stripe and understand the process of it well."
    },
    {
      title: "Business Formation and International Tax Strategies",
      description: "I have a US LCC, Canadian federal corporation, and United Kingdom Limited company. I understand the process foreign and domestic clients must go through when starting a new business along with the documentation and compliance required for opening business banks with instituions such as Mercury and Wise. For clients wishing to protect their identity I have experience using registered agents in states such as Wyoming which allow anonymous ownership, meaning you can still get your EIN number, DUNS number, and open Google and Apple developer accounts while your personal information remains protected."
    }
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon https://fontawesome.com/icons?d=gatypellery */

  softwareSkills: [
    {
      skillName: "Angular",
      imgUrl: require("./assets/images/angular.png")
    },
    {
      skillName: "TypeScript",
      imgUrl: require("./assets/images/ts.png")
    },
    {
      skillName: "SQL Server",
      imgUrl: require("./assets/images/sqlserver.png")
    },
    {
      skillName: "Azure",
      imgUrl: require("./assets/images/azure.png")
    },
    {
      skillName: "AWS",
      imgUrl: require("./assets/images/aws2.png")
    },
    {
      skillName: "Windows Server",
      imgUrl: require("./assets/images/windows-server.png")
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fa fa-network-wired"
    },
    {
      skillName: "Firebase",
      imgUrl: require("./assets/images/firebase.png")
    },
    {
      skillName: "Docker",
      imgUrl: require("./assets/images/docker2.png")
    },
    {
      skillName: ".NET",
      imgUrl: require("./assets/images/dotnet.png")
    },
    {
      skillName: "EDI X12",
      imgUrl: require("./assets/images/x12.png")
    },
    {
      skillName: "Android Apps",
      imgUrl: require("./assets/images/googleplay.png")
    },
    {
      skillName: "iOS Apps",
      imgUrl: require("./assets/images/iOSApps.png")
    },
    {
      skillName: "Stripe",
      imgUrl: require("./assets/images/stripe.png")
    },
    {
      skillName: "Quickbooks",
      imgUrl: require("./assets/images/qb.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Queen's University",
      logo: require("./assets/images/queenslogo.png"),
      subHeader: "Bachelor Computer Science",
      duration: "2012 - 2013",
      desc: "Kingston, ON",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend (.NET, C#, Web API)",
      progressPercentage: "92%"
    },
    {
      Stack: "Frontend (Angular, TypeScript)",
      progressPercentage: "85%"
    },
    {
      Stack: "Angular Web Application Frontend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Team Leader",
      company: "Pioneering Programmers",
      companylogo: require("./assets/images/pp.png"),
      date: "Dec 2022 – July 2024",
      desc: "",
      descBullets: [
        "Led a backend team of 3 junior developers, overseeing recruitment, interviewing, mentoring, and technical guidance in an Agile/SCRUM environment.",
        "Coordinated sprint deliverables, wrote user stories, and ensured alignment with business requirements.",
        "Managed backend development for a high-profile Kaseya MSP software called audIT.",
        "Designed and implemented a custom AI platform for business document interaction, delivering innovative automation solutions."
      ]
    },
    {
      role: "Systems Analyst",
      company: "DWS Logistics Inc.",
      companylogo: require("./assets/images/dws.jpg"),
      date: "2018 – 2020",
      desc: "",
      descBullets:[
        "Reporting to the Vice President of Eastern Canada I managed four warehouses totaling 500,000 sqf.",
        "Centralized all the IT systems and documented the complex setup and network.",
        "Developed custom software integrations. Looked after the firewalls and all security."
      ]
    },
    {
      role: "Fullstack Developer",
      company: "GAPP Express Inc.",
      companylogo: require("./assets/images/gapp.jpg"),
      date: "2016 – 2018, 2020 - 2022, 2025 - Present",
      descBullets: [
        "Reporting to the President, managed comprehensive IT infrastructure of a 40,000 sqft warehouse, overseeing all network and computer systems including Active Directory and Windows servers.",
        "Developed a custom Warehouse Management System while mobile scanners, streamlining operations.",
        "Implemented X12 EDI integrations and participated in meetings with customers and trading partners, showcasing technical expertise and communication skills. Orchestrated and mapped inbound EDI X12 940, and outbound 945s and 856s for trading partners such as WalMart and SPS Commerce."
      ]
    },
    {
      role: "Web Developer",
      company: "Simcoe Web Solutions",
      companylogo: require("./assets/images/SimcoeWebSolutionsSquareL.png"),
      date: "2014 - 2016",
      descBullets: [
        "Designed and developed websites for small businesses either a custom HTML5 and CSS3 or WordPress based sites.",
        "Used WooCommerce to setup eCommerce sites and integrate with Stripe for payment processing.",
        "Manage infrastructure through WHM/cPanel and DNS through CloudFlare.",
        "Client facing sales position doing cold out reach to small businesses without websites."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Professional Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/audit.webp"),
      projectName: "audIT by Kaseya",
      projectDesc: "In preparation for the announcement of Kaseya’s acquisition of audIT, I lead the Backend Team as we implemented many features and integrations in this sales presentation software for MSPs with thousands of active users.",
      footerLink: [
        {
          name: "Learn about audIT by Kaseya",
          url: "https://www.auditforit.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eava.webp"),
      projectName: "EAVA AI",
      projectDesc: "AI document management and interaction platform using open source foundational LLM and Embedding models.",
      footerLink: [
        {
          name: "Learn about EAVA",
          url: "https://get.eava.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/gappwms.jpg"),
      projectName: "GAPP Warehouse Management System",
      projectDesc: "Developed a comprehensive warehouse management system. Managed inventory, sales and purchase orders, and implemented mobile barcode scanning, XML import/export, 2Ship shipping and rates integration, and BizTalk EDI integration for X12 940 and 856.",
      footerLink: [
        {
          name: "Learn about GAPP WMS",
          url: "https://erp.gappexpress.com/wms/"
        }
      ]
    },
    {
      image: require("./assets/images/TLS.jpg"),
      projectName: "TLS Transportation Management System",
      projectDesc: "Created an end-to-end transportation management system. Handled billing, waybills, manifests, and consolidations for third-party logistics, including shipping labels, invoices, bill of ladings, Fedex shipping and rates integration, and Quickbooks invoice integration.",
      footerLink: [
        {
          name: "Learn about TLS",
          url: "https://erp.gappexpress.com/tms/"
        }
      ]
    },
    {
      image: require("./assets/images/eManifest.png"),
      projectName: "Eshpre Global Customs Broker eManifest System",
      projectDesc: "Developed automated eManifest submission system for customs broker to comply with new Canada Border Services Agency and US Customs requirements. Integrated PARS (Pre-Arrival Review System) and PAPS (Pre-Arrival Processing System) APIs to enable electronic pre-clearance of cross-border shipments, replacing manual border processes.",
      footerLink: [

      ]
    },
    {
      image: require("./assets/images/tlsv3.jpg"),
      projectName: "Stonegate Logistics Legacy ERP Data Migration",
      projectDesc: "Architected and executed complete migration of transportation management system from legacy FoxPro database to modern SQL Server infrastructure. Developed custom data transformation scripts, ensured zero data loss during cutover, and maintained business operations continuity throughout multi-phase migration process.",
      footerLink: [

      ]
    },
    {
      image: require("./assets/images/edi_logo.jpg"),
      projectName: "EDI X12 for GAPP Warehouse",
      projectDesc: "Using BizTalk Server to fully automated order processing and shipment notifications between GAPP warehouse operations and major retail clients including Walmart. The system processes inbound EDI 940 warehouse shipping orders, automatically transforming them into warehouse pick orders with real time inventory allocation, eliminating manual data entry and reducing processing time from hours to minutes. Upon shipment completion, the system automatically generates and transmits EDI 945 warehouse shipping advice confirmations to clients and EDI 856 advance ship notices to both customers and their upstream suppliers.",
      footerLink: [

      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Courses and Certifications"),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Harvard - Fundamentals of TinyML",
      subtitle:
        "TinyML is at the intersection of embedded Machine Learning (ML) applications, algorithms, hardware, and software. TinyML differs from mainstream machine learning (e.g., server and cloud) in that it requires not only software expertise, but also embedded-hardware expertise.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "Havard Logo",
      footerLink: [
        {
          name: "HavardX TinyML1 - Completed October 29th, 2023",
          url: "https://www.harvardonline.harvard.edu/course/fundamentals-tinyml"
        }
      ]
    },
    {
      title: "Kaggle - Advanced SQL",
      subtitle:
        "Take your SQL skills to the next level.",
      image: require("./assets/images/kaggle-logo.png"),
      imageAlt: "Havard Logo",
      footerLink: [
        {
          name: "Issued by Alexis Cook on August 11, 2024",
          url: "https://utfs.io/f/8dc6ec9c-1d74-4507-8478-44db4ed411e5-62ymtb.png"
        }
      ]
    },
    {
      title: "Kaggle - Python",
      subtitle:
        "Learn the most important language for data science.",
      image: require("./assets/images/kaggle-logo.png"),
      imageAlt: "Havard Logo",
      footerLink: [
        {
          name: "Issued by Colin Morris on August 11, 2024",
          url: "https://utfs.io/f/ca516c7c-0555-488e-920f-b21bb1ca2e4b-17bn6b.png"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Personal Projects",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "YouTube",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "Meet Stefon Alfaro",
      subtitle: "Introduction to Stefon Alfaro",
      slides_url: "",
      event_url: "https://www.youtube.com/watch?v=AWINxI0xUHI"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Hire Me"),
  subtitle:
    "My rate for hourly work is $28.50usd or $40.00cad/hr. If you have specific projects such as wanting an eCommerce website, or implementing EDI X12 for a new trading partner I can give a project total.",
  email_address: "stefonalfaro@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
