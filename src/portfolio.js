/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Erick Winata Portfolio",
  description:
    "A passionate Web Developer dedicated to building end-to-end digital solutions. I thrive on developing scalable and sustainable systems that drive efficiency and create tangible business impact.",
  og: {
    title: "Erick Winata Portfolio",
    type: "website",
    url: "https://erickwinz30.github.io",
  },
};

//Home Page
const greeting = {
  title: "Erick Winata",
  logo_name: "ErickWinata",
  nickname: "baechu",
  subTitle:
    "A passionate Web Developer dedicated to building end-to-end digital solutions. I thrive on developing scalable and sustainable systems that drive efficiency and create tangible business impact.",
  resumeLink:
    "https://drive.google.com/file/d/1S4Nhq4zRy-Ag46TPCSUfBroKRde5Qg31/view?usp=drive_link",
  portfolio_repository: "https://github.com/erickwinz30",
  githubProfile: "https://github.com/erickwinz30",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/erickwinz30",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/erick-winata-b59581235/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:erickwinz1008@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/erickwinz30/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML5, CSS3, and JavaScript",
        "⚡ Developing modern web applications using VueJS framework",
        "⚡ Creating robust backend applications with PHP and Laravel framework",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "VueJS",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PNPM",
          fontAwesomeClassname: "simple-icons:pnpm",
          style: {
            color: "#F69220",
          },
        },
        {
          skillName: "Inertia.js",
          fontAwesomeClassname: "simple-icons:inertia",
          style: {
            color: "#9553E9",
          },
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Dicoding Indonesia",
      imageSrc: "dicoding_logo.jpeg",
      style: {
        color: "#2441A8",
      },
      profileLink: "https://www.dicoding.com",
    },
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universitas Dinamika (STIKOM Surabaya)",
      subtitle: "S.Kom. or Bachelor of Computer Science",
      logo_path: "dinamika_logo.png",
      alt_name: "Universitas Dinamika (STIKOM Surabaya)",
      duration: "2020-2025",
      descriptions: [
        "⚡ I have studied core Information Systems subjects including Database Management Systems, Systems Analysis & Design, Business Process Management, and IT Project Management.",
        "⚡ Gained expertise in web development technologies (HTML, CSS, JavaScript, PHP), framework development (Laravel, Vue.js), and enterprise system integration.",
        "⚡ Learned about basic Enterprise Resource Planning (ERP), Business Intelligence, Data Analytics, and Information Systems Strategy for organizational digital transformation.",
      ],
      website_link: "https://www.dinamika.ac.id/",
    },
  ],
};

