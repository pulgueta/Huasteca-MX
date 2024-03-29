import { useEffect, useState } from "react";
import { FaArrowDown, FaBars, FaDoorOpen, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { logOut, queryDoc } from "../../../utils/firebase";

export const UserNavbar = () => {
  const uid = localStorage.getItem("user") ?? "";

  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const getDataProfile = async () => {
      if (uid) {
        const docUser = await queryDoc("users", uid);
        const dataUser = docUser?.data();
        setUserStatus(dataUser?.state);
      }
    };
    getDataProfile();
  }, [uid]);

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
          {userStatus === "accepted" && (
            <>
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
            </>
          )}
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
            <Link
              to="/perfil"
              onClick={() => setSubMenu(!subMenu)}
              className="font-semibold text-neutral-100"
            >
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
                <Link
                  to="/perfil/monitor-articulos"
                  onClick={() => {
                    setSubMenu(!subMenu);
                    setIsOpen(false);
                  }}
                  className="py-2"
                >
                  Monitor de Artículos
                </Link>
                <Link
                  to="/perfil/articulos-aceptados"
                  onClick={() => {
                    setSubMenu(!subMenu);
                    setIsOpen(false);
                  }}
                  className="py-2"
                >
                  Lista de Artículos Aceptados
                </Link>
              </div>
            )}
          </li>
          <li className="mb-4" onClick={() => setIsOpen(false)}>
            <Link
              to="/reporte-problemas"
              onClick={() => setSubMenu(!subMenu)}
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

export const ModNavbar = () => {
  const uid = localStorage.getItem("user") ?? "";

  const [isOpen, setIsOpen] = useState(false);
  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const getDataProfile = async () => {
      if (uid) {
        const docUser = await queryDoc("users", uid);
        const dataUser = docUser?.data();
        setUserStatus(dataUser?.state);
      }
    };
    getDataProfile();
  }, [uid]);

  console.log(userStatus);

  return (
    <>
      <nav className="bg-huasteca-gray h-14 flex items-center justify-between px-4 shadow-sm">
        <Link
          to="/perfil/generador/usuarios"
          className="text-lg md:text-md font-bold text-neutral-100"
        >
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
              to="/perfil/generador/recorridos-culturales"
              className="font-semibold md:text-sm lg:text-base text-neutral-100"
            >
              Recorridos culturales
            </Link>
          </li>

          <li className="md:ml-4 lg:ml-8">
            <Link
              to="/perfil/generador/usuarios"
              className="font-semibold md:text-sm lg:text-base text-neutral-100 flex items-center"
            >
              Miembros
            </Link>
          </li>
          <li className="md:ml-4 lg:ml-8">
            <Link
              to="/perfil/generador/articulos"
              className="font-semibold md:text-sm lg:text-base text-neutral-100 flex items-center"
            >
              Artículos
            </Link>
          </li>
          <li className="md:ml-4 lg:ml-8">
            <Link
              to="/perfil/generador/reportar-problema"
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

      <div className={isOpen ? "bg-huasteca-gray h-max w-screen" : "hidden"}>
        <ul className="p-4 flex flex-col items-center text-center">
          <li onClick={() => setIsOpen(!isOpen)} className="mb-4">
            <Link
              to="/perfil/generador/recorridos-culturales"
              className="font-semibold text-neutral-100 flex items-center justify-around w-full mx-auto"
            >
              Recorridos culturales
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)} className="mb-4">
            <Link
              to="/perfil/generador/usuarios"
              className="font-semibold text-neutral-100 flex items-center justify-around w-full mx-auto"
            >
              Miembros
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)} className="mb-4">
            <Link
              to="/perfil/generador/articulos"
              className="font-semibold text-neutral-100 flex items-center justify-around w-full mx-auto"
            >
              Artículos
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)} className="mb-4">
            <Link
              to="/perfil/generador/reportar-problema"
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

