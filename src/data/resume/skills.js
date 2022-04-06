// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Java'],
  },
  {
    title: 'Spring Boot',
    competency: 3,
    category: ['Web Development', 'Framework', 'Java'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Languages', 'Javascript', 'Web Development'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Javascript', 'Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Javascript', 'Web Development'],
  },
  {
    title: 'D3',
    competency: 3,
    category: ['Javascript', 'Data Science'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Python', 'Web Development', 'Framework'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Python', 'Machine Learning'],
  },
  {
    title: 'Jupyter Notebook',
    competency: 3,
    category: ['Python', 'Data Science', 'Machine Learning'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 2,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Python', 'Machine Learning'],
  },
  {
    title: 'Hadoop',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Framework', 'Data Science'],
  },
  {
    title: 'Pytorch',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'OpenCV',
    competency: 2,
    category: ['Data Science'],
  },
  {
    title: 'Hugging Face',
    competency: 2,
    category: ['Machine Learning'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Languages', 'Web Development', 'Databases'],
  },
  {
    title: 'Prometheus/Grafana',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Postman',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Cloud Computing'],
  },
  {
    title: 'Google Cloud Platform',
    competency: 2,
    category: ['Cloud Computing'],
  },
  {
    title: 'Google Colab',
    competency: 3,
    category: ['Cloud Computing', 'Machine Learning'],
  },
  {
    title: 'Azure ML Studio',
    competency: 2,
    category: ['Cloud Computing', 'Machine Learning'],
  },
  {
    title: 'Kaggle',
    competency: 3,
    category: ['Cloud Computing', 'Machine Learning'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Weka',
    competency: 3,
    category: ['Machine Learning'],
  },
  {
    title: 'GitHub',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'LucidChart',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jira',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Trello',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Slack',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Teams',
    competency: 4,
    category: ['Tools'],
  },
  // {
  //   title: 'MongoDB',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  // {
  //   title: 'Redis',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  // // {
  // //   title: 'Typescript',
  // //   competency: 2,
  // //   category: ['Web Development', 'Languages', 'Javascript'],
  // // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
