import html from './html.png';
import css from './css.png';
import js from './js.png';
import react from './react.png';
import reactn from './reactn.png';
import mysql from './mysql.png';
import figma from './figma.png';
import canva from './canva.png';
import php from './php.png';
import python from './python.png';
import wordpress from './wordpress.png';
import next from './next.png';
import netlify from './netlify.svg';
import postman from './postman.svg';
import power from './power.png';
import vercel from './vercel.png';
import cpp from './C++.svg';
import type from './typescript.svg';
import render from './render.jpg';
import appwrite from './appwrite.png';
import clerk from './clerk.jpg';
import expo from './expo.svg';
import express from './express.png';
import mongo from './mongodb.svg';
import neon from './neon.png';
import postgre from './postgresql.svg';
import node from './nodejs.svg';


const techData = {
  'Web Development': [
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: css },
    { name: 'JavaScript', logo: js },
    { name: 'React JS', logo: react },
    { name: 'React Native', logo: reactn },
    { name: 'Next JS', logo: next },
    {name: 'TypeScript' , logo: type},
  ],
  'Database': [
    { name: 'MySQL', logo: mysql },
    {name:'Mongo DB' , logo:mongo},
    {name:'PostgreSQL' , logo:postgre},
    {name:'Neon' , logo:neon},

  ],
  'Tools': [
    { name: 'Figma', logo: figma },
    { name: 'Canva', logo: canva },
    { name: 'Wordpress', logo: wordpress },
    { name: 'PowerBI', logo: power },
    {name:'Clerk' , logo:clerk},
    {name:'Appwrite' , logo:appwrite},
  ],
  'Backend': [
    { name: 'PHP', logo: php },
    { name: 'Python', logo: python },
    {name:'C++' , logo:cpp},
    {name:'Node JS' , logo:node},
    {name:'Express JS' , logo:express},

  ],
  'Deploy & API':[
    {name:'Vercel',logo: vercel},
    {name:'Netlify',logo: netlify},
    {name:'Render' , logo:render},
    {name:'Expo' , logo:expo},
    {name:'Postman',logo:postman},
  ]
};

export default techData;
