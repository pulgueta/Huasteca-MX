import { motion } from "framer-motion";

import { FaTimes } from "react-icons/fa";

import Nani from "../../../static/nani.jpg";
import Nani2 from "../../../static/nani2.jpg";
import Nani3 from "../../../static/nani3.jpg";
import Nani4 from "../../../static/nani4.jpg";
import Nani5 from "../../../static/nani5.jpeg";

export const ImageSlider = ({ toggle }) => {
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
          <img src={Nani} className="w-full" alt="FOto" />
          <img src={Nani2} className="w-full" alt="FOto" />
          <img src={Nani3} className="w-full" alt="FOto" />
          <img src={Nani4} className="w-full" alt="FOto" />
          <img src={Nani5} className="w-full" alt="FOto" />
        </div>
      </motion.div>
    </div>
  );
};
