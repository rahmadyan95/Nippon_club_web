import { FaFacebookSquare, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/NCBDG.png";

const Footer = () => {
  return (
    <div>
      <div className='h-auto w-full border-t-2 border-[#fb5659] flex flex-col md:flex-row'>
        <div className='w-full md:w-1/3 flex flex-col items-center justify-center  md:border-b-0 md:border-r-2 border-[#fb5659] p-4'>
          <a href="#" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[15vw] lg:h-[3.7vw] lg:w-auto w-auto"
              loading="lazy"
            />
          </a>
        </div>
        <div className='w-full md:w-1/3 flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-[#fb5659] p-4'>
          <div>
            <a href="#" className="font-boxed font-semibold text-2xl">Contact Us</a>
          </div>
          <div className='flex gap-4 mt-5 justify-center'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={30} className="hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} className="hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className="hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
        </div>
        <div className='w-full md:w-1/3 flex flex-col justify-between p-4'>
          <div className='flex justify-center items-center h-1/2'>
            <input 
              type='text' 
              placeholder='Search...' 
              className='border rounded p-2 w-full md:w-3/4'
            />
          </div>
          <div className='flex justify-center items-center h-1/2'>
            <button className='bg-blue-500 text-white p-2 rounded'>
              Join Us
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[#fb5659] text-white py-1">
        <div className="container mx-auto flex justify-center items-center font-boxed">
          <p className="m-1">© 2024 Nippon Club Bandung. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;