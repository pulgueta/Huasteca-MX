import { Link } from "react-router-dom";

export const AddArticle = () => {
  return (
    <div className="bg-neutral-200 rounded-lg shadow-sm mx-auto mt-10 w-72 px-4 h-32 flex flex-col items-center justify-between">
      <button className="bg-green-500 p-3 rounded-md text-neutral-100 font-bold mt-3">
        Agregar artículo
      </button>
      <Link
        to="/perfil/monitor-articulos/espera"
        className="mb-2 font-semibold underline"
      >
        Artículos en espera
      </Link>
    </div>
  );
};