export const AdminNavbar = () => {
  const uid = localStorage.getItem("user") ?? "";

  const [isOpen, setIsOpen] = useState(false);
  const [userStatus, setUserStatus] = useState(null);
  const [problem, setProblem] = useState(false);
  const [subProblem, setSubProblem] = useState(false);

  useEffect(() => {
    const getDataProfile = async () => {
      if (uid) {
        const docUser = await queryDoc("users", uid);
        const dataUser = docUser?.data();
        setUserStatus(dataUser?.state);
      }
    };
    getDataProfile();
  }, [uid]);

  console.log(userStatus);

  return (
    <>
      <nav className="bg-huasteca-gray h-14 flex items-center justify-between px-4 shadow-sm">
        <Link
          to="/perfil/admin/usuarios"
          className="text-lg md:text-md font-bold text-neutral-100"
        >
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
              to="/perfil/admin/recorridos-culturales"
              className="font-semibold md:text-sm lg:text-base text-neutral-100"
            >
              Recorridos culturales
            </Link>
          </li>

          <li className="md:ml-4 lg:ml-8">
            <Link
              to="/perfil/admin/usuarios"
              className="font-semibold md:text-sm lg:text-base text-neutral-100 flex items-center"
            >
              Miembros
            </Link>
          </li>
          <li className="md:ml-4 lg:ml-8">
            <Link
              to="/perfil/admin/articulos"
              className="font-semibold md:text-sm lg:text-base text-neutral-100 flex items-center"
            >
              Artículos
            </Link>
          </li>
          <li className="md:ml-4 lg:ml-8">
            <button
              onClick={() => setProblem(!problem)}
              to="/perfil/admin/reportar-problema"
              className="font-semibold md:text-sm lg:text-base text-neutral-100"
            >
              Reporte de problemas
            </button>
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

      {problem && (
        <div className="bg-huasteca-gray h-max w-60 absolute top-14 right-36 rounded-b-md z-10">
          <ul className="py-2 flex flex-col items-center text-center">
            <li className="mb-4">
              <Link
                to="/perfil/admin/lista-problemas"
                onClick={() => setProblem(!problem)}
                className="font-semibold text-neutral-100"
              >
                Lista de problemas
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/perfil/admin/reportar-problema"
                onClick={() => setProblem(!problem)}
                className="font-semibold text-neutral-100"
              >
                Mapa
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className={isOpen ? "bg-huasteca-gray h-max w-screen" : "hidden"}>
        <ul className="p-4 flex flex-col items-center text-center">
          <li onClick={() => setIsOpen(!isOpen)} className="mb-4">
            <Link
              to="/perfil/admin/recorridos-culturales"
              className="font-semibold text-neutral-100 flex items-center justify-around w-full mx-auto"
            >
              Recorridos culturales
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)} className="mb-4">
            <Link
              to="/perfil/admin/usuarios"
              className="font-semibold text-neutral-100 flex items-center justify-around w-full mx-auto"
            >
              Miembros
            </Link>
          </li>
          <li onClick={() => setIsOpen(!isOpen)} className="mb-4">
            <Link
              to="/perfil/admin/articulos"
              className="font-semibold text-neutral-100 flex items-center justify-around w-full mx-auto"
            >
              Artículos
            </Link>
          </li>
          <li className="mb-4">
            <button
              onClick={() => setSubProblem(!subProblem)}
              className="font-semibold text-neutral-100"
            >
              Reporte de Problemas
            </button>
          </li>
          {subProblem && (
            <ul className="flex flex-col items-center text-cente w-full bg-neutral-500 p-3 rounded-md mb-4">
              <li className="mb-4">
                <Link
                  to="/perfil/admin/lista-problemas"
                  onClick={() => {
                    setSubProblem(!subProblem);
                    setIsOpen(!isOpen);
                  }}
                  className="font-semibold text-neutral-100"
                >
                  Lista de problemas
                </Link>
              </li>
              <li>
                <Link
                  to="/perfil/admin/reportar-problema"
                  onClick={() => {
                    setSubProblem(!subProblem);
                    setIsOpen(!isOpen);
                  }}
                  className="font-semibold text-neutral-100"
                >
                  Mapa
                </Link>
              </li>
            </ul>
          )}
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
