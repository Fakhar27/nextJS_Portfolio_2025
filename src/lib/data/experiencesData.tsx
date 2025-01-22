export interface Experience {
    id: number;
    company: string;
    companyUrl: string;
    location: string;
    role: string;
    duration: string;
    type: string;
  }
  
export const experiences: Experience[] = [
    {
      id: 1,
      company: "Inotech",
      companyUrl: "https://inotechsoln.com/",
      location: "Rawalpindi",
      role: "Full Stack and DevOps Engineer",
      duration: "July 2024 - Sept 2024",
      type: "ONSITE"
    },
    {
      id: 2,
      company: "National Logistics Corporation (NLC)",
      companyUrl: "https://www.nlc.com.pk/",
      location: "Rawalpindi",
      role: "Full Stack Engineer",
      duration: "Aug 2023 - Dec 2023",
      type: "ONSITE"
    },
    {
      id: 3,
      company: "Learnobots",
      companyUrl: "https://learnobots.com/",
      location: "Islamabad",
      role: "Full Stack Developer",
      duration: "July 2023 - Aug 2023",
      type: "ONSITE"
    }
];