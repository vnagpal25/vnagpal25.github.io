import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Aqua Sense - A Water Quality Assessment Chatbot',
    description: "Water quality assessment is critical in public health and environmental science. My project addresses the question: 'How safe is water from a specific source to drink?' Using the USGS REST API, the program analyzes real-time water data like pH, Dissolved Oxygen, and Turbidity. By implementing an RBF-based approach and SVM classification model, it determines water potability as a percentage. I enhanced the project with an NLP chatbot using Rasa, BERT, and NLTK to enable natural user interactions about water safety.",
    tools: ['Python', 'RASA Chatbot', 'USGS API', 'NLP', 'Supervised ML',],
    role: '[Data Engineer, Software Engineer, ML Engineer] ',
    code: 'https://github.com/vnagpal25/Water-Quality-Chatbot',
    demo: '',
    image: crefin,
  },
  {
    id: 2,
    name: 'Learning Management System(LMS)',
    description: "Recognizing the growing importance of programming skills, my team developed a Learning Management System (LMS) that helps students learn Python or JavaScript. Built in Java using object-oriented principles and SCRUM methodology, I focused on back-end development. My key contribution was implementing data management functionality, enabling seamless JSON-based storage of grades, classes, and course content. The project provided valuable insights into the Software Development Life Cycle.",
    tools: ['Java', 'Python', 'JavaScript', 'SCRUM', 'Software Dev. Life Cycle (SDLC)',],
    code: 'https://github.com/vnagpal25/Waterboys_LMS',
    role: 'Back End Developer',
    demo: '',
    image: realEstate,
  },
  {
    id: 3,
    name: 'Nerdle',
    description: "Inspired by Wordle, I developed my own word-guessing game called 'Nerdle' (named after my brother Neil). I initially created a command-line version in Java to understand game mechanics, then transitioned to a web application using JavaScript, HTML, and CSS. The project helped me explore data structures like dictionaries and tries, while providing a hands-on introduction to web development.",
    tools: ['Vanilla JS', 'Java', 'HTML/CSS',],
    code: 'https://github.com/vnagpal25/Nerdle',
    demo: '',
    image: ayla,
    role: 'Front End Developer',
  }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },