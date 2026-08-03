import bank from "../assets/images/Bank.png";
import bgcolor from "../assets/images/bgcolor.png"
import BMICalculator from "../assets/images/BMICalculator.png";
import bookmanagement from "../assets/images/bookmanagement.png";
import courier from "../assets/images/courier.png";
import guessthenumber from "../assets/images/guessthenumber.png";
import mario from "../assets/images/mario.png";
import portfolio from "../assets/images/portfolio.png";
import snakeX from "../assets/images/snakeX.png";
import tiktak from "../assets/images/tik-tak.png";
import youtubepause from "../assets/images/youtubepause.png";

const projectDetails = [
  {
    type: "Project",
    heading: "Bank Management System",
    image: bank,
    uses: "Java, Spring Boot, Hibernate, Oracle SQL",
    info: "A backend banking application that performs CRUD operations using Spring Boot, Hibernate, and Oracle SQL.",
    githubUrl: "https://github.com/AKXY006/Bank-Management-System",
    deployUrl: "https://railway.com/project/a4ccd4ac-a59b-4cf1-b618-7627d971f94b/service/4f4cd567-1f4d-4088-a83f-623385e52a1c"
  },
  {
    type: "Project",
    heading: "Portfolio Website",
    image: portfolio,
    uses: "React, HTML, CSS, JavaScript",
    info: "A responsive portfolio website to showcase my skills and projects.",
    githubUrl: "https://github.com/AKXY006/Protfolio-React",
    deployUrl: "https://portfolio-taupe-eight-iw28vequw0.vercel.app/"
  },
  {
    type: "Project",
    heading: "Courier Management System",
    image: courier,
    uses: "Java, Spring Boot, Hibernate, Oracle SQL",
    info: "A backend courier management system for handling shipments, customers, warehouses, and delivery agents.",
    githubUrl: "https://github.com/AKXY006/Courier-Logistic-Tracking-Management",
    deployUrl: ""
  },
  {
  type: "Project",
  heading: "Background Generator",
  image: bgcolor,
  uses: "HTML, CSS, JavaScript",
  info: "A background color generator that creates random colors and allows users to copy color codes instantly.",
  githubUrl: "https://github.com/AKXY006/JavaScript-Learn/tree/main/07_Project/01_project",
  deployUrl: "https://java-script-learn-pacm1dp5m-akshay-kumar-s-projects-6ee2a902.vercel.app/"
  },
  {
    type: "Project",
    heading: "Book Management System",
    image: bookmanagement,
    uses: "Java, Spring Boot, Hibernate, Oracle SQL",
    info: "A backend application for managing books with CRUD operations using Spring Boot, Hibernate, and Oracle SQL.",
    githubUrl: "https://github.com/AKXY006/spring-boot-book-management",
    deployUrl: ""
  },
  {
    type: "Project",
    heading: "BMI Calculator",
    image: BMICalculator,
    uses: "HTML, CSS, JavaScript",
    info: "A responsive BMI calculator that calculates Body Mass Index based on user input.",
    githubUrl: "https://github.com/AKXY006/JavaScript-Learn/tree/main/07_Project/02_Project",
    deployUrl: "https://java-script-learn-elgx-mbau6x3w3.vercel.app/"
  },
  {
    type: "Project",
    heading: "Guess The Number",
    image: guessthenumber,
    uses: "HTML, CSS, JavaScript",
    info: "A fun number guessing game with random number generation and score tracking.",
    githubUrl: "https://github.com/AKXY006/JavaScript-Learn/tree/main/07_Project/04_Project",
    deployUrl: "https://java-script-learn-r4nd-6vot8pwkb.vercel.app/"
  },
  {
    type: "Project",
    heading: "Tic Tac Toe",
    image: tiktak,
    uses: "HTML, CSS, JavaScript",
    info: "A two-player Tic Tac Toe game with winner detection and restart functionality.",
    githubUrl: "https://github.com/AKXY006/tik-tak-toe",
    deployUrl: "https://tik-tak-toe-plum-mu.vercel.app/"
  },
  {
    type: "Vibe Coding",
    heading: "YouTube Pause Extension",
    image: youtubepause,
    uses: "JavaScript, Chrome Extension",
    info: "A Chrome extension that provides quick controls for pausing YouTube videos.",
    githubUrl: "https://github.com/AKXY006/youtube-auto-pause-extension",
    deployUrl: ""
  },
  {
    type: "Vibe Coding",
    heading: "Snake X",
    image: snakeX,
    uses: "HTML, CSS, JavaScript",
    info: "A classic Snake game built during vibe coding sessions.",
    githubUrl: "https://github.com/AKXY006/Vibe-Coding/tree/main/Snake%20Game",
    deployUrl: "https://vibe-coding-2x5h.vercel.app/"
  },
  {
    type: "Vibe Coding",
    heading: "Mario Game",
    image: mario,
    uses: "HTML, CSS, JavaScript",
    info: "A Mario-inspired platform game created during vibe coding sessions.",
    githubUrl: "https://github.com/AKXY006/Vibe-Coding/tree/main/Mario",
    deployUrl: "https://vibe-coding-te8m-hsdpbog5a-akshay-kumar-s-projects-6ee2a902.vercel.app/"
  }
];

export default projectDetails;