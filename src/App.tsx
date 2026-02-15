import React, { useState } from 'react';
import { Code2, Palette, Layout } from 'lucide-react';

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
        name: "Shashwat",
        role: "Backend Developer",
        photo: "/Shashwat.jpg",
        description: "Backend systems and core logic"
      },
      {
        name: "Yash",
        role: "Backend Developer",
        photo: "/Yash.jpg",
        description: "API and service development"
      },
      {
        name: "Darshan",
        role: "Backend Developer",
        photo: "/Darshan.jpg",
        description: "Database optimization and security"
      },
      {
        name: "Arjun",
        role: "Backend Developer",
        photo: "/Arjun.jpg",
        description: "Backend infrastructure and integrations"
      },
      {
        name: "Satyam",
        role: "Backend Developer",
        photo: "/Satyam.jpg",
        description: "Backend infrastructure and integrations"
      },
      {
        name: "Siddhant",
        role: "Backend Developer",
        photo: "/Siddhant.jpg",
        description: "Backend infrastructure and integrations"
      }
    ]
  },

  frontend: {
    title: "Frontend Team",
    icon: <Layout className="w-6 h-6" />,
    members: [
      {
        name: "Siddhesh",
        role: "Frontend Developer",
        photo: "/Siddhesh.jpg",
        description: "UI development and responsiveness"
      },
      {
        name: "Sumukh",
        role: "Frontend Developer",
        photo: "/Sumukh.jpg",
        description: "Frontend logic and component structure"
      }
    ]
  },

  legacy: {
    title: "Legacy Code Team",
    icon: <Palette className="w-6 h-6" />,
    members: [
      {
        name: "Soham",
        role: "Legacy Systems Engineer",
        photo: "/Soham.jpg",
        description: "Maintaining and refactoring legacy code"
      },
      {
        name: "Tanay",
        role: "Legacy Systems Engineer",
        photo: "/Tanay.jpg",
        description: "Maintaining and refactoring legacy code"
      },

      {
        name: "Atharva",
        role: "Legacy Systems Engineer",
        photo: "/Atharva.jpg",
        description: "Backward compatibility and system stability"
      },
      {
        name: "Darshan",
        role: "Legacy Systems Engineer",
        photo: "/Darshan.jpg",
        description: "Legacy database and logic handling"
      },
      {
        name: "Siddhant",
        role: "Legacy Systems Engineer",
        photo: "/Siddhant.jpg",
        description: "Optimizing and documenting old systems"
      },
      {
        name: "Satyam",
        role: "Legacy Systems Engineer",
        photo: "/Satyam.jpg",
        description: "Debugging and maintaining legacy flows"
      }
    ]
  }
};

function App() {
  const [darkMode] = useState(true);
  const [activeTeam, setActiveTeam] =
    useState<keyof typeof teams>('frontend');

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Header */}
      <header
        className={`fixed w-full ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg z-50`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Wall Street Web Team</h1>
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
                ${
                  activeTeam === key
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : darkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-gray-100'
                }
                shadow-md`}
            >
              {team.icon}
              <span>{team.title}</span>
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams[activeTeam].members.map((member) => (
            <div
              key={member.name}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p
                  className={`text-sm mb-3 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {member.role}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
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
