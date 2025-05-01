import { FaCode, FaDatabase, FaShieldAlt, FaGlobe } from "react-icons/fa"; // Import Icons

const skills = [
  { name: "Competitive Programming", percentage: 78, icon: <FaCode className="text-yellow-400 text-2xl" /> },
  { name: "Full Stack Web Development", percentage: 76, icon: <FaGlobe className="text-yellow-400 text-2xl" /> },
  { name: "Artificial Intelligence", percentage: 70, icon: <FaShieldAlt className="text-yellow-400 text-2xl" /> },
  { name: "Database", percentage: 80, icon: <FaDatabase className="text-yellow-400 text-2xl" /> },
];

export default function SkillsSection() {
  return (
    <div className="max-w-6xl flex-1 ml-0 mx-auto mt-16 px-8">
      {/* Updated Heading Color */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-8">
        My Skills
      </h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center">{skill.icon}</div>

            {/* Skill Name & Progress */}
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-white">{skill.name}</p>
                <p className="text-yellow-400 font-bold">{skill.percentage}%</p>
              </div>

              {/* Progress Bar with Gradient */}
              <div className="h-3 w-full bg-gray-700 rounded-full mt-1 relative">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
