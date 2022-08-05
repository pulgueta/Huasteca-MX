import { useState } from "react";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { logOut } from "../../../utils/firebase";

export const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <nav className="bg-huasteca-gray h-14 flex items-center justify-between px-4 md:px-8 lg:px-12 shadow-sm">
        <Link to="/perfil" className="text-xl font-bold text-neutral-100">
          Colegio de Arquitectos
        </Link>

        {!isOpen ? (
          <FaBars
            className="text-neutral-100 cursor-pointer absolute right-4 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <FaTimes
            className="text-neutral-100 cursor-pointer absolute right-4 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </nav>
      <div className={isOpen ? "bg-huasteca-gray h-max w-screen" : "hidden"}>
        <ul className="p-4 flex flex-col items-center text-center">
          <li className="mb-4" onClick={() => setIsOpen(false)}>
            <Link to="/perfil" className="font-semibold text-neutral-100">
              Inicio
            </Link>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setSubMenu(!subMenu)}
              className="font-semibold text-neutral-100 flex items-center justify-around w-full mx-auto"
            >
              Mis Contenidos <FaArrowDown className="ml-2 text-xs" />
            </button>
            {subMenu && (
              <div className="my-4 w-full px-2 rounded-md text-neutral-100 bg-neutral-600 flex flex-col items-center justify-between h-full">
                <Link to="monitor-articulos" className="py-2">Monitor de Artículos</Link>
                <Link to="lista-articulos" className="py-2">Lista de Artículos Aceptados</Link>
              </div>
            )}
          </li>
          <li className="mb-4" onClick={() => setIsOpen(false)}>
            <Link to="/reporte-problemas" className="font-semibold text-neutral-100">
              Reporte de Problemas
            </Link>
          </li>
          <li className="mb-4">
              <button className="p-2 bg-red-500 rounded-md font-semibold text-neutral-100" onClick={logOut}>Cerrar sesión</button>
          </li>
        </ul>
      </div>
    </>
  );
};
