export interface Project {
    id: string;
    title: string;
    description: string;
    stack: string[];
    images: string[];
    link: string;
  }
  
  export const projects: Project[] = [
    {
      id: '1',
      title: 'MyConsultor',
      description: 'AI legal consultation chatbot using Spanish BOE APIs for instant tax and legal guidance.',
      stack: [
        'FlutterFlow',
        'GCP Cloud Functions',
        'Firebase',
        'OpenAI Assistants'
      ],
      images: [
        '/project/myConsultor/Screenshot (1665).png',
        '/project/myConsultor/Screenshot (1648).png',
        '/project/myConsultor/Screenshot (1649).png',
        '/project/myConsultor/Screenshot (1650).png',
        '/project/myConsultor/Screenshot (1651).png',
        '/project/myConsultor/Screenshot (1652).png'
      ],
      link: "https://github.com/",
    },
    {
      id: '2',
      title: 'ProGen',
      description: 'AI platform converts prompts to short videos with automated voice-overs and AI visuals',
      stack: [
        'Django',
        'Next.js',
        'PostgreSQL',
        'Docker',
        'AWS SageMaker',
        'LangChain',
        'Stable Diffusion'
      ],
      images: [
        '/project/fyp/Screenshot (1015).png',
        '/project/fyp/Screenshot (1016).png',
        '/project/fyp/Screenshot (1017).png',
        '/project/fyp/Screenshot (1018).png',
      ],
      link: "https://github.com/",
    },
    {
      id: '3',
      title: 'i Diet',
      description: 'AI-powered meal planning system generating weekly plans based on fitness goals',
      stack: [
        'Next.js',
        'NextAuth',
        'MongoDB',
        'Make',
        'Docker'
      ],
      images: [
        '/project/dietAutomation/Screenshot (1638).png',
        '/project/dietAutomation/Screenshot (1639).png',
        '/project/dietAutomation/Screenshot (1640).png',
        '/project/dietAutomation/Screenshot (1641).png',
        '/project/dietAutomation/Screenshot (1643).png'
      ],
      link: "https://github.com/",
    },
    {
      id: '4',
      title: 'YelpCamp',
      description: 'Campsite discovery platform with real-time mapping and cloud image management.',
      stack: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Cloudinary',
        'Mapbox'
      ],
      images: [
        '/project/yelp/screenshot (246).png',
        '/project/yelp/screenshot (248).png',
        '/project/yelp/screenshot (249).png',
        '/project/yelp/screenshot (251).png',
        '/project/yelp/screenshot (252).png',
      ],
      link: "https://github.com/",
    },
    {
      id: '5',
      title: 'Enterprise Registration System',
      description: 'B2B/B2P content management system with cloud-based document handling',
      stack: [
        'Django',
        'MongoDB',
        'Bootstrap',
        'AWS EC2',
        'AWS S3'
      ],
      images: [
        '/project/nlcRegistration/Screenshot (1627).png',
        '/project/nlcRegistration/Screenshot (1628).png',
        '/project/nlcRegistration/Screenshot (1629).png',
        '/project/nlcRegistration/Screenshot (1630).png',
        '/project/nlcRegistration/Screenshot (1631).png',
        '/project/nlcRegistration/Screenshot (1632).png',
        '/project/nlcRegistration/Screenshot (1633).png',
        '/project/nlcRegistration/Screenshot (1634).png'
      ],
      link: "https://github.com/",
    },
    {
      id: '6',
      title: 'Pharmacy Management System',
      description: 'Cloud pharmacy platform for inventory and digital prescription management.',
      stack: [
        'Django',
        'Bootstrap',
        'AWS EC2'
      ],
      images: [
        '/project/pharmacy/Screenshot (70).png',
        '/project/pharmacy/Screenshot (71).png',
        '/project/pharmacy/Screenshot (72).png',
        '/project/pharmacy/Screenshot (73).png',
        '/project/pharmacy/Screenshot (74).png',
        '/project/pharmacy/Screenshot (75).png',
        '/project/pharmacy/Screenshot (76).png',
        '/project/pharmacy/Screenshot (77).png'
      ],
      link: "https://github.com/",
    }
  ];