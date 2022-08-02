import { useState } from "react";

import { Link } from "react-router-dom";
import {
  FaBars,
  FaLaptop,
  FaMapMarkerAlt,
  FaSignInAlt,
  FaTimes,
} from "react-icons/fa";
import { BsFillMegaphoneFill } from "react-icons/bs";

import Logo from "../static/logo.jpg";
import { logOut } from "../utils/firebase/signIn";

export const Navbar = () => {
  const userLog = localStorage.getItem("user");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-huasteca-gray relative px-6 md:px-8 lg:px-4 xl:px-12 h-16 md:h-20 flex items-center justify-between w-full">
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="w-12" />
        <p className="hidden md:block md:w-60 xl:w-72 mx-4 text-base text-neutral-100 font-semibold">
          Colegio de Arquitectos e Ingenieros
        </p>
      </Link>

      <ul className="hidden lg:flex md:items-center font-medium">
        <li className="nav-link">
          <Link to="/proyectos" className="flex items-center">
            <FaLaptop className="mr-1 md:hidden xl:block" />
            Proyectos/Obras
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/recorridos-culturales" className="flex items-center">
            <FaMapMarkerAlt className="mr-1 md:hidden xl:block" />
            Recorridos culturales
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/reportes-ciudadanos" className="flex items-center">
            <BsFillMegaphoneFill className="mr-1 md:hidden xl:block" />
            Reportes ciudadanos
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/acerca-de">Acerca de CAIH</Link>
        </li>
        {userLog ? (
          <div className="flex items-center">
            <li className="bg-huasteca-orange hover:bg-orange-400 transition-all duration-200 text-neutral-100 font-medium px-3 py-2 rounded-md ml-4">
              <div className="flex items-center">
                <button className="flex  items-center mr-1" onClick={logOut}>
                  <FaSignInAlt className="mr-1" />
                  Cerrar sesión
                </button>
              </div>
            </li>
          </div>
        ) : (
          <div className="flex items-center">
            <li className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-neutral-100 font-medium px-3 py-2 rounded-md">
              <Link to="/inicio-sesion" className="flex items-center">
                <FaSignInAlt className="mr-1" />
                Iniciar sesión
              </Link>
            </li>
            <li className="bg-huasteca-orange hover:bg-orange-400 transition-all duration-200 text-neutral-100 font-medium px-3 py-2 rounded-md ml-4">
              <Link to="/registro" className="flex items-center">
                <FaSignInAlt className="mr-1" />
                Registrar
              </Link>
            </li>
          </div>
        )}
      </ul>

      <div className="text-xl lg:hidden z-10" onClick={handleClick}>
        {isOpen ? (
          <FaTimes className="cursor-pointer text-neutral-100" />
        ) : (
          <FaBars className="cursor-pointer text-neutral-100" />
        )}
      </div>

      <ul
        className={
          !isOpen
            ? "absolute top-[64px] left-[-100%] w-screen h-[75vh] bg-huasteca-gray flex flex-col justify-center items-center ease-in duration-500"
            : "absolute top-[64px] left-0 w-screen h-[75vh] z-10 bg-huasteca-gray shadow-sm flex flex-col justify-center items-center ease-out duration-700"
        }
      >
        <li className="py-3 text-center">
          <Link
            className="mobile-link"
            to="/"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaLaptop className="mr-1" />
            Inicio
          </Link>
        </li>
        <li className="py-3 text-center">
          <Link
            className="mobile-link"
            to="/proyectos"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaLaptop className="mr-1" />
            Proyectos/Obras
          </Link>
        </li>
        <li className="py-3 text-center">
          <Link
            className="mobile-link"
            to="/recorridos-culturales"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaMapMarkerAlt className="mr-1" />
            Recorridos culturales
          </Link>
        </li>
        <li className="py-3 text-center">
          <Link
            className="mobile-link"
            to="/reportes-ciudadanos"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsFillMegaphoneFill className="mr-1" />
            Reportes ciudadanos
          </Link>
        </li>
        <li className="py-3 text-center">
          <Link
            className="mobile-link"
            to="/acerca-de"
            onClick={() => setIsOpen(!isOpen)}
          >
            Acerca de CAIH
          </Link>
        </li>
        {userLog ? (
          <li className="bg-huasteca-orange hover:bg-orange-400 transition-all duration-200 text-neutral-100 font-medium px-3 py-2 rounded-md">
            <div className="flex items-center">
              <button className="flex  items-center mr-1" onClick={logOut}>
                <FaSignInAlt className="mr-1" />
                Cerrar sesión
              </button>
            </div>
          </li>
        ) : (
          <>
            <li className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-neutral-100 font-medium px-3 py-2 rounded-md mt-4 mb-8">
              <Link
                to="/inicio-sesion"
                className="flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaSignInAlt className="mr-1" />
                Iniciar sesión
              </Link>
            </li>
            <li className="bg-huasteca-orange hover:bg-orange-400 transition-all duration-200 text-neutral-100 font-medium px-3 py-2 rounded-md">
              <Link
                to="/registro"
                className="flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaSignInAlt className="mr-1" />
                Registrar
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
