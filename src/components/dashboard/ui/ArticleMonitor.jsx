import { useState } from "react";
import { Link } from "react-router-dom";
import { AddModal, ArticleTable } from "../components";

export const ArticleMonitor = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-neutral-300 min-h-[calc(100vh-56px)] flex items-start justify-center">
      {modal && <AddModal toggle={() => setModal(false)} />}
      <div>
        <div className="bg-neutral-200 rounded-lg shadow-sm mx-auto mt-10 w-72 px-4 h-32 flex flex-col items-center justify-between mb-6">
          <button
            onClick={() => setModal(!modal)}
            className="bg-green-500 p-3 rounded-md text-neutral-100 font-bold mt-3"
          >
            Agregar artículo
          </button>
          <Link
            to="/monitor-articulos/espera"
            className="mb-2 font-semibold underline"
          >
            Artículos en espera
          </Link>
        </div>

        <ArticleTable />
      </div>
    </div>
  );
};
