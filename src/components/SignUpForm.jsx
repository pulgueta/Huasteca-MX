import { useForm } from "react-hook-form";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaKey,
  FaIdCard,
  FaMapMarker,
  FaSchool,
} from "react-icons/fa";

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
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <label htmlFor="nombres" className="flexlab">
              <FaUser className="mr-2" />
              Nombres
            </label>
            <input
              {...register("names", {
                required: "¡Este campo es obligatorio!",
              })}
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
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mt-2">
            <label htmlFor="correo" className="flexlab">
              <FaEnvelope className="mr-2" />
              Correo electrónico
            </label>
            <input
              {...register("mail", { required: "¡Este campo es obligatorio!" })}
              type="email"
              placeholder="correo@mail.com"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.mail && (
              <p className="mt-2 text-red-500">{errors.mail?.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="universidad" className="flexlab">
              <FaSchool className="mr-2" />
              Universidad
            </label>
            <input
              {...register("university", {
                required: "¡Este campo es obligatorio!",
              })}
              type="text"
              placeholder="UNAM"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.university && (
              <p className="mt-2 text-red-500">{errors.university?.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
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
              className="w-1/2 lg:w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.phnumber && (
              <p className="mt-2 text-red-500">{errors.phnumber?.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="invitacion" className="flexlab">
              <FaUser className="mr-2" />
              Invita
            </label>
            <input
              {...register("invites", {
                required: "¡Este campo es obligatorio!",
              })}
              type="text"
              placeholder="Fabiano Caruana"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.invites && (
              <p className="mt-2 text-red-500">{errors.invites?.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mt-2">
            <label htmlFor="usuario" className="flexlab">
              <FaUser className="mr-2" />
              Nombre de usuario
            </label>
            <input
              {...register("username", {
                required: "¡Este campo es obligatorio!",
              })}
              type="text"
              placeholder="Fernando"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.username && (
              <p className="mt-2 text-red-500">{errors.username?.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="contraseña" className="flexlab">
              <FaKey className="mr-2" />
              Contraseña
            </label>
            <input
              {...register("passwrd", {
                required: "¡Este campo es obligatorio!",
              })}
              type="password"
              placeholder="*********"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.passwrd && (
              <p className="mt-2 text-red-500">{errors.passwrd?.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mt-2">
            <label htmlFor="usuario" className="flexlab">
              <FaIdCard className="mr-2" />
              Experiencia
            </label>
            <input
              {...register("experience", {
                required: "¡Este campo es obligatorio!",
              })}
              type="number"
              placeholder="4"
              className="w-1/3 lg:w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.experience && (
              <p className="mt-2 text-red-500">{errors.experience?.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="fecha-nacimiento" className="flexlab">
              <FaCalendar className="mr-2" />
              Fecha de nacimiento
            </label>
            <input
              {...register("birthday", {
                required: "¡Este campo es obligatorio!",
              })}
              type="date"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.birthday && (
              <p className="mt-2 text-red-500">{errors.birthday?.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mt-2">
            <label htmlFor="usuario" className="flexlab">
              <FaMapMarker className="mr-2" />
              Ciudad de origen
            </label>
            <input
              {...register("cityBorn", {
                required: "¡Este campo es obligatorio!",
              })}
              type="text"
              placeholder="Huejutla"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.cityBorn && (
              <p className="mt-2 text-red-500">{errors.cityBorn?.message}</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="arquitecto" className="flexlab">
              <FaUser className="mr-2" />
              Arquitecto
            </label>
            <input
              {...register("architect", {
                required: "¡Este campo es obligatorio!",
              })}
              type="text"
              placeholder="Alberto Morales"
              className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            />
            {errors.architect && (
              <p className="mt-2 text-red-500">{errors.architect?.message}</p>
            )}
          </div>
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
