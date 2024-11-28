import React, { useState } from "react";

// Define the event data type
interface Event {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    date: "01 OCT",
    time: "12:00 PM",
    title: "Orange Pip Market",
    description:
      "Orange Pip Market - artisan food market on Baker & Bedford Street in Middlesbrough - running on the last Saturday of every month 12-7.",
    image: "https://www.menuguildsystem.com/wp-content/uploads/2024/11/tuyu.jpg",
  },
  {
    id: 2,
    date: "02 OCT",
    time: "7:00 PM",
    title: "Secret Club Cinema - Twisted Lips",
    description:
      "The Twisted Lip proudly presents Teesside’s 1st ever secret cinema club, EVERY Monday.",
    image: "https://www.menuguildsystem.com/wp-content/uploads/2024/11/tuyu.jpg",
  },
  {
    id: 3,
    date: "03 OCT",
    time: "9:00 AM",
    title: "Bridge Bungee Jump",
    description:
      "As the UK’s first commercial Bridge Bungee Jump, the Tees Transporter Bridge Bungee Jump has a lot to offer.",
    image: "https://www.menuguildsystem.com/wp-content/uploads/2024/11/tuyu.jpg",
  },
];

const EventCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="carousel-container p-4 rounded-lg overflow-hidden relative">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-300 gap-2"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="border-2 border-gray-300 p-4 rounded-lg h-full flex items-center min-w-full"
          >
            {/* Image Section */}
            <div className="w-2/5 h-full mr-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Description Section */}
            <div className="w-3/5 flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>{event.date}</strong> - {event.time}
              </p>
              <p className="text-sm text-gray-800">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Number Indicator */}
      <div className="absolute mt-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <p className="text-gray-600 text-2xl">
          {currentIndex + 1} / {events.length}
        </p>
      </div>

      {/* Previous and Next Buttons */}
      <div className="mt-4 left-4 transform space-x-4">
        <button
          onClick={prevSlide}
          className="text-gray-800 bg-white rounded-full p-4 shadow-md hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12.293 4.293a1 1 0 011.414 1.414L8.414 10l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="text-gray-800 bg-white rounded-full p-4 shadow-md hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M7.707 15.707a1 1 0 01-1.414-1.414L11.586 10 6.293 4.707a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
