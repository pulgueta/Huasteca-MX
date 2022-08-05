import Huejutla from "../static/huejutla.jpg";

import { Toaster } from "react-hot-toast";

export const Landing = () => {

  return (
    <div className="min-h-screen bg-neutral-400">
      <Toaster />
      <div className="h-[540px] lg:h-[820px] bg-neutral-400 object-cover">
        <img
          src={Huejutla}
          alt="Huejutla"
          className="h-full w-full object-cover lg:object-bottom"
        />
      </div>
    </div>
  );
};
