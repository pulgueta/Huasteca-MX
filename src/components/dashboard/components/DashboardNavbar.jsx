import { useState } from "react";
import { FaArrowDown, FaBars, FaDoorOpen, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { logOut } from "../../../utils/firebase";

export const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="bg-huasteca-gray h-14 flex items-center justify-between px-4 lg:px-12 shadow-sm">
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
        <ul className="hidden md:flex md:items-center">
          <li className="">
            <Link
              to="/perfil"
              className="font-semibold md:text-sm lg:text-base text-neutral-100"
            >
              Inicio
            </Link>
          </li>
          <li className="md:ml-4 lg:ml-8">
            <button
              className="font-semibold md:text-sm lg:text-base text-neutral-100 flex items-center"
              onClick={() => setMenu(!menu)}
            >
              Mis contenidos
              <FaArrowDown
                className={
                  menu
                    ? "ml-2 text-xs rotate-[-180deg] transition-all duration-300"
                    : "ml-2 text-xs transition-all duration-300"
                }
              />
            </button>
          </li>
          <li className="md:ml-4 lg:ml-8">
            <Link
              to="/perfil/reportar-problema"
              className="font-semibold md:text-sm lg:text-base text-neutral-100"
            >
              Reporte de problemas
            </Link>
          </li>
          <li className="md:ml-4 lg:ml-8">
            <button
              className="p-2 flex items-center bg-red-500 rounded-md font-semibold md:text-sm lg:text-base text-neutral-100"
              onClick={logOut}
            >
              <FaDoorOpen className="md:hidden lg:block lg:mr-2" />
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>

      {menu && (
        <div className="absolute flex flex-col bg-neutral-500 z-10 rounded-b-md md:right-[204px] lg:right-72 lg:py-4 lg:px-8 md:py-2 md:px-4">
          <Link
            to="/perfil/monitor-articulos"
            onClick={() => setMenu(false)}
            className="py-2 md:text-sm lg:text-base text-neutral-100"
          >
            Monitor de Artículos
          </Link>
          <Link
            to="/perfil/articulos-aceptados"
            onClick={() => setMenu(false)}
            className="py-2 md:text-sm lg:text-base text-neutral-100"
          >
            Lista de Artículos Aceptados
          </Link>
        </div>
      )}

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
              Mis Contenidos{" "}
              <FaArrowDown
                className={subMenu ? "ml-2 text-xs rotate-180" : "ml-2 text-xs"}
              />
            </button>
            {subMenu && (
              <div className="my-4 w-full px-2 rounded-md text-neutral-100 bg-neutral-600 flex flex-col items-center justify-between h-full">
                <Link to="/perfil/monitor-articulos" className="py-2">
                  Monitor de Artículos
                </Link>
                <Link to="/perfil/articulos-aceptados" className="py-2">
                  Lista de Artículos Aceptados
                </Link>
              </div>
            )}
          </li>
          <li className="mb-4" onClick={() => setIsOpen(false)}>
            <Link
              to="/reporte-problemas"
              className="font-semibold text-neutral-100"
            >
              Reporte de Problemas
            </Link>
          </li>
          <li className="mb-4">
            <button
              className="p-2 bg-red-500 rounded-md font-semibold text-neutral-100"
              onClick={logOut}
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
