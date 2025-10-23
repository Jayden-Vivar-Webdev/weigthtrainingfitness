import React from 'react';
import { Trophy, Users, Dumbbell, TrendingUp, ArrowRight } from 'lucide-react';

export default function FitnessStatsSection() {
  const stats = [
    {
      stat: "500+",
      description: "Clients Transformed",
      icon: Users
    },
    {
      stat: "15+",
      description: "Years Experience",
      icon: Trophy
    },
    {
      stat: "10k+",
      description: "Training Sessions",
      icon: Dumbbell
    },
    {
      stat: "98%",
      description: "Success Rate",
      icon: TrendingUp
    }
  ];

  return (
    <div className="relative lg:pb-20 pt-2 px-0 mb-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 via-red-700 to-black"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-12">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card background with hover effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10"></div>
                
                {/* Card content */}
                <div className="relative py-6 px-3 text-center space-y-4 sm:p-6 ">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  
                  {/* Stat number */}
                  <div className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                    {item.stat}
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm lg:text-lg font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white/50 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Optional CTA section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Body?
          </h3>
          <div className="mt-10 flex items-center justify-center">
                <a
                    href="/contact"
                    className="flex items-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-lg font-semibold text-white shadow-lg 
                            hover:bg-red-600 hover:scale-105 transition transform duration-200 ease-in-out
                            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                    Get started
                    <ArrowRight className="w-5 h-5" />
                </a>
          </div>

        </div>
      </div>
    </div>
  );
}