import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      href: '#dpi',
      background: img5,
      content: (
        <div id="dpi" className="p-8 text-white group">
          <a
         
            className='text-4xl font-bold transition-all duration-500 relative'
          >
            DEWAN PENGURUS INTI
            {/* Underline effect on hover */}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </a>

        <p className="text-[18px] mt-4">
          Dewan Pengurus Inti terdiri dari tiga posisi kunci: Ketua Regional, Bendahara Regional, dan Sekretaris Regional. Setiap anggota memiliki peran penting dalam kepemimpinan dan manajemen kegiatan regional dalam Nippon Club. Tanggung jawab mereka mencakup pengawasan pelaksanaan inisiatif, pengelolaan keuangan, serta memastikan komunikasi dan koordinasi yang efektif di dalam tim regional.
        </p>
      </div>
      ),
    },
    {
      title: 'EDUCATION',
      background: img1,
      content: (
        <div id="dpi" className="p-8 text-white group">
          <a

            className='text-4xl font-bold transition-all duration-500 relative'
          >
            EDUCATION
            {/* Underline effect on hover */}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </a>

        <p className="text-[18px] mt-4">
        Divisi Edukasi di Nippon Club bertujuan untuk menyediakan platform yang mendukung pengembangan pengetahuan dan keterampilan anggotanya melalui berbagai program pendidikan dan pelatihan. Divisi ini fokus pada peningkatan wawasan budaya Jepang, bahasa Jepang, serta topik-topik terkait yang dapat memperkaya pengalaman anggotanya.
        </p>
      </div>
      ),
    },
    {
      title: 'MEDIA',
      background: img2,
      content: (
        <div id="dpi" className="p-8 text-white group">
          <a
            className='text-4xl font-bold transition-all duration-500 relative'
          >
            MEDIA
            {/* Underline effect on hover */}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </a>

        <p className="text-[18px] mt-4">
        Divisi Media di Nippon Club memiliki peran yang sangat penting dalam mendukung berbagai kegiatan dan acara yang diadakan oleh organisasi. Divisi ini bertanggung jawab dalam menyediakan dan mengelola berbagai aset seni yang berkaitan dengan dunia manga, anime, serta budaya Jepang secara umum. Dengan kreativitas dan keahlian dalam seni visual, Divisi Media memastikan bahwa setiap acara dan inisiatif Nippon Club dapat dipromosikan dengan cara yang menarik dan efektif.
        </p>
      </div>
      ),
    },
    {
      title: 'COMMUNITY SUPPORT',
      background: img3,
      content: (
        <div id="dpi" className="p-8 text-white group">
          <a
            href=""
            className='text-4xl font-bold transition-all duration-500 relative'
          >
            COMMUNITY SUPPORT
            {/* Underline effect on hover */}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </a>

        <p className="text-[18px] mt-4">
        Divisi Community Support di Nippon Club bertanggung jawab untuk mendukung dan menaungi berbagai komunitas yang ada di dalam organisasi, termasuk komunitas penggemar cosplay, anime, manga, dan berbagai kegiatan lainnya. Divisi ini berperan penting dalam menciptakan lingkungan yang inklusif dan menyenangkan bagi semua anggota dengan mengorganisir berbagai kegiatan bonding serta memperkuat hubungan antar anggota komunitas.
        </p>
      </div>
      ),
    },
    {
      title: 'JOURNALISTIC',
      background: img_jurnal,
      content: (
        <div id="dpi" className="p-8 text-white group">
          <a
            href=""
            className='text-4xl font-bold transition-all duration-500 relative'
          >
            JOURNALISTIC
            {/* Underline effect on hover */}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </a>

        <p className="text-[18px] mt-4">
        Divisi Jurnalistik di Nippon Club memiliki peran yang sangat penting dalam mendokumentasikan dan meliput setiap kegiatan yang diadakan oleh organisasi. Divisi ini bertanggung jawab untuk membuat artikel, laporan, dan konten lainnya yang menginformasikan anggota dan publik tentang perkembangan dan acara yang diadakan oleh Nippon Club, terutama yang bertemakan anime, budaya Jepang, dan hobi terkait.
        </p>
      </div>
      ),
    },
    {
      title: 'PUBLIC RELATIONS',
      background: img_PR,
      content: (
        <div id="dpi" className="p-8 text-white group">
          <a
            className='text-4xl font-bold transition-all duration-500 relative'
          >
            PUBLIC RELATIONS
            {/* Underline effect on hover */}
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-[#fb5659] transition-all duration-500 group-hover:w-full"></span>
          </a>

        <p className="text-[18px] mt-4">
        Divisi Public Relations (PR) di Nippon Club memainkan peran vital dalam membangun dan menjaga hubungan yang baik antara organisasi dengan pihak eksternal. Divisi ini bertanggung jawab untuk mengelola komunikasi dan citra organisasi, serta memastikan bahwa Nippon Club dikenal secara positif oleh masyarakat luas, media, dan mitra potensial.
        </p>
      </div>
      ),
    }
  ];

  return (
    <div>
      

      {/* Divisions */}
      <div className="h-[700px] w-full flex">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ width: '15%' }}
            animate={{
              width: activeIndex === index ? '85%' : '15%',
              transition: { duration: 0.7, ease: 'easeInOut' },
            }}
            className="relative overflow-hidden bg-black"
            style={{ height: '100%' }}
            onClick={() => setActiveIndex(index)}
          >
            <motion.img
              src={section.background}
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-700 ease-in-out"
              key={section.background}
            />

            {/* Title with underline and href */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: activeIndex === index ? 0 : 1 }}
              transition={{ duration: 0.7 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
            >
              {activeIndex === index ? (
                <a
                  href={section.href}
                  className={`text-white text-5xl font-norwester tracking-wider text-nowrap relative group`}
                >
                  {section.title}
                  <span
                    className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#fb5659] transition-all duration-500 w-full`}
                  ></span>
                </a>
              ) : (
                <a
                  href={section.href}
                  className={`text-white text-5xl font-norwester tracking-wider text-nowrap relative group`}
                >
                  {section.title}
                  <span
                    className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#fb5659] transition-all duration-500 ${
                      activeIndex === index ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              )}
            </motion.div>

            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {section.content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CurtainAccordion;
