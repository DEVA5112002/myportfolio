import {
    
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    cpp,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    dwell,
    nfts,
    movies,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    
    {
      title: "Digital Marketing",
      icon: creator,
    },
    {
      title: "DataScience",
      icon: creator,
    },
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon:cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "UG-STUDIES",
     // company_name: "Starbucks",
      //icon: starbucks,
      date: "2020-2024",
      iconBg: "#E6DEDD",
      points: [
       " Bannari Amman Institute of technology",
       " B Tech Computer Science and Business System",
        "8.79 CGPA [Up to current sem",
        
      ],
    },
    {
      title: "HSC",
     // company_name: "Tesla",
     // icon: tesla,
     date: "2019 – 2020",
      iconBg: "#E6DEDD",
    
      points: [
        "Sri Ragavendhra Matric, Hr. Sec. School,Veeraganur.",
        "87%",
      ],
    },
    {
      title: "SSLC",
    //  company_name: "Shopify",
     // icon: shopify,
      iconBg: "#E6DEDD",
      date: "2017-2018",
      points: [
        "Sri Ragavendhra Matric, Hr. Sec. School Veeraganur",
        "SSLC",
        "94.6%",
        
      ],
    },
    {
      title: "INTERNSHIP",
     // company_name: "Meta",
     // icon: meta,
     date: "1 Month",
      iconBg: "#E6DEDD",
      
      points: [
        
       " Internship on IBM TRIRIGA in Ankis solution.",
        "Key responsibilities : 2nd level Support Testing Engineer on IBM Tririga IWMS real-estate Module ",
        "direct responsible for production and access management form existing modules",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PEOPLE DWELLTIME COUNTER",
      description:
        "Design a model to track people and their dwelling time with Open Cv in a particular place and with mail alert with SMTP lib also with centroidtracker for fixing aboundary around people.",
      tags: [
        {
          name: "PYTHON",
          color: "blue-text-gradient",
        },
        {
          name: "ML",
          color: "green-text-gradient",
        },
        
      ],
      image: dwell,
      source_code_link: "https://github.com/DEVA5112002",
    },
    {
      name: "Creating NFT 's Using Neural style Transfer",
      description:

        " Create NFT token art using deep learning techniques That helps normal people to be a better artist by combining two images and change some allignment tO produce a brushline stokes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "DL",
          color: "green-text-gradient",
        },
      
      ],
      image: nfts,
      source_code_link: "https://github.com/DEVA5112002",
    },
    {
      name: "Movie's Now (A MOVIE DICTIONARY WEB APP)",
      description:
        "A Movie viewer app which we can able to find all movie and their detail ,which we made with react and a Api connection from online DB to fetch the current movies. ",
      
      liveurl:"https://deva5112002.github.io/Moviesnow/",
        tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "Node js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: movies,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };