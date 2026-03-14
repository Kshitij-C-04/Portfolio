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
import project11_img from "../assets/quickbite.png";
import project12_img from "../assets/producthub.png";

const mywork_data = [
  {
    w_no: 1,
    w_name: "QuickBite",
    w_img: project11_img,
    link: "https://github.com/Kshitij-C-04/QuickBite",
    tech: ["React Native", "Expo", "TypeScript", "Appwrite"],
    description:
        "QuickBite is a modern food ordering mobile application built using React Native and Expo. The app provides users with a smooth interface to view food items, add them to the cart, and manage orders easily. It focuses on creating a clean UI, reusable components, and efficient state management to simulate a real-world food delivery application.",
    features: [
      "Search Functionality: Allows users to quickly find restaurants or food items using a search bar.",
      "Add to Cart: Users can add selected food items to their cart and manage quantities easily.",
      "Cart Management: Displays all selected items in the cart with options to update or remove them.",
      "User Authentication: Provides login and signup functionality for personalized user experience.",
      "Responsive UI: Designed with modern mobile UI practices for smooth interaction and navigation.",
      "Reusable Components: Built with modular React Native components for scalability and maintainability.",
    ],
  },

  {
    w_no: 2,
    w_name: "ProductHub",
    w_img: project12_img,
    link: "https://github.com/Kshitij-C-04/ProductHub",
    tech: ["React JS", "Node JS", "Express JS", "PostgreSQL", "CSS", "Clerk", "Render", "Neon"],
    description:
        "ProductHub is a full-stack product management web application built using the PERN stack. It allows users to create, update, and manage products through a clean and responsive interface. The project demonstrates a modern full-stack architecture with secure authentication using Clerk, a cloud-hosted PostgreSQL database on Neon, and separate frontend and backend deployments. It highlights API integration, database management, and scalable web application development.",
    features: [
      "Secure Authentication: User authentication and session management implemented using Clerk.",
      "Add Products: Users can create and store new product entries through the application interface.",
      "Edit Products: Existing product details can be updated easily.",
      "Delete Products: Users can remove products from the database when they are no longer needed.",
      "Persistent Storage: Product data is stored in a PostgreSQL database hosted on Neon.",
      "REST API Backend: Backend built with Node.js and Express to handle product operations.",
      "Responsive UI: Modern and responsive frontend interface built using React and Tailwind CSS.",
      "Cloud Deployment: Both frontend and backend are deployed on Render."
    ],
  },

  {
    w_no: 3,
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
    w_no: 4,
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
    w_no: 5,
    w_name: "Content Management System (CMS)",
    w_img: project3_img,
    link: "https://github.com/Kshitij-C-04/CMS",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    description:
        "A web-based content management system developed using PHP and MySQL that allows users to create, edit, manage, and publish digital content.",
    features: [
      "User Authentication system.",
      "Admin Dashboard to manage posts and users.",
      "Content Editor for creating and editing content.",
      "Database Integration using MySQL.",
      "Responsive Design for all devices.",
    ],
  },

  {
    w_no: 6,
    w_name: "Fitness website using API",
    w_img: project4_img,
    link: "https://github.com/Kshitij-C-04/Fitness-api",
    tech: ["React JS", "CSS", "JavaScript", "Postman"],
    description:
        "A dynamic fitness website built with React.js that integrates with external APIs to deliver exercise data and workout routines.",
    features: [
      "API Integration for workout data.",
      "Search exercises by body part.",
      "Exercise cards with instructions.",
      "Responsive Design.",
      "Smooth React navigation.",
    ],
  },

  {
    w_no: 7,
    w_name: "Shopping Cart",
    w_img: project5_img,
    link: "https://github.com/Kshitij-C-04/react-shopping-cart",
    tech: ["React JS", "JavaScript", "CSS"],
    description:
        "A functional e-commerce shopping cart built using React.js with product listing and cart state management.",
    features: [
      "Product Display with images and prices.",
      "Add to Cart functionality.",
      "Remove items from cart.",
      "Local Storage persistence.",
      "Responsive Design.",
    ],
  },

  {
    w_no: 8,
    w_name: "Food Card",
    w_img: project6_img,
    link: "https://github.com/Kshitij-C-04/Food-Card",
    tech: ["HTML", "CSS", "JavaScript", "Postman"],
    description:
        "A responsive food menu card layout with data fetched from a custom API.",
    features: [
      "Card Layout UI.",
      "Interactive hover effects.",
      "Responsive design.",
      "Clean CSS styling.",
      "API-based data display.",
    ],
  },

  {
    w_no: 9,
    w_name: "EV-Website",
    w_img: project7_img,
    link: "https://github.com/Kshitij-C-04/EV-website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
        "An informative website about electric vehicles with responsive design and modern UI.",
    features: [
      "EV information sections.",
      "Responsive layout.",
      "Interactive components.",
      "Smooth navigation.",
      "Modern UI design.",
    ],
  },

  {
    w_no: 10,
    w_name: "Product Card using API",
    w_img: project8_img,
    link: "https://github.com/Kshitij-C-04/product-card",
    tech: ["React.js", "RESTful API", "CSS", "JavaScript"],
    description:
        "A React component that fetches product data from an API and displays it in cards.",
    features: [
      "API Integration.",
      "Card UI layout.",
      "Reusable React components.",
      "Error handling.",
      "Responsive design.",
    ],
  },

  {
    w_no: 11,
    w_name: "React JS Projects",
    w_img: project9_img,
    link: "https://github.com/Kshitij-C-04/React_mini-projects",
    tech: ["React.js", "JavaScript", "CSS", "HTML"],
    description:
        "A collection of mini React projects demonstrating hooks, components, and state management.",
    features: [
      "Multiple React apps.",
      "Functional components.",
      "Hooks usage.",
      "Reusable components.",
      "Beginner friendly.",
    ],
  },

  {
    w_no: 12,
    w_name: "Social Media Website",
    w_img: project10_img,
    link: "https://github.com/Kshitij-C-04/Social_media",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description:
        "A social media platform with posts, comments, and user authentication.",
    features: [
      "User login and registration.",
      "Create and manage posts.",
      "Comment system.",
      "MySQL database integration.",
      "Responsive UI.",
    ],
  },
];

export default mywork_data;