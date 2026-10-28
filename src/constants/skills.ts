export const DOMAIN_SKILLS: Record<string, string[]> = {
  "Web Development": ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB"],
  "App Development": ["Flutter", "Firebase", "REST APIs", "UI/UX Design", "Dart", "Android Studio"],
  Python: ["Python", "Automation", "Data Handling", "Flask", "Pandas", "NumPy"],
  "Digital Marketing": ["SEO", "Social Media Marketing", "Analytics", "Campaign Management", "Content Strategy", "Google Ads"],
  "AI/ML": ["Python", "Machine Learning", "Data Analytics", "AI Tools", "TensorFlow", "Scikit-learn"],
  "Data Science": ["Python", "Data Analysis", "Visualization", "SQL", "Pandas", "Tableau"],
  "Cybersecurity": ["Network Security", "Ethical Hacking", "Penetration Testing", "Linux", "Vulnerability Assessment"],
  "Cloud Computing": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD"],
  "UI/UX Design": ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research", "Design Systems"],
};

export const getSkills = (domain: string): string[] => {
  const key = Object.keys(DOMAIN_SKILLS).find(
    (k) => k.toLowerCase() === domain.toLowerCase()
  );
  return key ? DOMAIN_SKILLS[key] : ["Communication", "Teamwork", "Problem Solving", "Time Management", "Critical Thinking", "Adaptability"];
};

export const DOMAIN_RESPONSIBILITIES: Record<string, string[]> = {
  "Web Development": [
    "Design and develop responsive web interfaces using modern frameworks.",
    "Collaborate with the backend team to integrate APIs and data endpoints.",
    "Write clean, maintainable, and well-documented code following best practices.",
    "Participate in code reviews and contribute to architecture decisions.",
    "Optimize web applications for performance and cross-browser compatibility.",
    "Assist in testing, debugging, and deploying web features.",
  ],
  "App Development": [
    "Develop cross-platform mobile applications using Flutter and Firebase.",
    "Implement intuitive UI/UX designs into functional app screens.",
    "Integrate REST APIs and third-party services into mobile applications.",
    "Test applications on Android and iOS platforms for performance and stability.",
    "Collaborate with the design team to create user-friendly interfaces.",
    "Document code and contribute to technical project documentation.",
  ],
  Python: [
    "Write Python scripts for automation and data handling tasks.",
    "Develop and test backend logic using Python frameworks.",
    "Analyze datasets and generate insights using pandas and NumPy.",
    "Collaborate on API development and server-side logic implementation.",
    "Document processes, scripts, and workflow automations clearly.",
    "Participate in code reviews and follow team coding standards.",
  ],
  "Digital Marketing": [
    "Assist in planning and executing digital marketing campaigns across platforms.",
    "Conduct keyword research and implement on-page/off-page SEO strategies.",
    "Monitor and analyze campaign performance metrics using Google Analytics.",
    "Create and schedule engaging content for social media channels.",
    "Generate performance reports and suggest improvements based on data.",
    "Support email marketing initiatives and audience engagement strategies.",
  ],
  "AI/ML": [
    "Research and implement machine learning algorithms for real-world use cases.",
    "Preprocess and analyze datasets to build predictive models.",
    "Collaborate with the team to develop AI-powered features and solutions.",
    "Evaluate model performance using appropriate metrics and benchmarks.",
    "Document experiments, results, and model architectures systematically.",
    "Explore emerging AI tools and contribute to innovative project ideation.",
  ],
};

export const getResponsibilities = (domain: string): string[] => {
  const key = Object.keys(DOMAIN_RESPONSIBILITIES).find(
    (k) => k.toLowerCase() === domain.toLowerCase()
  );
  return (
    key
      ? DOMAIN_RESPONSIBILITIES[key]
      : [
          "Actively participate in assigned projects and deliver quality work.",
          "Collaborate with team members and communicate progress effectively.",
          "Follow organizational guidelines and professional work ethics.",
          "Demonstrate initiative, problem-solving, and creative thinking.",
          "Submit reports and documentation as required by the team.",
          "Maintain punctuality, discipline, and a positive attitude throughout.",
        ]
  );
};
