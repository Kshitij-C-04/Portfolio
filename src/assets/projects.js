import project1_img from "../assets/react todo list.png";
import project2_img from "../assets/python projects.png";
import project3_img from "../assets/CMS.png";
import project4_img from "../assets/fitness website.png";
import project5_img from "../assets/react shopping cart.png";
import project6_img from "../assets/food card.png";
import project7_img from "../assets/ev website.png";
import project8_img from "../assets/react product card.png";
import project9_img from "../assets/react project.png";
import project10_img from "../assets/social media.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "To-do List",
    w_img: project1_img,
    link: "https://github.com/Kshitij-C-04/To-do-list_React-native",
    tech: ["React Native", "JavaScript", "CSS"],
    description:
      "The To-do List App is a simple and intuitive task management application built using React Native. It allows users to add, display, and delete tasks, offering a clean user interface and smooth interactions. The goal of the project is to practice mobile app development using React Native components and manage task state effectively using React hooks.",
    features: [
      "Add Tasks: Users can input and add new tasks dynamically using a responsive text input.",
      "Display Tasks: All tasks are displayed in a scrollable view with proper styling and alignment.",
      "Delete Tasks: Users can tap on a task to remove it from the list.",
      "Interactive UI: Clean and minimal interface built using custom styles and React Native's core components.",
      "Reusable Components: Functional components structure ensures modular and reusable code.",
      "State Management: Utilizes the useState hook to manage the task list effectively.",
    ],
  },

  {
    w_no: 2,
    w_name: "Python Projects",
    w_img: project2_img,
    link: "https://github.com/Kshitij-C-04/Python-Projects",
    tech: ["Python"],
    description:
      "A collection of Python-based applications showcasing a variety of skills including GUI development, automation, and data processing. These mini-projects are designed to improve Python proficiency and cover both functional and graphical programs using libraries like Tkinter and PyQt5.",

    features: [
      "GUI Applications: Built interactive desktop apps using Tkinter and PyQt5.",
      "Data Processing: Includes scripts for parsing, analyzing, and transforming data.",
      "Automation: Automates repetitive tasks and system operations with Python.",
      "Modular Code: Each script or app is self-contained with reusable logic.",
      "Learning Focused: Ideal for beginners and intermediate learners to practice Python.",
    ],
  },
  {
    w_no: 3,
    w_name: "Content Management System (CMS)",
    w_img: project3_img,
    link: "https://github.com/Kshitij-C-04/CMS",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
      "A web-based content management system developed using PHP and MySQL that allows users to create, edit, manage, and publish digital content. It includes user authentication, admin controls, and a structured layout for managing posts and users efficiently.",

    features: [
      "User Authentication: Secure login and registration system for different user roles.",
      "Admin Dashboard: Allows administrators to manage posts, pages, and user permissions.",
      "Content Editor: Interface for creating and editing text-based content.",
      "Database Integration: Uses MySQL to store and retrieve dynamic content and user data.",
      "Responsive Design: Built with HTML, CSS, and JavaScript to ensure mobile and desktop compatibility.",
    ],
  },
  {
    w_no: 4,
    w_name: "Fitness website using API",
    w_img: project4_img,
    link: "https://github.com/Kshitij-C-04/Fitness-api",
    tech: ["React JS", "CSS", "JavaScript", "Postman"],
    description:
      "A dynamic fitness website built with React.js that integrates with external APIs to deliver exercise data, workout routines, and fitness tracking information. The app features a clean UI, real-time data fetching, and responsive design for a seamless fitness browsing experience.",

    features: [
      "API Integration: Fetches exercise and workout data from a public fitness API.",
      "Search Functionality: Users can search exercises by body part, target muscle, or equipment.",
      "Exercise Cards: Displays each exercise with images, instructions, and categories.",
      "Responsive Design: Optimized for all screen sizes including mobile and tablet.",
      "User Experience: Smooth navigation and clean layout using modern React practices.",
    ],
  },
  {
    w_no: 5,
    w_name: "Shopping Cart",
    w_img: project5_img,
    link: "https://github.com/Kshitij-C-04/react-shopping-cart",
    tech: ["React JS", "JavaScript", "CSS"],
    description:
      "A simple and functional e-commerce shopping cart built using React.js. It includes product listing, cart state management, and checkout features, with persistent data storage using Local Storage for a seamless user experience.",

    features: [
      "Product Display: Shows a list of available products with images, names, and prices.",
      "Add to Cart: Users can add products to the cart and update quantities.",
      "Remove Items: Allows users to remove individual products from the cart.",
      "Local Storage: Maintains cart data even after page refresh using browser storage.",
      "Responsive Design: Ensures usability on desktop, tablet, and mobile devices.",
    ],
  },
  {
    w_no: 6,
    w_name: "Food Card",
    w_img: project6_img,
    link: "https://github.com/Kshitij-C-04/Food-Card",
    tech: ["HTML", "CSS", "JavaScript", "Postman"],
    description:
      "A visually appealing and responsive food menu card built using HTML, CSS, and JavaScript. It highlights various dishes in a card-based layout with smooth hover effects and minimalistic design, ideal for restaurant or food-related websites. The data for the cards is been fetched from custom API created and tested using Postman.",

    features: [
      "Card Layout: Displays food items in neatly structured cards with images and names.",
      "Interactive UI: Includes hover effects and subtle animations for better engagement.",
      "Responsive Design: Adapts seamlessly across devices and screen sizes.",
      "Clean Styling: Built with modern CSS techniques for a sleek look.",
      "Lightweight Code: Easy to integrate and customize for personal or commercial use.",
    ],
  },
  {
    w_no: 7,
    w_name: "EV-Website",
    w_img: project7_img,
    link: "https://github.com/Kshitij-C-04/EV-website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "An informative and responsive website about electric vehicles built using HTML, CSS, JavaScript, and Bootstrap. The site presents EV-related content through a modern layout with interactive sections and smooth navigation for an engaging user experience. It is responsive and works well on various devices.",

    features: [
      "Informative Content: Covers electric vehicle topics like benefits, types, and environmental impact.",
      "Responsive Layout: Utilizes Bootstrap for mobile-friendly and adaptive design.",
      "Interactive Sections: Includes carousels, buttons, and collapsible elements for better UX.",
      "Modern UI: Clean design with smooth scrolling and visually appealing layout.",
      "Easy Navigation: Structured sections and anchored links for intuitive browsing.",
    ],
  },
  {
    w_no: 8,
    w_name: "Product Card using API",
    w_img: project8_img,
    link: "https://github.com/Kshitij-C-04/product-card",
    tech: ["React.js", "RESTful API", "CSS", "JavaScript"],
    description:
      "A dynamic product card component developed with React.js that fetches product information from an external API and displays it in a clean, user-friendly card layout. It showcases API integration and component-based UI design.",

    features: [
      "API Integration: Fetches product data in real-time from a public API.",
      "Card Layout: Displays product image, title, price, and other details.",
      "Component-Based: Built using reusable and modular React components.",
      "Error Handling: Handles missing data or failed fetch requests gracefully.",
      "Responsive Design: Adjusts layout for desktop and mobile viewing.",
    ],
  },
  {
    w_no: 9,
    w_name: "React JS Projects",
    w_img: project9_img,
    link: "https://github.com/Kshitij-C-04/React_mini-projects",
    tech: ["React.js", "JavaScript", "CSS", "HTML"],
    description:
      "A collection of mini-projects built with React.js to demonstrate fundamental and intermediate concepts such as component design, state management, hooks, event handling, and dynamic rendering.",

    features: [
      "Multiple Projects: Includes various small applications for different use-cases.",
      "Functional Components: Built entirely using modern React functional components.",
      "Hooks: Utilizes useState, useEffect, and other React hooks.",
      "Reusable Code: Promotes reusability and modular design patterns.",
      "Beginner Friendly: Ideal for learning and practicing core React concepts.",
    ],
  },
  {
    w_no: 10,
    w_name: "Social Media Website",
    w_img: project10_img,
    link: "https://github.com/Kshitij-C-04/Social_media",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description:
      "A full-featured social media platform developed using HTML, CSS, JavaScript, PHP, and MySQL. It includes core functionalities like user registration, posts, comments, and user profile management in a responsive layout.",

    features: [
      "User System: Registration, login, and profile management features.",
      "Post Functionality: Users can create, edit, and delete posts.",
      "Comment Section: Interactive comment system for each post.",
      "Database Integration: MySQL database used for storing users, posts, and comments.",
      "Responsive Design: Ensures smooth experience on both desktop and mobile devices.",
    ],
  },
];

export default mywork_data;
