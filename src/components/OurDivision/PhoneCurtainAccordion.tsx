import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "aos/dist/aos.css";

// Import images
const img1 = 'https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_division_photo/EDU.jpg';
const img2 = 'https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_division_photo/MEDIA.jpg';
const img3 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/7.jpg";
const img5 = "https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_Hero_Photo/8.jpg";
const img_jurnal = 'https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_division_photo/Dummy.jpg';
const img_PR = 'https://ncassets001.s3.us-east-1.amazonaws.com/NCBB_division_photo/Dummy.jpg';

const CurtainAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: 'DPI',
      background: img5,
      content: (
        <div className="p-4 text-white">
          <h2 className="text-2xl font-bold mb-4">DEWAN PENGURUS INTI</h2>
          <p className="text-[15px]">
            Dewan Pengurus Inti terdiri dari tiga posisi kunci: Ketua Regional,
            Bendahara Regional, dan Sekretaris Regional. Setiap anggota memiliki peran penting
            dalam kepemimpinan dan manajemen kegiatan regional dalam Nippon Club. Tanggung jawab
            mereka mencakup pengawasan pelaksanaan inisiatif, pengelolaan keuangan, serta memastikan
            komunikasi dan koordinasi yang efektif di dalam tim regional.
          </p>
        </div>
      )
    },
    {
      title: 'EDUCATION',
      background: img1,
      content: (
        <div className="p-4 text-white">
          <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
          <p className="text-[15px]">
            Divisi Edukasi di Nippon Club bertujuan untuk menyediakan platform yang mendukung pengembangan
            pengetahuan dan keterampilan anggotanya melalui berbagai program pendidikan dan pelatihan.
            Divisi ini fokus pada peningkatan wawasan budaya Jepang, bahasa Jepang, serta topik-topik terkait
            yang dapat memperkaya pengalaman anggotanya.
          </p>
        </div>
      )
    },
    {
      title: 'MEDIA',
      background: img2,
      content: (
        <div className="p-4 text-white">
          <h2 className="text-2xl font-bold mb-4">MEDIA</h2>
          <p className="text-[15px]">
            Divisi Media di Nippon Club memiliki peran yang sangat penting dalam mendukung berbagai kegiatan
            dan acara yang diadakan oleh organisasi. Divisi ini bertanggung jawab dalam menyediakan dan mengelola
            berbagai aset seni yang berkaitan dengan dunia manga, anime, serta budaya Jepang secara umum. Dengan
            kreativitas dan keahlian dalam seni visual, Divisi Media memastikan bahwa setiap acara dan inisiatif
            Nippon Club dapat dipromosikan dengan cara yang menarik dan efektif.
          </p>
        </div>
      )
    },
    {
      title: "COMMUNITY SUPPORT",
      background: img3,
      content: (
        <div className="p-4 text-white">
          <h2 className="text-2xl font-bold mb-4">COMMUNITY SUPPORT</h2>
          <p className="text-[15px]">
            Divisi Community Support di Nippon Club bertanggung jawab untuk mendukung dan menaungi berbagai komunitas
            yang ada di dalam organisasi, termasuk komunitas penggemar Cosplay, anime, manga, dan berbagai kegiatan
            lainnya. Divisi ini berperan penting dalam menciptakan lingkungan yang inklusif dan menyenangkan bagi semua
            anggota dengan mengorganisir berbagai kegiatan bonding serta memperkuat hubungan antar anggota komunitas.
          </p>
        </div>
      )
    },
    {
      title: 'JOURALISTIC',
      background: img_jurnal,
      content: (
        <div className="p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">JOURNALISTIC</h2>
          <p className='text-[15px]'>Divisi Jurnalistik di Nippon Club memiliki peran yang sangat penting dalam mendokumentasikan 
            dan meliput setiap kegiatan yang diadakan oleh organisasi. Divisi ini bertanggung jawab untuk membuat
             artikel, laporan, dan konten lainnya yang menginformasikan anggota dan publik tentang perkembangan 
            dan acara yang diadakan oleh Nippon Club, terutama yang bertemakan anime, budaya Jepang, dan hobi terkait.</p>
        </div>
      )
    },
    {
      title: 'PUBLIC RELATIONS',
      background: img_PR,
      content: (
        <div className="p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">PUBLIC RELATIONS</h2>
          <p className='text-[15px]'>Divisi Public Relations (PR) di Nippon Club memainkan peran vital dalam membangun dan 
            menjaga hubungan yang baik antara organisasi dengan pihak eksternal. Divisi ini bertanggung 
            jawab untuk mengelola komunikasi dan citra organisasi, serta memastikan bahwa Nippon Club dikenal 
            secara positif oleh masyarakat luas, media, dan mitra potensial.</p>
        </div>
      )
    }
  ];

  return (
    <div
      className="w-full h-[700px] flex flex-col md:flex-row overflow-auto"
      style={{
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}
      data-aos='fade-down'
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ flex: 1 }}
          animate={{
            flex: activeIndex === index ? 5 : 1, // Menyesuaikan ukuran
            transition: { duration: 0.7, ease: "easeInOut" },
          }}
          className="relative bg-black flex-shrink-0 md:flex-grow"
          style={{
            width: "100%",
            height: "100%", // Tetap penuh
            overflow: "hidden", // Mencegah konten keluar
          }}
          onClick={() => setActiveIndex(index)}
        >
          {/* Overlay image */}
          <motion.img
            src={section.background}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />

          {/* Title and Content */}
          {activeIndex !== index ? (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: activeIndex === index ? 0 : 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <h2 className="text-white text-3xl font-norwester tracking-wider text-nowrap">
                {section.title}
              </h2>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 p-8 flex items-center justify-center"
            >
              {section.content}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CurtainAccordion;
