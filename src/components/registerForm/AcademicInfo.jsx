import { FaFile, FaIdCard, FaSchool, FaUser, FaUpload } from "react-icons/fa";
import { helperTextError } from "./helperTextError";
import toast from "react-hot-toast";
import { useState } from "react";
import { UploadImages } from "../../utils/firebase/uploadImages";

export const AcademicInfo = ({ data, setData, error, setImageUrl }) => {

  const [files, setFiles] = useState(null)

  const uploadFilesStorage = async (e) => {
    e.preventDefault()
    if (files === null) return toast.error('Debes subir primero el archivo!')

    const arrayFiles = await toast.promise(UploadImages('registerFiles', files), {
      loading: "Guardando...",
      success: "¡Archivo guardado!",
      error: "¡Algo salió mal!",
    });
    setImageUrl(arrayFiles)

  }

  return (
    <>
      <div className="mt-3">
        <label htmlFor="estudios" className="flexlab">
          <FaSchool className="mr-2" />
          Nivel de estudios *
        </label>
        <input
          type="text"
          value={data.studiesLevel}
          onChange={(e) => setData({ ...data, studiesLevel: e.target.value })}
          placeholder="Ing. Civil"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
        {error && data.studiesLevel === '' && helperTextError('Nivel de estudios')}
      </div>
      <div className="mt-3">
        <label htmlFor="invitacion" className="flexlab">
          <FaUser className="mr-2" />
          Invita *
        </label>
        <input
          type="text"
          value={data.invites}
          onChange={(e) => setData({ ...data, invites: e.target.value })}
          placeholder="Fabiano Caruana"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
        {error && data.invites === '' && helperTextError('Invita')}
      </div>
      <div className="mt-3">
        <label htmlFor="experiencia" className="flexlab">
          <FaIdCard className="mr-2" />
          Experiencia *
        </label>
        <input
          type="number"
          value={data.experience}
          onChange={(e) => setData({ ...data, experience: e.target.value })}
          placeholder="5"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
        {error && data.experience === '' && helperTextError('Experiencia')}
      </div>
      <div className="mt-3">
        <label htmlFor="carta" className="flexlab">
          <FaFile className="mr-2" />
          Carta motivos *
        </label>
        <div className="flex flex-row">
          <input
            type="file"
            onChange={(e) => setFiles(e.target.files)}
            accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="w-full h-10 rounded-md text-sm file:h-10 file:bg-huasteca-orange file:rounded-l-md bg-neutral-100 file:border-none file:px-4 file:py-2 mt-2"
          />
          <button className="bg-huasteca-orange rounded-md flex flex-row items-center justify-around ml-3 h-10 mt-2 p-2" onClick={uploadFilesStorage}>
            Cargar
            <FaUpload className="ml-2" />
          </button>
        </div>
        {error && data.file === '' && helperTextError('Carta motivos')}
      </div>
    </>
  );
};
