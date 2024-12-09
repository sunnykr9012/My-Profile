import React from 'react';
import { Code2, Database, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-blue-950/50 to-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-rotating-globe-in-3d-animation-5998-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-blue-950/30 to-black" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6 animate-bounce">
            <Code2 className="w-8 h-8 text-blue-400" />
            <Database className="w-8 h-8 text-blue-400" />
            <LineChart className="w-8 h-8 text-blue-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
          
       
            
           
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            HELLO I AM SUNNY
            </span>
            <br></br>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Data Analyst & AI Web Developer
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Transforming data into insights and ideas into interactive experiences. Building modern, responsive web applications
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;