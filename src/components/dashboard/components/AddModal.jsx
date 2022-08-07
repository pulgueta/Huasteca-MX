import { AnimatePresence, motion } from "framer-motion";

export const AddModal = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -20,
          opacity: 0,
        }}
        className="h-40 w-96 bg-white relative flex items-center justify-between"
      >
        <h1>Puchi</h1>
        <button>Close</button>
      </motion.div>
    </AnimatePresence>
  );
};
