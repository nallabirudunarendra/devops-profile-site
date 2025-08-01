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
  username: "Narendra Nallabirudu",
  title: "Hi all, I'm Narendra Nallabirudu",
  subTitle: emoji(
     "AWS DevOps Engineer | Snowflake Automation | Terraform | Kubernetes | 6+ YOE"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Y32DuodD9zk0hg335dT9UIq-dqAD0jJs/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nallabirudunarendra",
  linkedin: "https://www.linkedin.com/in/narendra-nallabirudu-b0252a249/",
  gmail: "nallabirudunarendra@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS ENGINEER WHO LOVES AUTOMATION & INFRASTRUCTURE AS CODE",
   skills: [
    "⚡ Automate cloud infrastructure provisioning using Terraform",
    "⚡ Create CI/CD pipelines with GitHub Actions and GitLab",
    "⚡ Containerize and orchestrate apps using Docker and Kubernetes",
    "⚡ Implement secure, scalable, and cost-effective AWS solutions"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Snowflake", fontAwesomeClassname: "fas fa-snowflake" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "De Montfort University",
      logo: require("./assets/images/dmuLogo.png"),
      subHeader: "M.Sc. in Engineering Management",
      duration: "September 2019 - July 2021"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "AWS DevOps Engineer & Snowflake Engineer",
      company: "Kinesso Malaysia SDN. BHD",
      companylogo: require("./assets/images/kinessoLogo.png"),
      date: "Jan 2025 – Present",
      desc: "Led AWS DevOps initiatives and Snowflake automation to build scalable, secure, and synchronized data infrastructure across multi-cloud platforms. Managed AWS resources with Terraform, built reusable IaC modules, orchestrated OpenFlow-based pipelines, and implemented Vault, Jenkins, and GitHub Actions for secure CI/CD."
    },
    {
      role: "AWS DevOps Engineer",
      company: "Fastco.Asia",
      companylogo: require("./assets/images/fastcoLogo.png"),
      date: "Dec 2023 – Dec 2024",
      desc: "Implemented GitHub Actions CI/CD pipelines, Terraform-managed infrastructure, and Kubernetes deployments via Argo CD. Enhanced microservices monitoring using Datadog, optimized HPA settings, and supported MongoDB integrations."
    },
    {
      role: "AWS Cloud Engineer",
      company: "Creative Mobile Multimedia Broadcasting",
      companylogo: require("./assets/images/creativemobileLogo.png"),
      date: "Jan 2023 – Nov 2023",
      desc: "Developed serverless applications using AWS Lambda and API Gateway. Automated deployments with CloudFormation and ECS. Secured infrastructure with IAM and encrypted VPCs, and containerized workloads with Docker and Kubernetes."
    },
    {
      role: "AWS Cloud Engineer",
      company: "AMSYS Technologies",
      companylogo: require("./assets/images/amsysLogo.png"),
      date: "Sep 2021 – Oct 2022",
      desc: "Provided L2 AWS support for EC2, RDS, S3, IAM, and VPC. Managed EKS and ECS clusters, implemented autoscaling, monitored performance with CloudWatch, and documented procedures to reduce support load."
    },
    {
      role: "AWS DevOps Engineer",
      company: "Accord Solution Pvt Ltd, India",
      companylogo: require("./assets/images/accordLogo.png"),
      date: "Aug 2017 – Aug 2019",
      desc: "Built Jenkins CI/CD pipelines for Java applications, deployed workloads on EKS, and provisioned AWS infrastructure using Terraform. Automated tasks with Ansible and Shell scripts, managed Docker lifecycles, and optimized Git workflows."
    }
  ]
};

// Certifications Section

const certifications = {
  display: true, // Set to false to hide this section
  certificates: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "Amazon Web Services",
      logo_path: require("./assets/images/awsLogo.png"), // Replace with your logo
      certificate_link: "", // Optional: add link to certificate if available
      alt_name: "AWS SAA",
      color_code: "#FF9900"
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      subtitle: "HashiCorp",
      logo_path: require("./assets/images/terraformLogo.png"),
      certificate_link: "",
      alt_name: "Terraform",
      color_code: "#844FBA"
    },
    {
      title: "SnowPro Core Certification",
      subtitle: "Snowflake",
      logo_path: require("./assets/images/snowflakeLogo.png"),
      certificate_link: "",
      alt_name: "SnowPro",
      color_code: "#56B9DA"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      subtitle: "CNCF",
      logo_path: require("./assets/images/kubernetesLogo.png"),
      certificate_link: "",
      alt_name: "CKA",
      color_code: "#326CE5"
    },
    {
      title: "HashiCorp Certified: Vault Associate",
      subtitle: "HashiCorp",
      logo_path: require("./assets/images/vaultLogo.png"),
      certificate_link: "",
      alt_name: "Vault",
      color_code: "#000000"
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      subtitle: "Red Hat",
      logo_path: require("./assets/images/redhatLogo.png"),
      certificate_link: "",
      alt_name: "RHCSA",
      color_code: "#EE0000"
    }
  ]
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Want to discuss a DevOps project or collaborate? Reach out to me directly.",
  number: "+60 12 356 7535",
  email_address: "nallabirudunarendra@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
