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
  title: "Hi, I'm Stefon",
  subTitle: emoji(
    "Senior Developer for worldwide remote employment. Seven years of general expeirence with a specialization in Angular Frontend development and .NET Backend development deployed to cloud and on-premise environments using relational and NoSQL databases."
  ),
  resumeLink:
    "https://utfs.io/f/3ed09cae-0ea2-410d-9b6a-8dc5f49d1c27-f6dfs2.pdf", // Set to empty to hide the button
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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "",
  subTitle: "",
  skills: [
    emoji("⚡ [Artificial Intelligence] OpenAI, HuggingFace, Function Calling models"),
    emoji("⚡ [Architecture] Team Lead transforming Product Requirements into the Features and Abstractions and how they relate to each other. Creating the engineering plans including Sequence Diagrams and Entity Relationship Diagrams"),
    emoji("⚡ [Automations] X12 EDI and API Integrations"),
    emoji("⚡ [Languages] C#, TypeScript, SQL, Python, Rust, HTML, CSS"),
    emoji("⚡ [Frameworks] Angular and .NET WebAPI"),
    emoji("⚡ [Tools] Visual Studios, GIT, SQL Server Management Studio, SQL Server  Reporting  Services,   Report  Builder,   Crystal  Reports,   BizTalk  Server,  VS  Code,  IIS  Server,  GitHub,  cPanel,  WordPress,  JIRA,  BitBucket, Eraser.io, SignalR"),
    emoji("⚡ [Databases] SQL Server, MySQL, Firestore, and CosmosDB"),
    emoji("⚡ [Deployments] Azure Functions, IIS WebServer, Google Cloud Run, Firebase Hosting"),
    emoji("⚡ [OS] Windows Server, Debian, Ubuntu")
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
      schoolName: "York University",
      logo: require("./assets/images/yorku.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "2013 - 2014",
      desc: "Toronto, ON",
    },
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
      Stack: "C# .NET WebAPI",
      progressPercentage: "90%"
    },
    {
      Stack: "SQLServer",
      progressPercentage: "70%"
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
      companylogo: require("./assets/images/pplogo.jpg"),
      date: "Dec 2022 – Present",
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
      companylogo: require("./assets/images/dwslogo.png"),
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
      companylogo: require("./assets/images/gapplogo.png"),
      date: "2016 – 2018, 2020 to 2022",
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
