import { FaFile, FaIdCard, FaSchool, FaUser } from "react-icons/fa";
import { helperTextError } from "./helperTextError";

export const AcademicInfo = ({ data, setData, error }) => {
  
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
        <input
          type="file"
          value={data.file}
          onChange={(e) => {
            // const data = e.target.files;
            // const fileArr = Array.prototype.slice.call(data);
            // setData({ ...data, file: fileArr });
            // setData({ ...data, file: e.target.files[0] });
            setData({ ...data, file: e.target.value });
          }}
          accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="w-full h-10 rounded-md text-sm file:h-10 file:bg-huasteca-orange file:rounded-l-md bg-neutral-100 file:border-none file:px-4 file:py-2 mt-2"
        />
        {error && data.file === '' && helperTextError('Carta motivos')}
      </div>
    </>
  );
};
