import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Programming",
      items: ["Python", "JavaScript", "TypeScript", "SQL", "R"]
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "Next.js", "TailwindCSS", "GraphQL"]
    },
    {
      category: "Operations Management",
      items: ["Projects Management", "Business Analysis", "Geographic Information Systems (GIS)", "Data Management", "Data Research"]
    },
    {
      category: "Data Science",
      items: ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Power BI"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "Azure", "Jupyter"]
    },
   
  ];

  return (
    <section id="skills" className="py-20 bg-blue-950/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-black/50 hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="relative">
                    <div className="h-2 bg-blue-900/50 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        style={{
                          width: `${Math.random() * 30 + 70}%`,
                          animation: 'growWidth 1.5s ease-out'
                        }}
                      />
                    </div>
                    <span className="text-gray-300 text-sm mt-1 block">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;