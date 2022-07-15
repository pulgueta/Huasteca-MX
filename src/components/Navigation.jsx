import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from '../static/logo.jpg'

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-700 relative px-8 md:px-16 lg:px-20 h-16 md:h-20 flex items-center justify-between w-full">
      {/* <Link to="/" className="text-xl md:text-2xl font-bold text-neutral-100">
        Colegio de Arquitectos
      </Link> */}
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-56" />
      </Link>
      {window.innerWidth <= 1180 ? (
        <div
          className="bg-neutral-100/10 border-[2px] border-neutral-500 hover:border-neutral-400 py-2 px-3 rounded drop-shadow text-neutral-100 cursor-pointer hover:bg-neutral-100/20 duration-300 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      ) : (
        <ul className="flex">
          <li className="nav-link">
            <Link to="/">Inicio</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Mis contenidos</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Reportes de problemas</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Iniciar sesión</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Cerrar sesión</Link>
          </li>
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
              },
            }}
            exit={{
              opacity: 0,
              x: -200,
              transition: {
                ease: "easeIn",
              },
            }}
            className="absolute bg-neutral-700 left-0 top-16 md:top-20 w-full h-72 p-6 flex flex-col justify-center z-10"
          >
            <ul>
              <li className="py-3 text-center">
                <Link
                  className="text-md text-neutral-100 font-medium"
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Inicio
                </Link>
              </li>
              <li className="py-3 text-center">
                <Link
                  className="text-md text-neutral-100 font-medium"
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Mis contenidos
                </Link>
              </li>
              <li className="py-3 text-center">
                <Link
                  className="text-md text-neutral-100 font-medium"
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Reportes de problemas
                </Link>
              </li>
              <li className="py-3 text-center">
                <Link
                  className="text-md text-neutral-100 font-medium"
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Usuario
                </Link>
              </li>
              <li className="py-3 text-center">
                <Link
                  className="text-md text-neutral-100 font-medium"
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
