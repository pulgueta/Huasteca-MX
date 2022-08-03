import { useState } from "react";

import { PersonalInfo, AcademicInfo, UserInfo } from "./registerForm";
import { validateEmail } from "../utils/validateEmail";
import { signUp } from "../utils/firebase/signUp";
import { useNavigate } from "react-router-dom";
import { saveDoc } from "../utils/firebase/firebaseHelp";
import toast, { Toaster } from "react-hot-toast";

export const SignUpForm = () => {
  const navidate = useNavigate()

  const [step, setStep] = useState(0);
  const [imageUrl, setImageUrl] = useState([])
  const [dataOne, setDataOne] = useState({
    name: "",
    dadSurname: "",
    momSurname: "",
    phone: "",
    birthday: "",
    bornCity: "",
  });
  const [dataTwo, setDataTwo] = useState({
    studiesLevel: "",
    invites: "",
    experience: "",
    file: "",
  });
  const [dataThree, setDataThree] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState(false)

  const handleSaveData = () => {

    switch (step) {
      case 0:
        if (dataOne.name === '' || dataOne.dadSurname === '' || dataOne.momSurname === '' || dataOne.birthday === '' || dataOne.bornCity === '' || dataOne.phone === '') return toast.error('Debes llenar el fomrulario!')
        break
      case 1:
        if (dataTwo.studiesLevel === '' || dataTwo.invites === '' || dataTwo.experience === '' || imageUrl.length === 0) return toast.error('Debes llenar el fomrulario!')
        break
      case 2:
        if (dataThree.email === '' || dataThree.username === '' || dataThree.password === '') return toast.error('Debes llenar el fomrulario!')
        if (!validateEmail(dataThree.email)) return toast.error('El correo es incorrecto!')
        break
      default:
        break;
    }

    setError(false)
    setStep((page) => page + 1)
    if (step === 3) handleSubmit()
  }

  const FormStep = () => {
    switch (step) {
      case 0:
        return <PersonalInfo data={dataOne} setData={setDataOne} error={error} />;
      case 1:
        return <AcademicInfo data={dataTwo} setData={setDataTwo} error={error} setImageUrl={setImageUrl} />;
      case 2:
        return <UserInfo data={dataThree} setData={setDataThree} error={error} />;
      case 3:
        return (
          <h1 className="text-xl font-semibold text-center mt-2">¿Enviar?</h1>
        );
      default:
        return;
    }
  };

  const handleSubmit = async () => {
    dataTwo.file = imageUrl[0]
    let data = {}
    data = { ...data, ...dataOne }
    data = { ...data, ...dataTwo }
    data = { ...data, ...dataThree }

    const flagSignUp = await signUp(data.email, data.password)
    const obj = {
      ...data, ...{
        uid: flagSignUp.uid,
        state: 'pending',
      }
    }
    delete obj.password
    if (obj.uid) await saveDoc('users', obj.uid, obj)
    toast.success('Tu usuario a sido registrado!')
    toast.success('Debes esperar a que un encargado acepte tu solicitud de registro')
    navidate('/')

  };

  return (
    <div className="w-80 md:w-[450px] h-content bg-neutral-100 mt-10 shadow-md rounded-lg p-6">
      <Toaster />
      <div className="flex flex-col items-center w-full justify-center">
        <h1 className="text-xl font-bold text-center">Crear cuenta</h1>
      </div>
      <form className="mt-6 lg:mt-0">
        {FormStep()}
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between justify-center mt-5 gap-5">
          <button
            disabled={step === 0}
            type="button"
            onClick={() => setStep((page) => page - 1)}
            className="disabled:bg-neutral-500 bg-red-500 hover:bg-red-600 transition-all duration-300 py-3 mb-4 md:mb-0 text-neutral-100 font-semibold w-full rounded-md"
          >
            Atrás
          </button>
          {step === 3 ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-huasteca-orange hover:bg-orange-600 transition-all duration-300 py-3 text-neutral-100 font-semibold w-full rounded-md"
            >
              Enviar registro
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSaveData}
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-3 text-neutral-100 font-semibold w-full rounded-md"
            >
              Siguiente
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
