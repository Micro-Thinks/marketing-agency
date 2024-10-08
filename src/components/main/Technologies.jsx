import { motion } from "framer-motion";
// import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Technologies = () => {
  const technology = [
    { imgSrc: "/DG-min.webp", title: "Digital Marketing" },
    { imgSrc: "/ads-min.webp", title: "Google Ads" },
    { imgSrc: "/ppc3-min.webp", title: "PPC Campaigns" },
    { imgSrc: "/11-min.webp", title: "Social Media Marketing" },
    { imgSrc: "/web3-min.webp", title: "Web Development" },
    { imgSrc: "/GMBO-min.webp", title: "Google My Business Optimization" },
  ];



  return (
    <div className="flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-bold lg:text-2xl text-2xl font-sans text-center mb-4"
      >
        Our Expertise
      </motion.h1>

      <div className="max-w-5xl max-lg:max-w-xl mx-auto">
        <div className="grid  lg:grid-cols-3 gap-8 mt-12">
          {technology.map((tech, index) => (
            <div
              key={index}
              className=" flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden"
            >
              <img
                src={tech.imgSrc}
                className="w-32 h-28 text-orange-500 object-contain"
                alt={tech.title}
              />
              <div className="p-4">
                <h2 className="text-gray-800 text-lg flex items-center text-center justify-center font-sans font-bold">
                  {tech.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

     
      <div className="flex justify-center mt-4">
        <Link to="/Services">
          <button className="bg-black py-2 px-4 rounded-xl flex items-center justify-center text-white ease-in-out duration-300 hover:scale-110 hover:bg-orange-500 hover:text-black">
            View More Services
          </button>
        </Link>
      </div> 
    </div>
    </div>
  );
};

export default Technologies;
