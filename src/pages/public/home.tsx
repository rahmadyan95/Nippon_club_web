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
import ArtDIV from "../../components/Gallery/Gallery"
import Newsfront from "../../components/otakuHi/ShowCaseNews"
import UpComingEvents from "../../components/OurEvents/UpcomingEventsHandler"
import UpComingEventsMobile from "../../components/OurEvents/UpcomingEventsHandlerMobile"




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
              Nippon Club adalah salah satu unit kegiatan di Universitas BINUS yang bergerak di bidang pendidikan dan kebudayaan Jepang. Nippon Club, yang telah berdiri sejak 16 Juni 1999, selalu berusaha untuk memberikan informasi, mengenalkan, dan mempersembahkan berbagai hal yang berkaitan dengan Jepang, terutama dalam hal pendidikan, seni, dan kebudayaan Jepang, khususnya kepada anggota Nippon Club dan secara umum kepada mahasiswa Bina Nusantara yang tertarik dengan budaya Jepang, serta para penggemar Jepang lainnya.
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
        <p className="text-2xl text-gray-600 max-w-6xl mx-auto mb-12 " data-aos="fade-down">
        Kami terorganisir dalam divisi-divisi khusus, masing-masing berdedikasi untuk memberikan keunggulan di bidangnya masing-masing. Divisi-divisi kami bekerja secara kolaboratif untuk mencapai tujuan organisasi sambil memastikan kualitas dan inovasi tertinggi dalam pekerjaan mereka.
        </p>
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

        <p className="text-0.5xl text-gray-600 max-w-xl mx-auto mb-12 " data-aos="fade-down">
        Kami terorganisir dalam divisi-divisi khusus, masing-masing berdedikasi untuk memberikan keunggulan di bidangnya masing-masing. Divisi-divisi kami bekerja secara kolaboratif untuk mencapai tujuan organisasi sambil memastikan kualitas dan inovasi tertinggi dalam pekerjaan mereka.
        </p>


      </div>

        <PhoneCurtain />
      </section>



      {/* Mascots Section */}

      <section id="our-divisions" className="mt-1 lg:mt-20">
        <div className="container mx-auto px-5 lg:px-0 text-center">
          <h2
            className="text-4xl lg:text-6xl font-boxed text-gray-800 mb-8 relative inline-block group"
            data-aos="fade-d"
          >
            Our <span className="text-[#fb5659]">Mascot</span>
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className=" text-1xl lg:text-2xl text-gray-600 max-w-6xl mx-auto mb-12 " data-aos="fade-down">
        Kami memiliki maskot yang mewakili setiap divisi, masing-masing mencerminkan semangat dan nilai-nilai divisi tersebut. Maskot-maskot ini bekerja bersama untuk mendukung tujuan organisasi dan memastikan kualitas serta inovasi.
        </p>
        </div>

        {/* <div className="flex w-full bg-red-500 h-[650px] shadow-2xl mb-32">
          
        </div> */}

        <MascotDIV/>
      </section>

      <section id="our-divisions" className="mt-0 lg:mt-32">
        <div className="container mx-auto px-5 lg:px-0 text-center">
          <h2
            className="text-4xl lg:text-6xl font-boxed text-gray-800 mb-8 relative inline-block group"
            data-aos="fade-d"
          >
            Nippon Club<span className="text-[#fb5659]"> Gallery</span>
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="lg:text-2xl text-gray-600 max-w-6xl mx-auto mb-12 " data-aos="fade-down">
          Nippon Club Gallery adalah wujud apresiasi untuk karya terbaik anggota Nippon Club. Galeri ini menampilkan kreativitas dan dedikasi dalam mengeksplorasi budaya Jepang, sekaligus menginspirasi dan menghargai semangat komunitas kami.
        </p>
        </div>

        <div className="w-[85%] mx-auto shadow-xl lg:mb-20 mb-8">
          <ArtDIV />
        </div>

        <a
          href="#"
          className="flex font-boxed items-center justify-center text-lg text-[#fb5659] text-[20px] lg:text-[40px] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          See More at Nippon Club Gallery
        </a>
        
      </section>

      <section id="our-divisions" className="mt-12 lg:mt-28">
        <div className="container mx-auto px-5 lg:px-0 text-center">
          <h2
            className="text-4xl lg:text-6xl font-boxed text-gray-800 mb-8 relative inline-block group"
            data-aos="fade-d"
          >
            Otaku<span className="text-[#fb5659]">-Hi</span>
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          <p className="lg:text-2xl text-gray-600 max-w-6xl mx-auto mb-12  " data-aos="fade-down">
          
              Otaku-Hi adalah portal berita jejepangan yang menyajikan informasi terkini tentang anime, manga, budaya Jepang, dan komunitas otaku. Nama Otaku-Hi menggabungkan kata Otaku (penggemar budaya pop Jepang) dan Hi (hari), mencerminkan misinya sebagai sumber berita harian untuk para otaku.
        </p>
        </div>

        <div className="w-[85%] mx-auto lg:mb-20 mb-8" data-aos='fade-down'>
          <Newsfront/>
        </div>

        <a
          href="#"
          className="flex font-boxed items-center justify-center text-lg text-[#fb5659] text-[20px] lg:text-[40px] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          See More at Otaku Hi
        </a>
      </section>

      {/* sec */}

      <section id="our-divisions" className="mt-12 lg:mt-28">
        <div className="container mx-auto px-5 lg:px-0 text-center">
          <h2
            className="text-4xl lg:text-6xl font-boxed text-gray-800 mb-8 relative inline-block group"
            data-aos="fade-d"
          >
            Our<span className="text-[#fb5659]"> Events</span>
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </h2>
          
        </div>


        <div className="">
          <div className="w-[80%] mx-auto lg:mb-20 mb-8 hidden md:block" data-aos='fade-down'>
            <UpComingEvents/>
          </div>

          <div className="w-[80%] mx-auto lg:mb-20 mb-8 block md:hidden" data-aos='fade-down'>
            <UpComingEventsMobile/>
          </div>

        </div>
        



      </section>


      


      








      


      {/* Se */}

      
    </div>
  );
};

export default Home;