const nonEducations = {
  nonEducations: [
    {
      title: "Dicoding Indonesia",
      subtitle: "Front-End & Back-End Web",
      logo_path: "dicoding_logo.jpeg",
      alt_name: "Dicoding Indonesia",
      duration: "2023",
      descriptions: [
        "⚡ Participants of MSIB Batch 4 program at Dicoding Indonesia",
        "⚡ Learn basic programming such as algorithm logic, Git, Javascript, nodeJS, and RestfulAPI.",
        "⚡ Created an application for end project called Calculus, a calorie tracking application.",
      ],
      website_link: "https://www.dicoding.com",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Front-End & Back-End Web",
      // subtitle: "- Andrew Ng",
      logo_path: "dicoding_logo.jpeg",
      certificate_link:
        "https://www.linkedin.com/in/erick-winata-b59581235/overlay/experience/2634612945/multiple-media-viewer/?profileId=ACoAADqjoTUBA-67d9soimuJuXpFJnDxgLSNGo0&treasuryMediaId=1746752617075",
      alt_name: "Dicoding Indonesia",
      color_code: "#8C151599",
    },
    {
      title: "MongoDB for SQL Experts",
      // subtitle: "- Andrew Ng",
      // logo_path: "deeplearning_ai_logo.png",
      iconifyClassname: "simple-icons:mongodb", // Gunakan ini sebagai pengganti logo_path
      certificate_link:
        "https://www.linkedin.com/in/erick-winata-b59581235/details/certifications/1751905629100/single-media-viewer/?profileId=ACoAADqjoTUBA-67d9soimuJuXpFJnDxgLSNGo0",
      alt_name: "MongoDB",
      color_code: "#00000099",
    },
    {
      title: "Perkenalan ke Logika Pemrograman",
      // subtitle: "- GCP Training",
      logo_path: "dicoding_logo.jpeg",
      certificate_link: "https://www.dicoding.com/certificates/0LZ0GEKEQX65",
      alt_name: "Dicoding Indonesia",
      color_code: "#0C9D5899",
    },
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      // subtitle: "- Alex Aklson",
      logo_path: "dicoding_logo.jpeg",
      certificate_link: "https://www.dicoding.com/certificates/1RXYOJ82QPVM",
      alt_name: "Dicoding Indonesia",
      color_code: "#1F70C199",
    },
    {
      title: "Belajar Dasar Git dengan Github",
      // subtitle: "- Kim Akers",
      logo_path: "dicoding_logo.jpeg",
      certificate_link: "https://www.dicoding.com/certificates/EYX49E7Q5PDL",
      alt_name: "Dicoding Indonesia",
      color_code: "#D83B0199",
    },
    {
      title: "Belajar Dasar Pemrograman Javascript",
      // subtitle: "- Romeo Kienzler",
      logo_path: "dicoding_logo.jpeg",
      certificate_link: "https://www.dicoding.com/certificates/07Z6G1MMJXQR",
      alt_name: "Dicoding Indonesia",
      color_code: "#1F70C199",
    },
    {
      title: "Meniti Karier sebagai Software Developer",
      // subtitle: "- GCP Training",
      logo_path: "dicoding_logo.jpeg",
      certificate_link: "https://www.dicoding.com/certificates/JMZV9GGQRPN9",
      alt_name: "Dicoding Indonesia",
      color_code: "#0C9D5899",
    },
    {
      title: "Belajar Fundamental Front-End Web Development",
      // subtitle: "- Laurence Moroney",
      logo_path: "dicoding_logo.jpeg",
      certificate_link: "https://www.dicoding.com/certificates/JLX1D15NNZ72",
      alt_name: "Dicoding Indonesia",
      color_code: "#00000099",
    },
    {
      title: "Menjadi Front-End Web Developer Expert",
      // subtitle: "- Jogesh Muppala",
      logo_path: "dicoding_logo.jpeg",
      certificate_link: "https://www.dicoding.com/certificates/0LZ09215RZ65",
      alt_name: "Dicoding Indonesia",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have gained valuable experience through internships and volunteer work in web development. I'm passionate about learning new technologies and contributing to meaningful projects that create positive impact.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Machine Learning Engineer",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "June 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "IT Programmer (Internship)",
          company: "PT. Prakarsa Alam Segar (Wings Group)",
          company_url:
            "https://www.linkedin.com/company/mie-sedap/?originalSubdomain=id",
          logo_path: "pas_logo.jpeg",
          duration: "Jul 2025 - Oct 2025",
          location: "Bekasi, Indonesia",
          description:
            "Worked as an IT Programmer Intern supporting HR systems and digital transformation initiatives. Key responsibilities included debugging and maintaining the HR system, migrating document management from Google Drive to an integrated system platform, and developing a real-time monitoring dashboard for tracking prospective employee document collection status.",
          color: "#ee3c26",
        },
        {
          title: "IT Support",
          company: "Bfit Indonesia",
          company_url: "https://www.bfit.co.id",
          logo_path: "bfit_logo_2.jpg",
          duration: "Feb 2023 - Mar 2023",
          location: "Surabaya, Indonesia",
          description:
            "IT Support Intern providing first-level technical support to users, resolving hardware and software issues, and ensuring smooth IT operations.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Full Stack Web Developer Volunteer",
          company: "Kenzou Drive Thru Car Wash",
          company_url:
            "https://www.instagram.com/kenzoudrivethrucarwash/?hl=en",
          logo_path: "kenzou_logo.png",
          duration: "Aug 2024 - Jan 2025",
          location: "Surabaya, Indonesia",
          description:
            "Conducting carwash needs analysis, designing systems, developing Kenzou Drive Thru Car Wash applications with gamification implementation, and conducting user testing.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage modern web technologies and frameworks to build practical solutions. My best experience is in digital transformation projects, where I develop full-stack web applications that help organizations transition from manual processes to efficient digital systems, improving operational workflows and user experience.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "SKCK_PasFoto_BG_Removed.png",
    description:
      "Feel free to reach out through any of my social media channels. I typically respond within 24 hours. I can assist you with system design and architecture, front-end development using modern frameworks, back-end API development, and full-stack web application development using Laravel, Vue.js, and related technologies.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Surabaya, Indonesia",
    locality: "Surabaya",
    country: "Indonesia",
    region: "East Java",
    postalCode: "60114",
    streetAddress: "Some Street Name",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+62 851 5543 1948",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  nonEducations,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
