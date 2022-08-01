import { useState, useRef } from "react";

import toast, { Toaster } from "react-hot-toast";

import { validateEmail } from "../utils";
import { resetPassword } from "../utils/firebase";

export const ForgotPassword = () => {
  const [user, setUser] = useState("");
  const form = useRef();

  const handleResetPassword = (e) => {
    e.preventDefault();

    !validateEmail
      ? console.log("err")
      : toast.promise(resetPassword(user), {
          loading: "Comprobando...",
          success: "¡Correo enviado!",
          error: "¡Algo salió mal!",
        });

    form.current.reset();
  };

  return (
    <div className="h-[calc(100vh-140px)] bg-neutral-400 grid place-content-center place-self-center">
      <Toaster />
      <form
        className="bg-neutral-100 w-72 rounded-lg p-4"
        onSubmit={handleResetPassword}
        ref={form}
      >
        <h1 className="text-lg text-center font-bold">
          Restablecer contraseña
        </h1>
        <div className="mt-2">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="text"
            placeholder="correo@electronico.com"
            className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-3 rounded-md text-neutral-100 font-semibold bg-huasteca-orange hover:bg-huasteca-yellow transition-all duration-300 w-full"
        >
          Enviar correo
        </button>
      </form>
    </div>
  );
};
