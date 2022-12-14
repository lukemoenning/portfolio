/**
 * File that contains JSON objects with all of my informatoin to be displayed
 */

import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';


/**
 * JSON of the color theme
 */
export const colors = {
  "white": "#FFFFFF",
  "offwhite": "#e1e4e9",
  "black": "#000000",
  "accent": "#63868a",
};

/**
 * JSON of basic information about me
 */
export const me = {
  "name": "Luke Moenning",
  "title": "Software Engineer",
  "about": "I'm a software engineer studying computer science and mathematics at the University of Iowa. In my free time I love playing and watching soccer, and recently I've been working on getting my coaching license. I also enjoy learning new skills through projects - like the fun game I hid somewhere on this website. (Hint: it's hidden where it should never be found.)",
  "photo": require('../assets/images/profile_picture.png'), 
};

/**
 * JSON of socials information
 */
export const socials = [
  {
    "name": "GitHub",
    "url": "https://github.com/lukemoenning",
    "icon": GitHub,
  },
  {
    "name": "LinkedIn",
    "url": "https://www.linkedin.com/in/lukemoenning/",
    "icon": LinkedIn,
  },
  {
    "name": "Email",
    "url": "mailto:luke.moenning@gmail.com",
    "icon": Email,
  },
  {
    "name": "Phone",
    "url": "tel:1-319-440-7133",
    "icon": Phone,
  },
];

/**
 * JSON of work information
 */
export const work = [
  {
    "title": "Web Intern",
    "location": "The University of Iowa - College of Engineering",
    "date": "September 2022 - Present",
    "descriptions": [
      "Maintain The University of Iowa - College of Engineering website",
      "Handle ticket requests and communicate results and constraints with the requester",
      "Developed front end software skills",
    ],
  },
  {
    "title": "Lead Instructor",
    "location": "Mathnasium - The Math Learning Center",
    "date": "June 2019 - December 2022",
    "descriptions": [
      "Lead students to look at math from a different perspective so they gain a better understanding of it",
      "Tutored 50+ students from kindergarten to Calculus",
      "Held leadership and instruction training for the instructors",
      "Develop my communication skills by instructing students and interacting with parents",
    ],
  },
]

/**
 * JSON of education information
 */
export const education = [
  {
    "title": "Bachelors of Science",
    "location": "The University of Iowa",
    "date": "August 2021 - May 2025",
    "descriptions": [
      "Honors - Computer Science BS - Mathematics BS - Pyschology Minor - Artificial Intelligence, Modeling, and Simulation Certificate",
      "University of Iowa Flagship Scholar",
      "Awarded Dean's List for Fall 2021, Spring 2022, Fall 2022",
      "Memeber of UIowa Association for Computing Machinary (ACM)",
    ],
  },
  {
    "title": "High School Diploma",
    "location": "West Senior High School",
    "date": "August 2017 - May 2021",
    "descriptions": [
      "Graduated with a GPA of 4.32",
      "Member of the National Honors Society in 2020 and 2021",
      "Awarded AP Scholar with Distinction",
      "Varisty soccer athlete, state runner-up two years in a row",
    ],
  },
]

/**
 * JSON of projects information
 * 
 * Project photos should be 1920x1080 pixels
 */
export const projects = [
  {
    "name": "Trackify",
    "description": "A Spotify statistics tracker so the user can be up to date with all their top songs and artists. My goal in developing Trackify was to become more confident with APIs, react, and containerization with docker. Along the way I practiced preventing tightly coupled code with a data layer and developing documentation using the JSDoc tool.",
    "photo": require("./images/trackify.png"),
    "techstack": ["React", "Docker", "JSDoc"],
    "github": "https://github.com/lukemoenning/trackify",
    "live_demo": null,
  },
  {
    "name": "Personal Website",
    "description": "I created this website as a place where you can learn more about me and what I've been part of. I enjoyed the challenge of making it scalable and maintainable so I can update its information as easily as possible.",
    "photo": require("./images/website.png"),
    "techstack": ["React", "Docker"],
    "github": "https://github.com/lukemoenning/portfolio",
    "live_demo": "https://lukemoenning.com",
  },
  {
    "name": "Lost in Space",
    "description": "A little game I made so I could hide it somewhere on this website. I had a great time practicing concepts of Object-Oriented Programming I learned in my software development class, such as abstraction encapsulation.",
    "photo": require("./images/lost_in_space.png"),
    "techstack": ["JavaScript"],
    "github": "https://github.com/lukemoenning/portfolio",
    "live_demo": "https://lukemoenning.com/lostinspace",
  },
  {
    "name": "Weather App",
    "description": "A simple python weather app retrieving data from the OpenWeatherMap API. This project served as a way for me to step foot into the world of APIs and data manipulation.",
    "photo": require("./images/weatherapp.png"),
    "techstack": ["Python", "Tkinter"],
    "github": "https://github.com/lukemoenning/weather-app",
    "live_demo": null,
  },
  {
    "name": "Snake Game",
    "description": "My very first project. I created this game with hopes to practice using data structures I was learning in class, such as LinkedLists. I wanted a way to track my score, so I used a CSV file to serve as a database for the accounts and their high scores.",
    "photo": require("./images/snake-game-final.png"),
    "techstack": ["Java", "JavaSwing"],
    "github": "https://github.com/lukemoenning/snake-game-final",
    "live_demo": null,
  },
]

