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
      description: 'An AI-powered legal consultation chatbot leveraging Spanish BOE APIs to provide up-to-date guidance on tax regulations and legal matters.',
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
      description: 'AI-driven content creation platform that transforms text prompts into engaging short-form videos by combining automated voice-overs with AI-generated visuals.',
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
      description: 'Smart diet planning system that leverages AI to generate personalized weekly meal plans based on individual fitness goals and preferences.',
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
      description: 'Interactive platform for discovering and sharing campsite locations, featuring real-time mapping and cloud-based image management.',
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
      description: 'Comprehensive content management system facilitating B2B and B2P interactions with cloud-based document handling.',
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
      description: 'Cloud-based pharmacy operations platform streamlining inventory management and digital prescription processing.',
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