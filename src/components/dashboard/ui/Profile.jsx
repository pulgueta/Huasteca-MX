import { useState } from "react";

export const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState({
    name: "",
    dadSurname: "",
    momSurname: "",
    email: "",
    phone: "",
    studiesLevel: "",
    status: false,
    file: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(updateProfile);
  };

  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-300 flex items-center justify-center">
      <div className="w-80 md:w-[640px] p-4 md:p-8 bg-neutral-400 rounded-lg shadow-md my-10">
        <h1 className="text-center font-bold text-xl">Información</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="dashinput">
            <input
              type="text"
              value={updateProfile.name}
              onChange={(e) =>
                setUpdateProfile({ ...updateProfile, name: e.target.value })
              }
              className="rounded-md px-4 py-2 mb-4 md:mb-0"
              placeholder="Nombre"
            />

            <input
              type="text"
              value={updateProfile.dadSurname}
              onChange={(e) =>
                setUpdateProfile({
                  ...updateProfile,
                  dadSurname: e.target.value,
                })
              }
              className="rounded-md px-4 py-2"
              placeholder="Apellido paterno"
            />
          </div>
          <div className="dashinput">
            <input
              type="text"
              value={updateProfile.momSurname}
              onChange={(e) =>
                setUpdateProfile({
                  ...updateProfile,
                  momSurname: e.target.value,
                })
              }
              className="rounded-md px-4 py-2 mb-4 md:mb-0"
              placeholder="Apellido materno"
            />
            <input
              type="text"
              value={updateProfile.email}
              onChange={(e) =>
                setUpdateProfile({
                  ...updateProfile,
                  email: e.target.value,
                })
              }
              className="rounded-md px-4 py-2"
              placeholder="Email"
            />
          </div>

          <div className="dashinput">
            <input
              type="tel"
              value={updateProfile.phone}
              onChange={(e) =>
                setUpdateProfile({
                  ...updateProfile,
                  phone: e.target.value,
                })
              }
              className="rounded-md px-4 py-2 mb-4 md:mb-0"
              placeholder="Teléfono"
            />
            <input
              type="text"
              value={updateProfile.studiesLevel}
              onChange={(e) =>
                setUpdateProfile({
                  ...updateProfile,
                  studiesLevel: e.target.value,
                })
              }
              className="rounded-md px-4 py-2"
              placeholder="Nivel de estudios"
            />
          </div>

          <div className="dashinput">
            <div className="flex flex-col">
              <label htmlFor="carta-motivos" className="font-semibold">
                Carta motivos:
              </label>
              <input
                type="file"
                accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                name="carta-motivos"
                className="w-full h-10 rounded-md text-sm file:h-10 file:bg-cyan-600 file:rounded-l-md bg-neutral-100 file:border-none file:px-4 file:py-2 mt-2"
                value={updateProfile.file}
                onChange={(e) =>
                  setUpdateProfile({ ...updateProfile, file: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="carta-motivos" className="font-semibold mb-2">
                Estado:
              </label>
              <input
                type="text"
                value={updateProfile.studiesLevel ? "Espera" : "Aceptado"}
                className="rounded-md px-4 py-2"
                disabled
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 p-2 rounded-md font-bold text-neutral-100"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
