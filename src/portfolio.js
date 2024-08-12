const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://krishna-sharmaa.github.io/Portfolio',
  title: 'KS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Krishna Sharma',
  role: 'Front End Engineer',
  description:
    'I am Krishna Sharma, a Front End Engineer with a passion for building responsive and engaging web applications using modern technologies like React and TypeScript. Currently pursuing a degree in Computer Science and Artificial Intelligence, I’m dedicated to continuous learning and creating impactful digital experiences.',
  resume: 'https://drive.google.com/file/d/1UbHpbGSMgKnsIzBjaHrSSM-RKoxfD2Mb/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/krishnasharma48',
    github: 'https://github.com/krishna-sharmaa',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, the Projects section won't show up
  {
    name: 'PodNews',
    description:
      'Led the development of a platform enabling users to generate personalized podcasts based on provided prompts. Utilized Ollama2, Flask2, and text-to-speech technology to create an innovative solution bridging content creation and user engagement.',
    stack: ['Ollama2', 'Flask2', 'Text-to-Speech'],
    
  },
  {
    name: 'Touchoptics',
    description:
      'Collaborated with Prof. Rucha Joshi to develop a tactile-based optics kit for visually impaired students. Designed Arduino-based prototypes and tactile diagrams to facilitate understanding of optical concepts, enhancing accessibility and inclusivity in education.',
    stack: ['Arduino', 'Prototyping', 'Education'],
    
  },
  {
    name: 'Home Credit - Credit Risk Model Stability',
    description:
      'Developed a robust machine learning model to predict client loan defaults with little to no credit history, focusing on stability and accuracy over time.',
    stack: ['Machine Learning', 'Python', 'Data Science'],
  
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'React',
  'TypeScript',
  'Git',
  'GitHub',
  'MATLAB',
  'SQL',
  'Python',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'krishna.sharma@plaksha.edu.in',
}

export { header, about, projects, skills, contact }
