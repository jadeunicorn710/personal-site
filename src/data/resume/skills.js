const skills = [
  // Languages
  { title: 'Python', competency: 4, category: ['Languages'] },
  { title: 'Java', competency: 4, category: ['Languages'] },
  { title: 'Go', competency: 4, category: ['Languages'] },
  { title: 'JavaScript', competency: 4, category: ['Languages'] },
  { title: 'TypeScript', competency: 3, category: ['Languages'] },
  { title: 'SQL', competency: 4, category: ['Languages'] },
  { title: 'HTML + CSS', competency: 3, category: ['Languages'] },

  // Web & Backend
  { title: 'Node.JS', competency: 4, category: ['Web & Backend'] },
  { title: 'React', competency: 3, category: ['Web & Backend'] },
  { title: 'Spring Boot', competency: 3, category: ['Web & Backend'] },
  { title: 'Flask', competency: 3, category: ['Web & Backend'] },
  { title: 'Nginx', competency: 2, category: ['Web & Backend'] },
  { title: 'Postman', competency: 3, category: ['Web & Backend'] },
  { title: 'MySQL', competency: 3, category: ['Web & Backend'] },
  { title: 'PostgreSQL', competency: 3, category: ['Web & Backend'] },

  // Cloud & Infrastructure
  { title: 'Amazon Web Services', competency: 5, category: ['Cloud & Infrastructure'] },
  { title: 'Google Cloud Platform', competency: 2, category: ['Cloud & Infrastructure'] },
  { title: 'Kubernetes', competency: 4, category: ['Cloud & Infrastructure'] },
  { title: 'Docker', competency: 4, category: ['Cloud & Infrastructure'] },
  { title: 'Slurm', competency: 3, category: ['Cloud & Infrastructure'] },
  { title: 'Prometheus/Grafana', competency: 4, category: ['Cloud & Infrastructure'] },

  // AI/ML Training
  { title: 'PyTorch', competency: 4, category: ['AI/ML Training'] },
  { title: 'TensorFlow + Keras', competency: 3, category: ['AI/ML Training'] },
  { title: 'Scikit-Learn', competency: 3, category: ['AI/ML Training'] },
  { title: 'Ray', competency: 4, category: ['AI/ML Training'] },
  { title: 'Hugging Face', competency: 3, category: ['AI/ML Training'] },
  { title: 'Spark', competency: 2, category: ['AI/ML Training'] },

  // GenAI
  { title: 'Harness Engineering', competency: 3, category: ['GenAI'] },
  { title: 'Prompt Engineering', competency: 4, category: ['GenAI'] },
  { title: 'RAG', competency: 3, category: ['GenAI'] },

  // Agentic AI
  { title: 'Kiro', competency: 4, category: ['Agentic AI'] },
  { title: 'MCP Server', competency: 4, category: ['Agentic AI'] },
  { title: 'Agent Skills', competency: 4, category: ['Agentic AI'] },

  // Data & Analytics
  { title: 'Pandas', competency: 3, category: ['Data & Analytics'] },
  { title: 'Numpy', competency: 3, category: ['Data & Analytics'] },
  { title: 'Tableau', competency: 3, category: ['Data & Analytics'] },
  { title: 'D3', competency: 3, category: ['Data & Analytics'] },
  { title: 'Jupyter Notebook', competency: 3, category: ['Data & Analytics'] },

  // DevOps & Tools
  { title: 'Git', competency: 4, category: ['DevOps & Tools'] },
  { title: 'OpenCV', competency: 2, category: ['DevOps & Tools'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// number of colors must match number of unique categories
const colors = [
  '#6968b3', // Agentic AI
  '#37b1f5', // AI/ML Training
  '#40494e', // Cloud & Infrastructure
  '#515dd4', // Data & Analytics
  '#e47272', // DevOps & Tools
  '#cc7b94', // GenAI
  '#3896e2', // Languages
  '#64cb7b', // Web & Backend
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
