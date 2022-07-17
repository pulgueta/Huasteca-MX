import { useForm } from "react-hook-form";

import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-80 md:w-96 h-content bg-neutral-100 mt-10 shadow-md rounded-lg p-6 lg:w-[540px]">
      <div className="flex flex-col items-center w-full justify-center">
        <h1 className="text-xl font-bold text-center">Crear cuenta</h1>
      </div>
      <form
        className="mt-6"
        onSubmit={handleSubmit((data) => console.log({data}))}
      >
        <div>
          <label htmlFor="nombres" className="flexlab">
            <FaUser className="mr-2" />
            Nombres
          </label>
          <input
            {...register("names", { required: "¡Este campo es obligatorio!" })}
            type="text"
            placeholder="Luis Fernando"
            className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
          {errors.names && (
            <p className="mt-2 text-red-500">{errors.names?.message}</p>
          )}
        </div>
        <div className="mt-2">
          <label htmlFor="apellidos" className="flexlab">
            <FaUser className="mr-2" />
            Apellidos
          </label>
          <input
            {...register("surname", {
              required: "¡Este campo es obligatorio!",
            })}
            type="text"
            placeholder="Medina Antonio"
            className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
          {errors.surname && (
            <p className="mt-2 text-red-500">{errors.surname?.message}</p>
          )}
        </div>
        <div className="mt-2">
          <label htmlFor="correo" className="flexlab">
            <FaEnvelope className="mr-2" />
            Correo electrónico
          </label>
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
          <label htmlFor="telefono" className="flexlab">
            <FaPhone className="mr-2" />
            Teléfono
          </label>
          <input
            {...register("phnumber", {
              required: "¡Este campo es obligatorio!",
            })}
            type="tel"
            placeholder="123456789"
            className="w-1/2 h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
          {errors.phnumber && (
            <p className="mt-2 text-red-500">{errors.phnumber?.message}</p>
          )}
        </div>

        

        <div className="w-full flex flex-col items-center justify-center mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-3 text-neutral-100 font-semibold w-full rounded-md"
          >
            Enviar registro
          </button>
        </div>
      </form>
    </div>
  );
};
