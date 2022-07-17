import { useForm } from "react-hook-form";

import { FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-80 md:w-96 h-content bg-neutral-100 mt-10 shadow-md rounded-lg p-6">
      <div className="flex flex-col items-center w-full justify-center">
        <FaUser className="text-3xl" />
        <h1 className="text-xl font-bold text-center mt-2">Iniciar sesión</h1>
      </div>
      <form
        className="mt-6"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            {...register("mail", { required: "¡Este campo es obligatorio!" })}
            type="email"
            placeholder="correo@electronico.com"
            className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
          {errors.mail && (
            <p className="mt-2 text-red-500">{errors.mail?.message}</p>
          )}
        </div>
        <div className="mt-2">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            {...register("pass", { required: "¡Este campo es obligatorio!" })}
            type="password"
            placeholder="**********"
            className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
          {errors.pass && (
            <p className="mt-2 text-red-500">{errors.pass?.message}</p>
          )}
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-5">
          <button
            type="submit"
            className="bg-huasteca-orange hover:bg-orange-300 transition-all duration-300 py-3 text-neutral-100 font-semibold w-full rounded-md"
          >
            Iniciar sesión
          </button>
          <Link to="/restaurar" className="underline my-2">
            &iquest;Olvidaste tu contrase&ntilde;a&#x3F;
          </Link>
          <Link
            to="/registro"
            className="bg-huasteca-brown mt-2 text-center hover:bg-orange-900 transition-all duration-300 py-2 text-neutral-100 font-semibold w-1/2 rounded-md"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
};
