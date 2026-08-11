/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Elisha",
  logo_name: "{eotobi.dev}",
  nickname: "otobi / eotobi",
  full_name: "Elisha Osotsi Otobi",
  subTitle: "Data Analyst, Automation Engineer & Full-Stack Developer | Turning Agricultural Data into Digital Solutions 🔥. Never stop improving yourself.",
  resumeLink:
    "https://drive.google.com/file/d/1xpaTtQjRvDB6vbmXCipleUz7jstDJ5kR/view?usp=sharing",
  mail: "mailto:eotobi@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/eotobi",
  linkedin: "https://www.linkedin.com/in/elisha-otobi-889577195/",
  gmail: "eotobi@gmail.com",
  gitlab: "https://gitlab.com/eotobi",
  // facebook: "https://www.facebook.com/elisha.otobi/",
  twitter: "https://twitter.com/eotoby",
  // instagram: "https://www.instagram.com/elisha_otobi_/",
};

const skills = {
  data: [
    {
      title: "Data Management & Governance",
      fileName: "DataManagementImg",
      skills: [
        "⚡ Managing the full data lifecycle: collection, storage, transformation, quality assurance and reporting",
        "⚡ Designing digital data-collection tools and maintaining reliable datasets across multiple production sites",
        "⚡ Managing data across Excel, Smartsheet, SQL databases, Power BI Lakehouse and Data Warehouse environments",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Excel",
          iconUrl:
            "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/assets/brand-icons/product/svg/excel_32x1.svg",
        },
        {
          skillName: "Smartsheet",
          iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAjVBMVEX///8UMlju7/EAADstNlsOMFfe4uYsPmAAKFIAKlMAJFAAHUwAG0sAIE4AAD4AIU4AE0j3+PkAAELKztUAF0oAD0aDjJ2/xM3W2d+0usSJkaKXnq1GVXJrdoxda4N6hZgKE0IaIk48QmUhMVk6SGlyfZBVY31DTmyrsbyjqLUjOl8AC0dTW3VpboV2eI0hywSzAAAE40lEQVR4nO2ba3erKhCGxbPHAGq8Jmo05pyzc2vS7v//83aTegHRJO1C9APvp66A+KwBh2GGGoaWlpaWlpaWlpaWlpaWOpn//pKo/9ZyoP5BIE3xTgrTDUqWwJbEJBPKkcUkEco5yGKSB2Vvg9lB2VtpSNKg6Lt5H86y5gNFi6+5M/+fDxRZVCyH37OBIjVKfl3MBQrc5GusFGA2UH7FZO7xbKDCTTXUxkFzgYprpsxBc4Gip2qgYEHmAkVOZjVQ6aGZQMGyhsgomgkU0KwexoW5QPn1IjcOLpoJlHesRznbaCZQsK8JAkRmAgWrtB5kZ9e/TQ1l5/UYEW5AJ4ZyP5oxLmQmUAC11zRyv/11UijAST1CimAmUE57Pi8pwzolFN4356lkyRpwQiiAqHm+IGzDhFB+4w3YVT4tFH5vJs9c8SacDoo2rtzYUa5lOiiniQ0YX64Aitj+yiF9Lbdgs81knNRBeeiYZ0leIiq2fU5e4zaNzO+0jQZFwl21ZtJDCN1W5LXpFfPUbR4LCu9bSxjJpTuHQJo9z8idLvFIUHRhss3RokPltS7KxIIdx4HCRWdU6xdHRdr9xdh4wtyOAgXY7HaIOHv4WdNggbjgRoGia0ugSmLGkGVrqK1oqLGmz9nn3YTqut1K4mYjNlJPNNRYCx3AxRnfJTjWLpJxB8EWC0hjOk9wcr6Pda1a3HbTSwV3MC7U5yx1ageVQ6JMOajoM9SoUBDztqpcd9y+MXL7mMbdkCE+c72S8PNHph4UHPt363FDF+jknm+zhdsVFa16nxo7nmKOBjelhFtRp4GwZuwgz+WX1RaHraES2uOjVEChZcT3K5u/g/5PTwUUeec6HtuIJrkOPTN+jG6/sR2DdlMsBlaUCii49JcVEzGOUgfFJgxYHYdWlBIouPS9Ih1cUWrOfV6fqd4HV5QaKKBCyCecP5VDoZ7rD9vew6BKKPEllj/46amCQt14zzg8MpQiKCC8r7IujwylKuuy4gOrjf2wtyIocmRNFQyFB2qhEGZSC0YeP+6sCspjLvuIaZaJoNC1nb+s/7jAQO1FbzsKFHOy6SbupoOCJhccLZ/2XSiCQqSOiz+eGUqdpZBXbYBsZWhyKKBfXdc9uZ/JoFB4n7/AfmooBCdlUPjuqt76HCchHCmcpNwWfAXqXlYP+iLOuNxwKSGFUPcbUonoOCHeBXzYAIU6KFzyBdCa6Vak4QIsKGQwvVgwCg1TcJz0cl//FluVIMdn75MIdY3eOulEuB6rvXfLzCtWCUXKgvcH9NKc6a0FMP0UQiE+kQ+ros0LGZu2loXlXNb9SWXUXfAxclu/8eTc/v4+FA4PnUguaT5A4fCjBoo4ZSoM0nhQP+t5xdhQcL1kPe7RxNUEhpHYODIUxKcBS9QJhqWU/fgbULAKz4PvzO++FfZybu+/CkWc4vxonPx2SrU3j7rIhiLXS/JkZt6WlNriNzAWFNjk44UFbK3/yFnmL0ARh+4kGUASFNh2eZb3ryevyho+ywG2nXWqHunz3BQOEFF/cZDjn7+vqA8KqOuWiZRcxY+UCZU74jjFrm8zUSf+vgqhlBZ5Kmez+LnquB+AeCEtN898pBLdisFAqId/n9aRNemkNQr2tn+9vO/eonnw3GUVu3NqzmHKtLS0tLS0tLS0tLS0tL6vv3zPUC9RYbFnAAAAAElFTkSuQmCC",
        },
        {
          skillName: "Microsoft Access",
          iconUrl: "https://img.icons8.com/color/96/microsoft-access-2019.png",
        },
        {
          skillName: "SQL Databases",
          iconUrl: "https://img.icons8.com/color/96/database.png",
        },
      ],
    },

    {
      title: "Analytics & Visualisation",
      fileName: "DataAnalyticsImg",
      skills: [
        "⚡ Developing operational dashboards and reports that turn production data into actionable insights",
        "⚡ Building Power BI dashboards using DAX, advanced visualisations and structured data models",
        "⚡ Supporting data-driven decision-making across agricultural production operations",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          iconUrl:
            "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/1068058-Icon-PowerBI?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=96&hei=96&qlt=100&fit=constrainower-bi-icon.png",
        },
        {
          skillName: "Qlik Sense",
          iconUrl: "https://cdn.simpleicons.org/qlik/009848",
        },
        {
          skillName: "DAX",
          iconUrl: "https://img.icons8.com/color/96/combo-chart--v1.png",
        },
        {
          skillName: "Microsoft Excel",
          iconUrl: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png",
        },
      ],
    },

    {
      title: "Automation & ETL",
      fileName: "AutomationImg",
      skills: [
        "⚡ Automating repetitive business processes and data workflows using Power Automate, VBA and Python",
        "⚡ Transforming, cleaning and consolidating data using Power Query and advanced Excel functions",
        "⚡ Building reliable ETL processes that improve reporting speed, data quality and operational efficiency",
      ],
      softwareSkills: [
        {
          skillName: "Power Automate",
          iconUrl:
            "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_PAU_icon?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=96&hei=96&qlt=100&fit=constrain",
        },
        {
          skillName: "Power Query",
          iconUrl: "https://img.icons8.com/color/96/data-configuration.png",
        },
        {
          skillName: "VBA",
          iconUrl: "https://img.icons8.com/color/96/code.png",
        },
        {
          skillName: "Python",
          iconUrl: "https://cdn.simpleicons.org/python/3776AB",
        },
      ],
    },

    {
      title: "Technical Development & AI",
      fileName: "TechnicalDevelopmentImg",
      skills: [
        "⚡ Developing digital tools and user interfaces using React JS, Python and Django",
        "⚡ Building database-driven applications and automation solutions using SQL and Python",
        "⚡ Applying an AI-oriented approach to improve automation, data processing and operational decision-making",
      ],
      softwareSkills: [
        {
          skillName: "React JS",
          iconUrl: "https://cdn.simpleicons.org/react/61DAFB",
        },
        {
          skillName: "Python",
          iconUrl: "https://cdn.simpleicons.org/python/3776AB",
        },
        {
          skillName: "Django",
          iconUrl: "https://cdn.simpleicons.org/django/092E20",
        },
        {
          skillName: "SQL Databases",
          iconUrl: "https://img.icons8.com/color/96/database.png",
        },
      ],
    },

    {
      title: "Leadership & Digital Transformation",
      fileName: "LeadershipImg",
      skills: [
        "⚡ Leading a team of data analysts and coordinating data clerks across Kenya, Uganda, Stuttgart and Canaris",
        "⚡ Providing day-to-day technical support, troubleshooting and practical digital solutions for operational teams",
        "⚡ Driving digital transformation through the Kenya-based Data Center, supporting automation and data management initiatives",
      ],
      softwareSkills: [
        {
          skillName: "Team Leadership",
          iconUrl: "https://img.icons8.com/color/96/conference-call.png",
        },
        {
          skillName: "Data Analytics",
          iconUrl: "https://img.icons8.com/color/96/combo-chart--v1.png",
        },
        {
          skillName: "Process Automation",
          iconUrl: "https://img.icons8.com/color/96/process.png",
        },
        {
          skillName: "Digital Transformation",
          iconUrl: "https://img.icons8.com/color/96/artificial-intelligence.png",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Masinde Muliro University of Science and Technology",
      subtitle: "Bachelor of Science (Information Technology)",
      logo_path: "mmust.png",
      alt_name: "MMUST",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Attainned Second Class Honors Upper Division",
        "⚡ Studied core subjects like Data Structures, DBMS, Networking, Security",
        "⚡ Completed mandatory 3-month Industrial training at KenGen Kenya ar IT attache",
        "⚡ Successfully implemented an Android App using Java and XML for my 3rd and 4th year Projects",
      ],
      website_link: "https://mmust.ac.ke/",
    },
    {
      title: "Butere Boys High School",
      subtitle: "Kenya Certificate of Secondary Education",
      logo_path: "images.jpg",
      alt_name: "BBHS",
      duration: "2012 - 2015",
      descriptions: [
        "⚡ Attained A- (minus)",
        "⚡ Perfomed exemplary in Mathematics, Physics and Computer Studies.",
      ],
      website_link: "https://www.facebook.com/ButereBoyshighSchool/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineering",
      subtitle: "ALX",
      logo_path: "alx.png",
      certificate_link:
        "https://drive.google.com/...",
      alt_name: "ALX Certification",
      // color_code: "#2AAFED",
      // color_code: "#47A048",
      color_code: "#ffffff",
    },
    {
      title: "Yellow Belt",
      subtitle: "Lean Six Sigma",
      logo_path: "lss.png",
      certificate_link:
        "https://drive.google.com/...",
      alt_name: "hackathon",
      // color_code: "#E2405F",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Industrial Attachement",
  description:
    "My experiences spans 5 years leading teams and data management operations in cuttings production and seeds companies",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
          {
          title: "Data Analyst",
          company: "Selecta One",
          company_url: "https://selecta-one.com/en/",
          logo_path: "selecta-one.png",
          duration: "2022 - 2023",
          location: "Onsite - Kiambu, Kenya",
          description: `Implemented data tools in Excel that support data entry, processing and visualization using
          dashboards in Qlik Sense and Excel.
          Presented weekly reports to stakeholders on various topics i.e. Quality of Products, IPM, Climate and Operations.
          Major achievement was successfully migrating an 11-year-old Microsoft Access Tool that managed Operations Data for
          Selecta Stutgart to an automated version in Qlik Sense.
          `,
          color: "#0071C5",
        },
        {
          title: "HOD Data Management",
          company: "Selecta One",
          company_url: "https://selecta-one.com/en/",
          logo_path: "selecta-one.png",
          duration: "2023 - Nov 2025",
          location: "Onsite - Kiambu, Kenya",
          description: `Managing data operations across three sites in Kenya,one site in Uganda,
          and teams in Stuttgart and Canaris, using Microsoft Excel, Power Automate, Power Query, Microsoft Access, VBA, advanced
          Excel functions-including LET, HSTACK, VSTACK and XLOOKUP-alongside Qlik Sense,Python, React and SQL.
          I lead a team of four on-site data analysts and coordinate data clerks across multiple locations, ensuring consistent data quality,
          timely reporting and effective support for operational teams providing day-to-day technical troubleshooting and practical
          digital solutions to keep business processes running smoothly.
          Major achievement has been establishing a Kenya-based Data Center and data team that supports automation,
          data management and digital transformation across the wider production network.
          `,
          color: "#0071C5",
        },
        {
          title: "Data Analysts and Automations Lead",
          company: "Syngenta Group",
          company_url: "https://www.syngenta.co.ke/",
          logo_path: "syngenta.png",
          duration: "Nov 2025 - To Date",
          location: "Hybrid - Murang'a, Kenya",
          description: `My work spans the full data management lifecycle from designing practical digital
          data collection solutions in Smartsheet, Excel, React JS and Python to ensuring data is stored,
          structured and accessible across Excel, Smartsheet, SQL databases, Power BI Lakehouse and Data Warehouse environments.
          I build and maintain reliable ETL processes using Power Query, advanced Excel formulas and Python,
          transforming operational data into consistent, analysis-ready datasets.
          I also develop Power BI dashboards using DAX and advanced visualizations to deliver clear,
          actionable reporting that supports production performance, operational decision making and continuous improvement.
          Major achievements so far have been designing and implementing an ETL pipeline that automates getting data using the Sigrow API,
          loading to a Power BI Lakehouse with automated Dashboard reload in Power BI to support climate monitoring for all flower and seeds sites,
          implementing a Python and React Web Application to digitalize operations across HR, Operations, Logistics and Warehouse.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Indutrial Attachment",
      experiences: [
        {
          title: "IT Attachee",
          company: "KenGen",
          company_url: "https://www.kengen.co.ke/",
          logo_path: "kengen.png",
          duration: "May 2018 - Aug 2018",
          location: "Onsite - West Pokot, Kenya",
          description:
            "Applying practical skills on ICT support including Hardware and Software Troubleshooting, CCTV installation and SCADA Maintainance",
          color: "#FBBD18",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Available upon request due to data privacy, for public projects please review my github account",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "eotobi.jpg",
    description:
      "Kindly contact me through the links provided below, I will contact you ASAP. Thanks :) ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I share on github for personal projects and do a documentation on work projects. I write on Twitter sometimes.",
    link: "https://x.com/eotoby",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "rescue-robots-simulation",
      url: "https://github.com/eotobi/rescue-robots-simulation",
      description:
        "A simple Python model, consisting of three agent types: Explorer drones, Firstaid Terrain Robots, and Patients. The Explorer drones fly over the drid at random in search of patients. When they find one checks if condition is critical if so call the Firstaid Terrain Robots to deliver first aid supplies. If not, the Explorer drones keeps searching.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        }
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/eotobi/rescue-robots-simulation",
          iconifyClass: "ri:github-fill",
        }
      ],
    },
    {
      id: "1",
      name: "Python-React Microservices",
      url: "https://github.com/eotobi/python-react-microservices",
      description:
        "A project that a system design prototype for a Django and Flask REST frameworks that expose admin and product APIs, specially crafted for integration with React frontend applications. The admin functionalities are implemented using Django, while Flask handles product-related operations. These components communicate seamlessly through a RabbitMQ queue, ensuring efficient and robust data flow from frontend to the 2 MySql databases",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        }
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/eotobi/python-react-microservices",
          iconifyClass: "ri:github-fill",
        }
      ],
    },
    {
      id: "2",
      name: "Memory Game",
      url: "https://github.com/eotobi/memory_game",
      description:
        "A memory game developed in React JS",
      languages: [
        {
          name: "React JS",
          iconifyClass: "logos-reactjs",
        }
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/eotobi/memory_game",
          iconifyClass: "ri:github-fill",
        }
      ],
    },
        {
      id: "3",
      name: "Book Tracking",
      url: "https://github.com/eotobi/book-tracking-app",
      description:
        "A fulstack Fast API, Next JS web app for tracking book reading. On this website, users can Add a new book entry with just a title, transition a book to the 'reading' state. Move a book to the 'to-read' column. Shift a book to the 'completed' column. Delete any book entry. Book Entry should only contain book title and nothing else. There is no need to add editing functionality.",
      languages: [
        {
          name: "Fast API",
          iconifyClass: "logos-python",
        },
        {
          name: "React JS",
          iconifyClass: "logos-reactjs",
        }
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/eotobi/book-tracking-app",
          iconifyClass: "ri:github-fill",
        }
      ],
    },       
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
