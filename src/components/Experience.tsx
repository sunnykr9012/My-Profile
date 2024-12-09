import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Full Stack Developer ",
      company: "Drone Destination Ltd",
      period: "2022 - 2024",
      location: "Delhi, India",
      description: "Data Analyst & MERN-Stack Developer with 2+ years of experience in data-driven insights, workflow optimization, and cross-functional projects. Proficient in Python, Java, React.js, AWS, and the MERN stack, with expertise in analytics, project management, Operations Management, Projects Management, Business Analysis, Data Analysis, Geographic Information Systems (GIS), Data Research and Data Management, MIS, Data Collections."
    },
    {
      title: "Web Developer",
      company: "Vintron Informatics Ltd",
      period: "2022 - 2022",
      location: "Delhi, India",
      description: "Developed and maintained enterprise-level web applications using React and Node.jsDeveloped and maintained diverse websites, including blogs, business sites, portfolios, and e-commerce stores, ensuring responsive design and optimal performance.WordPress content management system (CMS), Manage and publish digital content with ease, offering extensive customization through themes and plugins."
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 -translate-x-[3px]" />
              
              <div className="p-6 rounded-lg bg-blue-950/30 hover:bg-blue-900/30 transition-all duration-300 transform hover:-translate-x-2">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-blue-400 font-medium">{exp.company}</span>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
                
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;