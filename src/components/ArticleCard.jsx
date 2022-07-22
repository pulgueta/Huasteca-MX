import { useNavigate } from "react-router-dom";

export const ArticleCard = ({ image, title, description, date, redirect }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-neutral-500 rounded-lg shadow-xl w-full mb-5 h-72 md:h-80 lg:h-[400px]">
      <div className="flex h-full justify-center">
        <div>
          <img
            src={image}
            alt="Portada"
            className="h-full hidden w-0 md:block md:w-[400px] lg:w-[450px] object-cover object-center overflow-hidden rounded-l-lg"
          />
        </div>
        <div className="px-4 py-2 md:py-5 md:px-5 flex flex-col content-between items-center md:w-full h-full justify-between">
          <div className="lg:w-full">
            <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
            <p className="mt-1 text-xs font-medium md:text-base">
              {description}
            </p>
          </div>

          <div className="mt-2 md:flex md:items-center md:justify-between w-full lg:w-full lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex lg:flex-col w-60">
              <span className="font-bold text-sm">Ultima actualización:</span>
              <p className="text-xs">{date.toString()}</p>
            </div>
            <div className="flex justify-end py-2">
              <button
                className="bg-huasteca-orange text-neutral-100 rounded-md py-2 px-3 mt-1 text-sm font-semibold md:text-base hover:bg-orange-300 transition-all duration-300"
                onClick={() => navigate(`/proyectos/${redirect}`)}
              >
                Saber más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
