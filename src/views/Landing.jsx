// import { motion } from "framer-motion";

import Huejutla from "../static/huejutla.jpg";


// import Nani from "../static/nani.jpg";
// import Nani2 from "../static/nani2.jpg";
// import Nani3 from "../static/nani3.jpg";
// import Nani4 from "../static/nani4.jpg";

export const Landing = () => {
  // const gallery = [Nani, Nani2, Nani3, Nani4, Nani];

  return (
    <div className="min-h-screen bg-neutral-400">
      <div className="h-[540px] lg:h-[820px] bg-red-400 object-cover">
        <img
          src={Huejutla}
          alt="Huejutla"
          className="h-full w-full object-cover lg:object-bottom"
        />
      </div>

      {/* 
      
         <div className="h-screen bg-neutral-400 flex flex-col items-center md:px-10 md:justify-center md:h-screen md:py-20 lg:h-full"> 

      <div className='w-screen h-full pb-2 m-3 overflow-x-hidden md:py-0 lg:h-screen'>
        <motion.div className='flex cursor-grab' drag={'x'} dragConstraints={{ right: 0, left: -1594 }}>
          {gallery && gallery.map((item, i) => {
            return (
              <div key={i} className='h-[30rem] min-w-[25rem] p-3 md:h-[25rem] md:min-w-[30rem] lg:min-w-[45rem]'>
                <img src={item} alt="tour" className='h-full w-full pointer-events-none object-cover rounded-md' />
              </div>
            )
          })}
        </motion.div>
      </div> */}
    </div>
  );
};
