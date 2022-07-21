import { motion } from "framer-motion";

import { FaInfo } from "react-icons/fa";

import Arrow from "../static/arrow-down.png";

export const About = () => {
  return (
    <div className="min-h-screen bg-neutral-400 w-full flex flex-col justify-start items-center p-4">
      <motion.h1
        initial={{
          x: -50,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.75,
          },
        }}
        className="text-2xl md:text-4xl font-bold text-neutral-100 md:mb-1 lg:mb-2"
      >
        Acerca de CAIH
      </motion.h1>
      <motion.blockquote
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.75, delay: 0.25 },
        }}
        className="text-sm md:text-md lg:text-lg text-center lg:my-2"
      >
        Colegio de Arquitectos e Ingenieros de la Huasteca
      </motion.blockquote>

      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            delay: 0.75,
          },
        }}
        className="my-4 w-full md:w-11/12 lg:w-1/2 lg:text-center flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-center text-neutral-100 mb-2">
            Historia
          </h1>
          <p className="font-medium">
            El Colegio de Arquitectos e Ingenieros Civiles de la Huasteca, fue
            creado el 01 de octubre de 2018 en conmemoración por el día
            internacional del Arquitecto. Fundado por un grupo de arquitectos e
            Ingenieros civiles con interés por el desarrollo urbano y
            ordenamiento territorial de nuestra región. El objetivo de nuestro
            colegio es el trabajar activamente en propuestas de intervención
            urbano-arquitectónicas en colaboración con organismos
            gubernamentales o autónomos, con el fin de mejorar la experiencia y
            habitabilidad de la población en nuestra ciudad y región.
          </p>
          <div className="my-10">
            <img
              src={Arrow}
              alt="Arrow down"
              className="w-20 md:w-24 bg-huasteca-orange p-4 rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-4">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-center text-neutral-100 mb-2">
            Misión
          </h1>
          <p className="font-medium">
            Promover los valores de la práctica de la arquitectura y la
            Ingeniería civil y la actividad profesional en la región huasteca.
            Así como reconocer a los Arquitectos e Ingenieros civiles que se
            destaquen significativamente en la práctica profesional, en la
            actividad gremial y académica ante dependencias de la administración
            pública y organismos descentralizados, así como ante organismos del
            sector social y privado.
          </p>
          <div className="my-10">
            <img
              src={Arrow}
              alt="Arrow down"
              className="w-20 md:w-24 bg-huasteca-orange p-4 rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-4">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-center text-neutral-100 mb-2">
            Visión
          </h1>
          <p className="font-medium">
            Ser un referente de la Arquitectura e Ingeniería civil,
            comprometidos y solidarios de servir, trabajando con los agremiados
            en un conjunto de acciones y programas por el bien común de la
            región
          </p>
          <div className="my-10">
            <img
              src={Arrow}
              alt="Arrow down"
              className="w-20 md:w-24 bg-huasteca-orange p-4 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-around w-1/2 my-4">
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-center text-neutral-100 mb-2">
            Valores
          </h1>
          <ul className="font-medium text-left">
            <li className="mb-2">
              <p className="flex items-center">
                <FaInfo /> Calidad
              </p>
            </li>
            <li className="mb-2">
              <p className="flex items-center">
                <FaInfo /> Transparencia
              </p>
            </li>
            <li className="mb-2">
              <p className="flex items-center">
                <FaInfo /> Ética
              </p>
            </li>
            <li className="mb-2">
              <p className="flex items-center">
                <FaInfo /> Competitividad
              </p>
            </li>
            <li className="mb-2">
              <p className="flex items-center">
                <FaInfo /> Trabajo en equipo
              </p>
            </li>
            <li>
              <p className="flex items-center">
                <FaInfo /> Responsabilidad social
              </p>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
