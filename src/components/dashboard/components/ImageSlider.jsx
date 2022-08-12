import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";

export const ImageSlider = ({ toggle, images }) => {
  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-800/50 w-screen absolute flex items-center justify-center z-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="h-max overflow-auto w-[640px] bg-white flex flex-col items-start justify-between p-4 rounded-lg "
      >
        <div className="w-full mb-4">
          <button className="float-right" onClick={toggle}>
            <FaTimes />
          </button>
        </div>

        <div className="flex w-full overflow-auto">
          {images.length > 0 && images.map((item, i) => {
            return (
              <img key={i} src={item} className="w-full" alt="FOto" />
            )
          })}
        </div>
      </motion.div>
    </div>
  );
};
