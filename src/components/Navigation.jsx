import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
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

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-huasteca-gray relative px-8 md:px-16 lg:px-20 h-16 md:h-20 flex items-center justify-between w-full">
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="w-12" />
        <p className="hidden md:block md:w-60 lg:w-72 mx-4 text-sm text-neutral-100 font-semibold">
          Colegio de Arquitectos e Ingenieros Civiles de la Huasteca A.C.
        </p>
      </Link>
      {window.innerWidth <= 1300 ? (
        <div
          className="bg-neutral-100/10 border-[2px] border-neutral-500 hover:border-neutral-400 py-2 px-3 rounded drop-shadow text-neutral-100 cursor-pointer hover:bg-neutral-100/20 duration-300 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      ) : (
        <ul className="flex w-full items-center justify-between">
          <div className="flex">
            <li className="nav-link">
              <Link to="/" className="flex items-center">
                <FaLaptop className="mr-1" />
                Proyectos/Obras
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/" className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                Recorridos culturales
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/" className="flex items-center">
                <BsFillMegaphoneFill className="mr-1" /> Reportes ciudadanos
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/">Acerca de CAIH</Link>
            </li>
          </div>
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
        </ul>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: -200,
              transition: {
                ease: "easeOut",
              },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.75,
              },
            }}
            exit={{
              opacity: 0,
              x: -200,
              transition: {
                ease: "easeIn",
              },
            }}
            className="absolute bg-huasteca-gray left-0 top-16 md:top-20 w-full h-[calc(100vh-64px)] md:h-[480px] p-6 flex flex-col justify-center z-10"
          >
            <ul className="flex flex-col items-center">
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
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <FaMapMarkerAlt className="mr-1" />
                  Recorridos culturales
                </Link>
              </li>
              <li className="py-3 text-center">
                <Link
                  className="mobile-link"
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <BsFillMegaphoneFill className="mr-1" />
                  Reportes ciudadanos
                </Link>
              </li>
              <li className="py-3 text-center">
                <Link
                  className="mobile-link"
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Acerca de CAIH
                </Link>
              </li>

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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
