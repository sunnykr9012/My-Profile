import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate professional combining expertise in AI-driven data analysis and modern web development. With a strong foundation in both fields, I create data-driven web solutions that make a real impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach integrates analytical thinking with creative problem-solving, allowing me to build intuitive interfaces that effectively communicate complex data insights.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-400" />,
                title: "AI & Machine Learning",
                description: "Implementing intelligent solutions using cutting-edge AI technologies"
              },
              {
                icon: <Database className="w-8 h-8 text-blue-400" />,
                title: "Data Analysis",
                description: "Transforming raw data into actionable business insights"
              },
              {
                icon: <Code className="w-8 h-8 text-blue-400" />,
                title: "Web Development",
                description: "Building modern, responsive web applications"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-blue-950/30 hover:bg-blue-900/30 transition-colors duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;