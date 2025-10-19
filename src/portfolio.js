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
  gmail: "",
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
  title: "",
  subTitle: "",
  skills: [
    emoji("⚡ [Business Systems] EDI X12 Integration, Logistics & Supply Chain, Warehouse Management, Transportation Management, Customs & Cross-Border Trade"),
    emoji("⚡ [Backend Development] C#, .NET WebAPI, .NET Core, Entity Framework, Azure Functions, SignalR Real-time Communication"),
    emoji("⚡ [Frontend Development] Angular, TypeScript, Responsive Web Design, Mobile-First Development"),
    emoji("⚡ [System Integration] BizTalk Server, API Development, Legacy System Migration, Government Compliance Systems (PARS/PAPS)"),
    emoji("⚡ [Cloud & DevOps] Azure (Functions, ServiceBus, CosmosDB), Docker, IIS Deployment, Windows Server Administration"),
    emoji("⚡ [Database Systems] SQL Server, MySQL, CosmosDB, PostgreSQL, Database Performance Optimization, Custom Migration Scripts"),
    emoji("⚡ [AI & Machine Learning] OpenAI Integration, LangChain, Custom LLM Platforms, Document Processing, Python, Rust"),
    emoji("⚡ [Architecture & Leadership] Technical Team Leadership, System Architecture Design, Enterprise Software Planning, Agile/SCRUM Methodologies"),
    emoji("⚡ [Development Tools] Visual Studio, Git, JIRA, SQL Server Management Studio, Crystal Reports, SSRS, VS Code")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gatypellery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Windows Server",
      fontAwesomeClassname: "fa fa-server"
    },
    {
      skillName: "Networking",
      fontAwesomeClassname: "fa fa-network-wired"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: ".NET",
      fontAwesomeClassname: "fab fa-dotnet"
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
      role: "Backend Team Leader (1.5yr)",
      company: "Pioneering Programmers",
      companylogo: require("./assets/images/pp.png"),
      date: "Dec 2022 – July 2024",
      desc: "",
      descBullets: [
        "Contract  to  Kaseya  for  development  and  support  of  major  MSP  software.",
        "Many  environments  setup  with  CI/ID  and TDD.",
        "The  backend  is  a  .NET  WebAPI  made  in  Azure  Functions  using  CosmosDB  (NoSQL)."
      ]
    },
    {
      role: "Systems Analyst (2yr)",
      company: "DWS",
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
      role: "Fullstack Developer (4yr)",
      company: "GAPP",
      companylogo: require("./assets/images/gapp.jpg"),
      date: "2016 – 2018, 2020 - 2022, 2025 - Present",
      desc: "Reporting  to  the  President  I  managed  a  40,000sqft  warehouse  being  responsible  for  all  the  network  and computer  systems  including  servers,  domains,  websites,  security  cameras,  client  integrations,  building access  control,  email  accounts,  software  licenses,  file  share,  printers,  network,  routers,  switches,  and access  points.  Developed  a  custom  coded  Warehouse  Management  System."
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
  title: emoji("Courses and Certifications 🏆 "),
  subtitle:
    "Recent Courses and Certifications that I have done!",

  achievementsCards: [
    {
      title: "Fundamentals of TinyML",
      subtitle:
        "TinyML is at the intersection of embedded Machine Learning (ML) applications, algorithms, hardware, and software. TinyML differs from mainstream machine learning (e.g., server and cloud) in that it requires not only software expertise, but also embedded-hardware expertise.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "Havard Logo",
      footerLink: [
        {
          name: "HavardX TinyML1",
          url: "https://www.harvardonline.harvard.edu/course/fundamentals-tinyml"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
  title: emoji("Contact Me"),
  subtitle:
    "",
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
