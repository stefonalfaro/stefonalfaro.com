/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
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
    "I develop software to preserve human cognition. I will integrate into your existing workflows. I look for activities where AI is demonstrably superior to humans. I look for tasks that can be shortened by automation. I create solutions that proxy business value and cognitive labor."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I am Full Stack Software Engineer building enterprise grade applications with C#, Angular, and some other libraries and frameworks. I have worked with Third-Party Logistics, Warehousing, Transportation, and Software Development companies.",
  skills: [
    emoji("⚡ [Artificial Intelligence] OpenAI GPT4 and HuggingFace"),
    emoji("⚡ [Software Architecture] Team Lead transforming Product Requirements into the Features and Abstractions and how they relate to each other. Creating the engineering plans including Sequence Diagrams and Entity Relationship Diagrams"),
    emoji("⚡ [Business Automations] X12 EDI and API Integrations"),
    emoji("⚡ [Languages and Frameworks] C#, Angular, SQL, .NET WebAPI, BizTalk, SignalR, Azure Cloud, Windows Servers, Crystal Reports, Report Builder"),
    emoji("⚡ [Tools] Visual Studios, GIT, SQL Server Management Studio, SQL Server  Reporting  Services,   Report  Builder,   Crystal  Reports,   BizTalk  Server,  VS  Code,  IIS  Server,  GitHub,  cPanel,  WordPress,  JIRA,  BitBucket, Eraser.io"),
    emoji("⚡ [Databases] SQL Server, MySQL, Firestore, and CosmosDB")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gatypellery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
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
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
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
      skillName: "Cloudflare",
      fontAwesomeClassname: "fab fa-cloudflare"
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
      logo: require("./assets/images/yorkulogo.jpg"),
      subHeader: "Bachelor of Computer Science",
      duration: "September 2013 - April 2014",
      desc: "Toronto, ON",
    },
    {
      schoolName: "Queen's University",
      logo: require("./assets/images/queenslogo.png"),
      subHeader: "Bachelor Computer Science",
      duration: "September 2012 - April 2013",
      desc: "Kingston, ON",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Physical Windows Servers",
      progressPercentage: "100%"
    },
    {
      Stack: "Azure Cloud",
      progressPercentage: "75%"
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
      company: "PP",
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
      role: "Systems Analyst",
      company: "DWS",
      companylogo: require("./assets/images/dwslogo.jpg"),
      date: "Mar 2018 – Apr 2020",
      desc: "",
      descBullets:[
        "Reporting to the Vice President of Eastern Canada I managed four warehouses totaling 500,000 sqf.",
        "Centralized all the IT systems and documented the complex setup and network.",
        "Developed custom software integrations. Looked after the firewalls and all security."
      ]
    },
    {
      role: "IT Manager",
      company: "GAPP",
      companylogo: require("./assets/images/gapplogo.jpg"),
      date: "Mar 2016 – Dec 2018",
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Research",
  subtitle:
    "I believe that AI, with its limitless potential and adaptability, can transcend the barriers that have long hindered human progress, leading to unprecedented increases in the quality of life for all. I devote significant time and effort to learning, exploring, and contributing to this exciting field, actively engaging in research that resonates with the hope of a brighter tomorrow.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.stefonalfaro.com/2023/08/05/exploring-voice-to-voice-communication-with-large-language-models/",
      title: "Exploring Voice to Voice Communication with AI",
      description:
        "The goal was to create a system that takes voice input, converts it into text, feeds it into a tokenized LLM, and then translates the text response back into voice."
    },
    {
      url: "https://blog.stefonalfaro.com/2023/08/05/bridging-the-digital-divide-a-journey-from-text-to-physical-interaction/",
      title: "Enabling Interaction with the Physical World",
      description:
        "Proof of concept that allows AI to physically interact with the real world. Here’s how it was achieved."
    },
    {
      url: "https://blog.stefonalfaro.com/2023/08/06/exploring-azure-vision-giving-ai-the-eyes-to-see-the-real-world/",
      title: "Giving AI the Eyes to See the Real World",
      description:
        "I embarked on an enlightening journey to allow my AI to not only see the real world but to interpret and understand it as well."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
    "Discuss a project or just want to say hi? My Inbox is open.",
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
