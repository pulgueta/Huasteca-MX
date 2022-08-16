import { useState, useEffect } from "react";
import { queryDoc, updateData, UploadImages } from "../../../utils/firebase";
import { toast, Toaster } from "react-hot-toast";
import { UpdateEmail } from "../../../utils/firebase/updateEmail";

export const Profile = () => {

  const uid = localStorage.getItem('user') ?? ""
  const [edit, setEdit] = useState(false);

  const [updateProfile, setUpdateProfile] = useState({
    name: "",
    dadSurname: "",
    momSurname: "",
    email: "",
    phone: "",
    studiesLevel: "",
    state: "",
    file: undefined,
  });
  const [files, setFiles] = useState(null)
  const [file, setFile] = useState([])

  useEffect(() => {
    const getDataProfile = async () => {
      if (uid) {
        const docUser = await queryDoc('users', uid)
        const dataUser = docUser?.data()
        const obj = {
          name: dataUser.name,
          dadSurname: dataUser.dadSurname,
          momSurname: dataUser.momSurname,
          email: dataUser.email,
          phone: dataUser.phone,
          studiesLevel: dataUser.studiesLevel,
          state: dataUser.state,
          file: dataUser.file,
        }
        setUpdateProfile(obj)
      }
    }
    getDataProfile()
  }, [uid])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file.length > 0) {
      updateProfile.file = file[0]
    }
    await UpdateEmail(updateProfile.email)
    await updateData('users', uid, updateProfile)
    setEdit(false)
    toast.success('Perfil Actualizado!')

  };

  const uploadFile = async () => {
    if (!files) return toast.error('Debes subir primero el archivo!')

    if (files) {
      const arrayFiles = toast.promise(UploadImages('registerFiles', files), {
        loading: "Guardando...",
        success: "¡Archivo guardado!",
        error: "¡Algo salió mal!",
      });
      setFile(await arrayFiles)
    }
  }

  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-300 flex items-center justify-center">
      <Toaster />
      <div className="w-80 md:w-[640px] p-4 md:p-8 bg-neutral-400 rounded-lg shadow-md my-10">
        <h1 className="text-center font-bold text-xl">Información</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="dashinput">
            <input
              type="text"
              value={updateProfile.name}
              disabled={!edit ? true : false}
              onChange={(e) =>
                setUpdateProfile({ ...updateProfile, name: e.target.value })
              }
              className="rounded-md px-4 py-2 mb-4 md:mb-0"
              placeholder="Nombre"
            />

            <input
              type="text"
              disabled={!edit ? true : false}
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
              disabled={!edit ? true : false}
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
              disabled
              // disabled={!edit ? true : false}
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
              disabled={!edit ? true : false}
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
              disabled={!edit ? true : false}
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
              {!edit ? (
                // <Link to={updateProfile.file} target="_blank" download>Download</Link>
                <a href={updateProfile.file} download>
                  <button type="button" className="w-full h-10 text-sm bg-huasteca-brown p-2 rounded-md font-bold text-neutral-100">
                    Descargar
                  </button>
                </a>
              ) : (
                <>
                  <input
                    disabled={!edit ? true : false}
                    type="file"
                    accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
                    name="carta-motivos"
                    className="w-full h-10 rounded-md text-sm file:h-10 file:bg-cyan-600 file:rounded-l-md bg-neutral-100 file:border-none file:px-4 file:py-2 mt-2"
                    onChange={(e) =>
                      setFiles(e.target.files)
                    }
                  />
                  <button onClick={uploadFile} type="button" className="w-full h-10 text-sm bg-huasteca-brown p-2 rounded-md font-bold text-neutral-100 mt-2">
                    Cargar
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="carta-motivos" className="font-semibold mb-2">
                Estado:
              </label>
              <input
                type="disabled"
                value={updateProfile.state === "pending" ? "Espera" : "Aceptado"}
                className="rounded-md px-4 py-2"
                disabled
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setEdit(!edit)}
            className="w-full mt-4 bg-yellow-500 p-2 rounded-md font-bold text-neutral-100"
          >
            {edit
              ? "Cancelar"
              : "Editar"
            }
          </button>
          <button
            disabled={!edit ? true : false}
            type="button"
            onClick={handleSubmit}
            className={
              edit
                ? "w-full mt-4 bg-blue-500 p-2 rounded-md font-bold text-neutral-100"
                : "w-full mt-4 bg-blue-200 p-2 rounded-md font-bold text-neutral-100"
            }
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};
