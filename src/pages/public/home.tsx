import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../index.css";

// Mengimpor gambar menggunakan import dari folder assets
import img1 from "../../assets/NCBB_Hero_Photo/1.jpg"
import img2 from "../../assets/NCBB_Hero_Photo/2.jpg";
import img3 from "../../assets/NCBB_Hero_Photo/3.jpg";
import img5 from "../../assets/NCBB_Hero_Photo/5.jpg";
import img6 from "../../assets/NCBB_Hero_Photo/6.jpg";
import img4 from "../../assets/NCBB_Hero_Photo/4.jpg";
import img7 from "../../assets/NCBB_Hero_Photo/7.jpg";
import img8 from "../../assets/NCBB_Hero_Photo/8.jpg";
// Tambahkan gambar lainnya sesuai kebutuhan

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array gambar untuk slideshow yang sudah di-impor
  const slides = [img1, img2, img3, img4, img5,img6,img7,img8]; // Sesuaikan jumlah dan urutan gambar

  // Mengubah slide setiap 10 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Ganti setiap 10 detik
    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, [slides.length]);

  return (
    <div className="home-page">
      <Navbar />
      <div className="hero-section bg-gray-100 flex items-center justify-center h-screen relative">
        {/* Slideshow Background */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-65 z-0" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
        <a href=""><img src="https://readme-typing-svg.demolab.com?font=Funnel+Display&size=50&pause=1000&color=F7F7F7&center=true&vCenter=true&random=true&width=900&height=84&lines=%E7%A7%81%E3%81%9F%E3%81%A1%E3%81%AE%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%B8%E3%82%88%E3%81%86%E3%81%93%E3%81%9D;Welcome+to+Our+Platform" alt="Typing SVG" /></a>
          <p className="text-lg md:text-xl mb-6">
            Building the future with cutting-edge technology and innovation.
          </p>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2 transition duration-200">
              Get Started
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-md transition duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
