import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Based-Lead-Generation-SAAS-Web-Application Landing page",
      description: "Lead-Generation for Business Inhance",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "AI", "JavaScript", "Bolt AI"],
      links: {
 
        github: "https://github.com/sunnykr9012/AI-Based-Lead-Generation-SAAS-Web-Application.git"
      }
    },
    {
      title: "Real Time Data Visualization Dashboard",
      description: "Real Time Interactive dashboard for complex data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Power BI"],
      links: {
       
        github: "https://github.com/sunnykr9012/Real-time-interactive-Power-BI-dashboards-for-drone-operations.git"
      }
    },
    {
      title: "Automatic-cleaning-modeling-and-quality-enhancement Excel Data ",
      description: "Inhance excel Data Qulity and Data Modeling Data Cleaning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "AI", "JavaScript", "Bolt AI"],
      links: {
      
        github: "https://github.com/sunnykr9012/Automatic-cleaning-modeling-and-quality-enhancement.git"
      }
    },
    {
      title: "Chakbandi Web Application",
      description: "land measurement",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "React.js", "Node.js", "Machine Learning" , "AWS, PostgreSQL","Leaflet"],
      links: {
      
        github: "https://github.com/sunnykr9012/Chakbandi-Project-.git"
      }
    },
    {
      title: "Web Application for Lead Generation SaaS with AI.",
      description: "Developed a lead generation web application categorize and generate targeted business leads, optimizing performance and scalability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Google API,", "Gemini AI", "Integrated AI algorithms", "Other"],
      links: {
       
        github: "https://github.com"
      }
    },
    {
      title: "WordPress content management system (CMS),",
      description: "Manage and publish digital content with ease, offering extensive customization through themes and plugins.including blogs, business sites, portfolios, and e-commerce stores, ensuring responsive design and optimal performance",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
      tags: ["WordPress"],
      links: {
        github: "https://github.com"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-950/20 via-black to-blue-950/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden bg-gradient-to-br from-blue-950/30 to-black/50 hover:from-blue-900/40 hover:to-black/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-blue-950/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-blue-900/50 text-blue-300 rounded-full group-hover:bg-blue-800/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:translate-x-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {/* Demo */}
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:translate-x-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;