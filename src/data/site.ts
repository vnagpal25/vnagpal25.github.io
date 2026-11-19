export const site = {
  name: 'Vansh Nagpal',
  description:
    'Vansh Nagpal: CS master’s student at the University of Michigan working on scalable infrastructure, fault tolerance, and ML systems.',
  // Written out so scrapers have a harder time; shown as plain text.
  emailDisplay: 'vansh.nagpal1729 [at] gmail [dot] com',
  links: [
    { label: 'github', href: 'https://github.com/vnagpal25' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/vnagpal123456' },
    {
      label: 'resume',
      href: 'https://drive.google.com/file/d/1WtFj_CEt1--SLbnjII_fv6UFQYga6V-u/view?usp=sharing',
    },
  ],
};

export type Entry = { org: string; role: string; when: string };

export const experience: Entry[] = [
  { org: 'University of Michigan', role: 'Graduate Student Instructor, EECS 280', when: '2026–now' },
  { org: 'Google Cloud', role: 'Software Engineering Intern, Hyper Accelerator Virtual Networking', when: '2026' },
  { org: 'AI Institute of South Carolina (AI4S)', role: 'Undergraduate Research Assistant', when: '2024–25' },
  { org: 'University of South Carolina, Department of Mathematics', role: 'Teaching Assistant and Grader', when: '2024–25' },
  { org: 'Blue Cross Blue Shield of South Carolina', role: 'Software Engineering Intern', when: '2024' },
  { org: 'SyReX Lab, University of South Carolina', role: 'Undergraduate Research Assistant', when: '2022–24' },
  { org: 'Thomas Jefferson National Accelerator Facility', role: 'Software Development Research Assistant', when: '2022' },
];

export const education: Entry[] = [
  { org: 'University of Michigan', role: 'M.S. Computer Science and Engineering', when: '2025–27' },
  {
    org: 'University of South Carolina',
    role: 'B.S. Computer Science (minor in Data Science) and B.S. Mathematics, summa cum laude',
    when: '2021–25',
  },
];

export type Award = { title: string; year: number; note: string };

export const awards: Award[] = [
  { year: 2024, title: 'Jeong S. Yang Award for Excellence in Undergraduate Mathematics', note: 'Given each year to select outstanding mathematics majors at the University of South Carolina.' },
  { year: 2024, title: 'Thomas Markham Mathematics Scholarship', note: 'Given each year to an outstanding mathematics major with significant extracurricular mathematical activity.' },
  { year: 2024, title: 'South Carolina Internship Program', note: '$3,000 for completing an in-state industry internship.' },
  { year: 2024, title: 'DAAD RISE Fellowship', note: 'Awarded to pursue a research internship in Germany.' },
  { year: 2024, title: 'Cocky Hacks Hackathon, Best Idea Award', note: '$200 to the team with the best idea.' },
  { year: 2024, title: 'USC President’s Honor List (6×)', note: 'For a 4.00 GPA in a semester.' },
  { year: 2023, title: 'ACM Code-a-Thon, 1st Place (Fall 2023)', note: 'First to finish the interview-style problems in the data structures and algorithms division.' },
  { year: 2023, title: 'Magellan Scholar Research Grant', note: '$3,000 for mentored research with Dr. Sanjib Sur at the SyReX Lab.' },
  { year: 2023, title: 'Boeing Scholarship (2×)', note: '$1,500 for academic motivation and significant community involvement.' },
  { year: 2023, title: 'Pi Mu Epsilon', note: 'Initiated into the mathematics honor society.' },
  { year: 2023, title: 'Tau Beta Pi Scholarship', note: '$2,000 to an involved member for their penultimate year of study.' },
  { year: 2023, title: 'Jack Price Scholarship', note: '$1,000 to an engineering student for exemplary academics.' },
  { year: 2023, title: 'Marva Smalls Scholarship', note: 'For academic excellence in engineering.' },
  { year: 2022, title: 'Tau Beta Pi', note: 'Initiated into the engineering honor society; later served as VP of the SC Beta chapter.' },
  { year: 2021, title: 'Academic Scholar, Excellence Award', note: '$23,000 per year for four years, for students in the top 6% of their class.' },
  { year: 2021, title: 'Dr. William C. Alexander Excellence in Research Award', note: 'For excellence in mentored summer research.' },
  { year: 2021, title: 'SCGSSM Excellence in Mathematics Award', note: 'For excellence in mathematics.' },
  { year: 2020, title: 'SC Junior Academy of Science, 2nd Place', note: 'Mentored research in the physics, engineering, and mathematics division.' },
];
