import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../../index.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button"
// import akapan from "../../assets/akapan.png"
import Curtain from "../../components/OurDivision/CurtainAccordion"
import PhoneCurtain from "../../components/OurDivision/PhoneCurtainAccordion"
import MascotDIV from "../../components/Mascot/OurMascot"




// Mengimpor gambar menggunakan import dari folder assets
const img1 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/1.jpg";
const img2 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/2.jpg";
const img3 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/3.jpg";
const img4 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/4.jpg";
const img5 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/5.jpg";
const img6 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/6.jpg";
const img7 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/7.jpg";
const img8 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/8.jpg";

// import akapan from "../../assets/akapan.png"

// // Tambahkan gambar lainnya sesuai kebutuhan

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array gambar untuk slideshow yang sudah di-impor
  const slides = [img7, img8, img3, img4, img5, img6, img1, img2]; 
  // const slides = [img4];// Sesuaikan jumlah dan urutan gambar

  // Mengubah slide setiap 15 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 15000);
    return () => clearInterval(interval); // Membersihkan interval saat komponen di-unmount
  }, [slides.length]);

  const words = ["ようこそ","Welcome", "Selamat\nDatang"];
  const [fade, setFade] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Aktifkan efek fade-out
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length); // Ganti kata
        setFade(false); // Aktifkan efek fade-in
      }, 500); // Sinkronkan waktu animasi fade-out
    }, 5000); // Perubahan kata setiap 5 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya terjadi sekali ketika elemen muncul
    });
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      {/* Hero Section */}
      <div className="hero-section bg-gray-100 flex items-center h-screen relative pt-16">

        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
        ))}

        <div className="relative z-10 container mx-auto px-5 lg:px-0 mt-0 flex items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-4">
          <h1
              className={`text-3xl lg:text-6xl font-bold text-white transition-opacity duration-500 font-boxed mb-[-15px] ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              
            >
              {words[currentWord]}
            </h1>
            <div className="relative">
              <p className="text-5xl lg:text-8xl text-white font-boxed font-bold leading-none" data-aos="fade-down">
                NIPPON&nbsp;&nbsp;CLUB
              </p>
              <p className="text-lg lg:text-5xl text-[#fb5659] font-boxed mt-0 " data-aos="fade-right">
                @BANDUNG
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[150px] left-0 right-0 flex justify-center">
          <Link
            className="block cursor-pointer"
            to="who-we-are"
            smooth={true}
            duration={700}
            data-aos="fade-down"
          >
            <div className="flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/eec524f0-8075-4731-b2f1-f3100cf073c6/OEjHXpYpjT.lottie"
                loop
                autoplay
                style={{ width: 100, height: 100 }}
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Section Who We Are */}
      <section id="who-we-are" className="who-we-are bg-white py-16">
        <div className="container mx-auto px-5 lg:px-0 text-center">
        <h2 className="text-4xl lg:text-6xl font-boxed text-gray-800 mb-8 relative inline-block group" data-aos='fade-d'>
          Who Are <span className="text-[#fb5659]">We?</span>
          <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
        </h2>

          <p className="text-sm sm:text-base lg:text-2xl text-gray-600 leading-relaxed sm:leading-normal lg:leading-relaxed max-w-full sm:max-w-4xl lg:max-w-5xl mx-4 sm:mx-auto font-sans text-justify"
              data-aos="fade-down">
              Nippon Club is one of the activity units at BINUS University that is engaged in 
              Japanese education and culture. Nippon Club, which has been established since 
              June 16, 1999, always tries to provide information, introduce, and present various 
              things related to Japan, especially in terms of education, Japanese arts and culture 
              specifically to Nippon Club members and in general to Bina Nusantara students who are 
              interested in Japanese culture, as well as other Japanese enthusiasts.
            </p>
        </div>

        <div className="absolute left-0 right-0 flex justify-center mt-10">
          <Button 
          className="flex items-center justify-center lg:w-[400px] lg:h-[60px] bg-transparent hover:bg-[#fb5659] font-boxed lg:text-2xl
          text-black border-[#fb5659] border-2 hover:text-white text-xl hover:duration-300" data-aos="fade-down" >Learn More About Us</Button>
        </div>

      </section>

      {/* Section 2 Mode PC*/}
      <section 
        id="our-divisions" 
        className="mt-36 hidden md:block"
      >
        <div className="mx-auto px-4 lg:px-0 text-center">
        <h2 className="text-4xl lg:text-6xl font-boxed text-gray-800 mb-8 relative inline-block group" data-aos='fade-down'>
          Our <span className="text-[#fb5659]">Divisions</span>
          <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
        </h2>
          {/* <Curtain /> */}
        </div>

        <Curtain />
      </section>

      {/* Section 2 Mode Ponsel */}

      <section 
      id="our-divisions" 
      className="py-16 block md:hidden"
      data-aos='fade-down'
    >
      <div className="mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-boxed text-gray-800 mb-6">
          Our <span className="text-[#fb5659]">Divisions</span>
        </h2>
        {/* <Curtain /> */}
      </div>

        <PhoneCurtain />
      </section>



      {/* Mascots Section */}

      <section id="our-divisions" className="mt-1 lg:mt-32">
        <div className="container mx-auto px-5 lg:px-0 text-center">
          <h2
            className="text-4xl lg:text-6xl font-boxed text-gray-800 mb-8 relative inline-block group"
            data-aos="fade-d"
          >
            Our <span className="text-[#fb5659]">Mascot</span>
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>

        {/* <div className="flex w-full bg-red-500 h-[650px] shadow-2xl mb-32">
          
        </div> */}

        <MascotDIV/>

        

        
      </section>





      


      {/* Se */}

      
    </div>
  );
};

export default Home;
