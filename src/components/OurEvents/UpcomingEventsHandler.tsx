import React, { useState } from "react";
import { ArrowForwardOutline, ArrowBackOutline, TimeOutline, CalendarOutline } from "react-ionicons";

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
    date: "2024-12-14",
    time: "12:00 PM",
    title: "Anime Art Ilustration",
    description:
      "Join us for an engaging online seminar focused on the art of anime illustration! Whether you're a beginner or a seasoned artist, this event will provide valuable insights into the techniques and styles that define anime art.",
    image: "https://marketplace.canva.com/EAF48rR761g/1/0/1600w/canva-white-and-black-anime-desktop-wallpaper-AUoZtlA5cIQ.jpg",
  },
  {
    id: 2,
    date: "2024-10-02",
    time: "7:00 PM",
    title: "Secret Club Cinema - Twisted Lips",
    description:
      "The Twisted Lip proudly presents Teesside’s 1st ever secret cinema club, EVERY Monday.",
    image: "https://www.menuguildsystem.com/wp-content/uploads/2024/11/tuyu.jpg",
  },
  {
    id: 3,
    date: "2024-10-02",
    time: "9:00 AM",
    title: "Bridge Bungee Jump",
    description:
      "As the UK’s first commercial Bridge Bungee Jump, the Tees Transporter Bridge Bungee Jump has a lot to offer.",
    image: "https://www.menuguildsystem.com/wp-content/uploads/2024/11/tuyu.jpg",
  },
];

// Utility function to calculate days left
const calculateDaysLeft = (eventDate: string) => {
  const today = new Date();
  const eventDay = new Date(eventDate);
  const timeDiff = eventDay.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

const EventCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const handleEventClick = (eventTitle: string) => {
    // Replace with actual URLs for each event
    const eventUrls: { [key: string]: string } = {
      "Orange Pip Market": "https://example.com/orange-pip-market",
      "Secret Club Cinema - Twisted Lips": "https://example.com/secret-club-cinema",
      "Bridge Bungee Jump": "https://example.com/bridge-bungee-jump",
    };

    const url = eventUrls[eventTitle];
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="carousel-container p-4 rounded-lg overflow-hidden relative">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-300 gap-2"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event) => {
          const daysLeft = calculateDaysLeft(event.date);

          return (
            <div
              key={event.id}
              onClick={() => handleEventClick(event.title)}
              className="border-2 border-gray-300 p-4 rounded-lg h-full flex items-center min-w-full bg-white shadow-md hover:bg-gray-100 cursor-pointer"
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
              <div className="w-3/5 flex flex-col justify-start">
                {/* Days Left Section */}
                <div className="bg-red-500 text-white p-2 rounded-lg mb-2 text-center w-32">
                  {daysLeft} Days Left
                </div>
                <h2 className="text-4xl font-boxed font-bold mb-5 text-red-500 text-wrap">{event.title}</h2>
                <div className="flex items-center mb-2">
                  <CalendarOutline color={"#fb5659"} title={""} height="28px" width="28px" />
                  <p className="text-lg text-gray-600 font-semibold ml-2">{event.date}</p>
                </div>
                <div className="flex items-center mb-5">
                  <TimeOutline color={"#fb5659"} title={""} height="28px" width="28px" />
                  <p className="text-lg text-gray-600 font-semibold ml-2">{event.time}</p>
                </div>
                <p className="text-base text-gray-800">{event.description}</p>
              </div>
            </div>
          );
        })}
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
          <ArrowBackOutline color={"#00000"} height="30px" width="30px" />
        </button>
        <button
          onClick={nextSlide}
          className="text-gray-800 bg-white rounded-full p-4 shadow-md hover:bg-gray-200"
        >
          <ArrowForwardOutline color={"#00000"} height="30px" width="30px" />
        </button>
      </div>
    </div>
  );
};

export default EventCarousel;
