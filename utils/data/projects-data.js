import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
  {
    id: 1,
    name: 'Aqua Sense - A Water Quality Assessment Chatbot',
    description: "Water quality assesment is a crucial issue in the fields of public health and environmental science. Knowing the contaminant and chemical nature of water found in wells, springs, streams, rivers, and other bodies of water is key in determining the potability of water.To tackle this problem, I decided to pursue a project that can answer questions like 'How safe is the water from (insert desired outdoorwater source) to drink?'. My program pulls real-time data from the United States Geological Survey(USGS) via their REST API. It makes a decision using an RBF-based approach based on various measured quantities like pH, Dissolved Oxygen, Turbidity, Temperature, and specific conductance to determine the potability of water as a percentage. I implemented natural language processing(NLP) techniques using tools like Rasa, BERT, and NLTK to allow for natural conversation between the chatbot and the user. I also implemented the decision making feature behind my chatbot by training a Support Vector Machine classification model that decided if water was potable or not as a confidence from 0 to 1",
    tools: ['Python', 'RASA Chatbot', 'USGS API', 'NLP', 'Supervised ML', ],
    role: '[Data Engineer, Software Engineer, ML Engineer] ',
    code: 'https://github.com/vnagpal25/Water-Quality-Chatbot',
    demo: '',
    image: crefin,
  },
  {
    id: 2,
    name: 'Learning Management System(LMS)',
    description: 'In a world where automation and technology are becoming increasingly ubiquitous, having the knowledge of a programming knowledge can be extremely beneficial to further people\'s career options.For this reason, with a team of peers, I embarked on creating a Learning Management System(LMS) that provides prospective students and teachers alike an interface through which they can learn a new programming language(Python or JavaScript). We implemented our command-line based interface for the LMS in Java, using object-oriented principles and following the SCRUM methodology to track our sprint progress. I was primarily responsible for back-end development; I had to write code for the LMS to seamlessly load and save necessary data regarding grades, classes, and course content in JSON format. This project was extremely beneficial in teaching me about the Software Development Life Cycle.',
    tools: ['Java', 'Python', 'JavaScript', 'SCRUM', 'Software Dev. Life Cycle (SDLC)', ],
    code: 'https://github.com/vnagpal25/Waterboys_LMS',
    role: 'Back End Developer',
    demo: '',
    image: realEstate,
  },
  {
    id: 3,
    name: 'Nerdle',
    description: "I have a fascination for puzzles and solving them, particulary the well known game Wordle by New York Times. With this project, I decided to recreate Wordle, and called it \"Nerdle\" (courtesy of my brother Neil). I took it as an opportunity to teach myself the basics of web application development, utilizing JavaScript/HTML/CSS. I also wrote the game originally as a command-line based interface in Java(I called it Vordle, as my name starts with V) to familiarize myself with the game mechanics. I utilized data structures like dictionaries, trees, and tries as well as many algorithms to correctly implement the game logic. This project was particularly instrumental in showing me the ropes to Web Development.",
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