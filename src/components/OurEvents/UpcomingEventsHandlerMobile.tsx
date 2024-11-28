import React, { useState, useRef } from "react";

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
  const touchStartRef = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  // Handle swipe events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX; // Store the starting touch position
  };

  const handleTouchMove = () => {
    // Optional: Handle visual feedback
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX; // Get the final touch position
    const swipeThreshold = 50; // Set a threshold for the swipe distance

    if (touchStartRef.current - touchEnd > swipeThreshold) {
      // Swipe left, go to the next slide
      nextSlide();
    } else if (touchEnd - touchStartRef.current > swipeThreshold) {
      // Swipe right, go to the previous slide
      prevSlide();
    }
  };

  return (
    <div
      className="carousel-container p-4 rounded-lg overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-300 gap-1"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="border-2 border-gray-300 p-4 rounded-lg min-h-full flex flex-col md:flex-row items-center min-w-full"
          >
            {/* Image Section */}
            <div className="w-full md:w-2/5 h-full mb-4 md:mb-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Description Section */}
            <div className="w-full md:w-3/5 flex flex-col justify-center">
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
      <div className=" ml-2 mt-3 left-1/2 space-x-2">
        <p className="text-gray-600 text-2xl">
          {currentIndex + 1} / {events.length}
        </p>
      </div>
    </div>
  );
};

export default EventCarousel;
