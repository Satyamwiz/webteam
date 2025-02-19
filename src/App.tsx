import React, { useState } from 'react';
import { Sun, Moon, Code2, Palette, Layout } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  photo: string;
  description: string;
};

const teams = {
  backend: {
    title: "Backend Team",
    icon: <Code2 className="w-6 h-6" />,
    members: [
      {
        name: "Siddhant",
        role: "Backend Developer",
        photo: "/sid.jpg",
        description: "Cloud infrastructure and DevOps specialist"
      },
      {
        name: "Darshan",
        role: "Backend Developer",
        photo: "/dar.jpg",
        description: "Microservices and distributed systems expert"
      },
      {
        name: "Soham Deshpande",
        role: "Backend Developer",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
        description: "Lead backend architect specializing in scalable systems"
      },
      {
        name: "Atharva",
        role: "Backend Developer",
        photo: "/ath.jpg",
        description: "Database optimization and security specialist"
      },
      {
        name: "Tanay",
        role: "Backend Developer",
        photo: "/tanay.jpeg",
        description: "API architecture and performance expert"
      },
     
    ]
  },
  frontend: {
    title: "Frontend Team",
    icon: <Layout className="w-6 h-6" />,
    members: [
      {
        name: "Satyam",
        role: "Frontend Developer",
        photo: "/satyam.jpg",
        description: "React performance optimization expert"
      },
      {
        name: "Shravani",
        role: "Frontend Developer",
        photo: "/shr.jpg",
        description: "Component architecture and state management specialist"
      }
    ]
  },
  design: {
    title: "Design Team",
    icon: <Palette className="w-6 h-6" />,
    members: [
      {
        name: "Deepika",
        role: "UI/UX Designer",
        photo: "./dpika.jpg",
        description: "Lead designer focusing on user experience"
      },
      {
        name: "Mokshada",
        role: "UI/UX Designer",
        photo: "./mok.jpg",
        description: "Visual design and branding specialist"
      },
      {
        name: "Shraddha",
        role: "UI/UX Designer",
        photo: "./srada.jpg",
        description: "Interaction design and prototyping expert"
      }
    ]
  }
};

function App() {
  const [darkMode] = useState(true);
  const [activeTeam, setActiveTeam] = useState<keyof typeof teams>('frontend');

 
    
  

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-50`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Wall Street Web Team</h1>
          {/* <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Team Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(teams).map(([key, team]) => (
            <button
              key={key}
              onClick={() => setActiveTeam(key as keyof typeof teams)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300
                ${activeTeam === key 
                  ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                  : (darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100')}
                shadow-md`}
            >
              {team.icon}
              <span>{team.title}</span>
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams[activeTeam].members.map((member: TeamMember) => (
            <div
              key={member.name}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105
                ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full  object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className={`text-sm mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {member.role}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;