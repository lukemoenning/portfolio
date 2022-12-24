/**
 * File that contains JSON objects with all of my informatoin to be displayed
 */

import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';


/**
 * JSON of the color theme
 */
export const colors = {
  "white": "#FFFFFF",
  "offwhite": "#F9F9F9",
  "black": "#000000",
  "accent": "#990000",
};

/**
 * JSON of basic information about me
 */
export const me = {
  "name": "Luke Moenning",
  "title": "Software Engineer",
  "about": ".................",
  "profile_picture": '../assets/images/profile_picture.png', 
};

/**
 * JSON of socials
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
 * JSON of projects
 */
export const projects = [
  {
    "name": "Trackify",
    "description": "...",
    "photo": require("./images/trackify.png"),
    "techstack": ["React", "Docker", "JSDoc"],
  },
  {
    "name": "Personal Website",
    "description": "...",
    "photo": require("./images/website.png"),
    "techstack": ["React", "Docker"],
  },
  {
    "name": "Snake Game",
    "description": "...",
    "photo": require("./images/snake-game-final.png"),
    "techstack": ["Java", "JavaSwing"],
  },
  {
    "name": "Weather App",
    "description": "...",
    "photo": require("./images/weatherapp.png"),
    "techstack": ["Python", "Tkinter"],
  },
]

