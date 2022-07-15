import { useForm } from "react-hook-form";

import { FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

export const SignInForm = () => {
  const {
    login,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data)

  console.log(watch("ex"));

  return (
    <div className="w-80 md:w-96 h-[450px] bg-neutral-100 mt-10 shadow-md rounded-lg p-6">
      <div className="flex flex-col items-center w-full justify-center">
        <FaUser className="text-3xl"/>
        <h1 className="text-xl font-bold text-center mt-2">Iniciar sesión</h1>
      </div>
      <form className="mt-6">
        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="text"
            placeholder="correo@electronico.com"
            className="w-full h-10 rounded-md px-4 text-sm font-medium outline-blue-400"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            
            type="password"
            placeholder="**********"
            className="w-full h-10 rounded-md px-4 text-sm font-medium outline-blue-400"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 transition-all duration-300 py-3 text-neutral-100 font-semibold w-full rounded-md"
          >
            Iniciar sesión
          </button>
          <Link to="/olvide-contrasena" className="underline my-2">
            &iquest;Olvidaste tu contraseña?
          </Link>
          <Link
            to="/register"
            className="bg-purple-500 mt-2 text-center hover:bg-purple-400 transition-all duration-300 py-2 text-neutral-100 font-semibold w-1/2 rounded-md"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
};
