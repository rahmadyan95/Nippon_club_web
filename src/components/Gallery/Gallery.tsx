import React, { useState } from 'react';
import akapan from "../../assets/akapan.png"
import akapan2 from "../../assets/akapan2.jpg"
import akapan3 from "../../assets/Akapan3.jpg"
import akapan4 from "../../assets/Akapan_cosplay.png"
import akapan5 from "../../assets/akapanaktivis.png"

// import nishi from "../../assets/Nishi.png

const artData = [
  {
    id: 1,
    title: "Akapan-chan",
    image: akapan,
    description: "One of the Nippon Club's mascots that represent the Nippon Cub @Bandung region. Her name is Aka-Pan, an Independent red panda who being given bless by God and also have a ability to changed herself into half human half Red panda from the bell that the god gave to her. Her name is based on Japanese of red (Akai) and Pan for short Panda.",
    color: "bg-gray-200",
    mascot_author: "Anohito",
    ig_link : ''
  },
  {
    id: 2,
    title: "Artwork 2",
    image: akapan2,
    description: "Capturing the essence of movement and emotion.",
    color: "bg-gray-200",
    mascot_author: "Anohito",
    ig_link : ''
  },
  {
    id: 3,
    title: "Artwork 3",
    image: akapan3,
    description: "A narrative of light and shadow.",
    color: "bg-gray-200",
    mascot_author: "Anohito",
    ig_link : ''
  },
  {
    id: 4,
    title: "Guardians of the Celestial Twilight",
    image: akapan5,
    description: "Aka-Pan, as a figure blessed by God, guards the spirit and magic she possesses through the bell that grants her the ability to transform. The illustration portrays the mystical and graceful aura of Aka-Pan, with a starry background emphasizing her status as a celestial guardian of the magical realm. The bell around her neck serves as a crucial element that ties her to her story and abilities.",
    color: "bg-gray-200",
    mascot_author: "@kuroo.nyx",
    ig_link : 'https://www.instagram.com/kuroo.nyx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  },
  {
    id: 5,
    title: "Akapan Cosplay",
    image: akapan4,
    description: "Exploring the boundaries of perception.",
    color: "bg-gray-200",
    mascot_author: "@reiko_mika",
    ig_link : 'https://www.instagram.com/reiko_mika?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
  },
  {
    id: 6,
    title: "Artwork 6",
    image: akapan,
    description: "A symphony of texture and color.",
    color: "bg-gray-200",
    mascot_author: "Anohito",
  },
];

const ArtGallery: React.FC = () => {
  const [hoveredArt, setHoveredArt] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {artData.map((art) => (
        <div
          key={art.id}
          className={`
            w-full h-[800px]
            relative overflow-hidden group 
            ${art.color}
          `}
          onMouseEnter={() => setHoveredArt(art.id)}
          onMouseLeave={() => setHoveredArt(null)}
        >
          {/* Art Image */}
          <img
            src={art.image}
            alt={art.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Description */}
          {hoveredArt === art.id && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-start justify-center py-10 transition-all duration-300 w-full">
            <div className="text-left text-white px-6 sm:px-10">
              <h3 className="text-5xl mb-1 font-norwester break-words">{art.title}</h3>
              <a href={art.ig_link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold mb-4">{art.mascot_author}</a>
              <p className="text-lg break-words mt-5">{art.description}</p>
            </div>
          </div>
          
          )}
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;
