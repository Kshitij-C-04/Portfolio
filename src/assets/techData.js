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

const techData = {
  'Web Development': [
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: css },
    { name: 'JavaScript', logo: js },
    { name: 'React JS', logo: react },
    { name: 'React Native', logo: reactn },
    // { name: 'Next JS', logo: next },
  ],
  'Database': [
    { name: 'MySQL', logo: mysql },

  ],
  'Tools': [
    { name: 'Figma', logo: figma },
    { name: 'Canva', logo: canva },
    { name: 'Wordpress', logo: wordpress },
    // { name: 'PowerBI', logo: power },
  ],
  'Backend': [
    { name: 'PHP', logo: php },
    { name: 'Python', logo: python },
  ],
  'Deploy & API':[
    // {name:'Vercel',logo: vercel},
    // {name:'Netlify',logo: netlify},
    // {name:'Postman',logo:postman},
  ]
};

export default techData;
