import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ServicesModal = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <div className="flex items-center pb-3 border-b border-gray-300">
            <img
              src={service.imgSrc}
              className="text-gray-800 h-8 w-8 mr-2 font-extrabold "
            />
            <h3 className="text-gray-800 text-xl font-bold flex-1">
              {service.title}
            </h3>
            <svg
              onClick={() => onClose(service)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          <div className="my-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
ServicesModal.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ServicesModal;
