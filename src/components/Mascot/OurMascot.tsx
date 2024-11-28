import React, { useState } from 'react';

// Placeholder image - replace with your actual mascot images
import akapan from "../../assets/akapan.png"
const placeholderImage = akapan;

const mascotData = [
    {
      id: 1,
      name: "DPI",
      image: placeholderImage,
      description: "A symbol of creativity and innovation.",
      color: "bg-[#FF6962]" // Soft pastel pink
    },
    {
      id: 2,
      name: "EDUCATION", 
      image: placeholderImage,
      description: "Representing unity and collaboration.",
      color: "bg-[#77DD76]" // Soft pastel blue (powder blue)
    },
    {
      id: 3,
      name: "MEDIA",
      image: placeholderImage,
      description: "Embodying passion and energy.",
      color: "bg-[#FFD5D4]" // Soft pastel green
    },
    {
      id: 4,
      name: "COMMUNITY SUPPORT",
      image: placeholderImage,
      description: "A beacon of leadership and strength.",
      color: "bg-[#a7a1dc]" // Soft pastel lavender
    },
    {
      id: 5,
      name: "JOURNALISTIC",
      image: placeholderImage,
      description: "Symbolizing growth and potential.",
      color: "bg-[#FAFAD2]" // Soft pastel yellow (light goldenrod)
    },
    {
      id: 6,
      name: "PUBLIC RELATION",
      image: placeholderImage,
      description: "Celebrating diversity and inclusivity.",
      color: "bg-[#FEDD9E]" // Soft pastel peach
    }
  ];

const OurMascot: React.FC = () => {
  const [hoveredMascot, setHoveredMascot] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap md:flex-nowrap w-full h-auto md:h-[650px] shadow-2xl mb-32">
      {mascotData.map((mascot) => (
        <div 
          key={mascot.id}
          className={`
            w-full md:w-1/6 h-[400px] md:h-full 
            relative overflow-hidden group 
            ${mascot.color}
          `}
          onMouseEnter={() => setHoveredMascot(mascot.id)}
          onMouseLeave={() => setHoveredMascot(null)}
        >
          {/* Mascot Image */}
          <img 
            src={mascot.image} 
            alt={mascot.name} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Hover Description */}
          {hoveredMascot === mascot.id && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 transition-all duration-300">
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold mb-4">{mascot.name}</h3>
                <p className="text-lg">{mascot.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OurMascot;