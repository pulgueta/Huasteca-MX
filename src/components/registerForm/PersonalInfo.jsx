import { FaCalendar, FaMapMarker, FaPhone, FaUser } from "react-icons/fa";

export const PersonalInfo = ({ data, setData }) => {
  return (
    <>
      <div>
        <label htmlFor="nombres" className="flexlab">
          <FaUser className="mr-2" />
          Nombres
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="Luis Fernando"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mt-3">
          <label htmlFor="apellido-paterno" className="flexlab">
            <FaUser className="mr-2" />
            Apellidos
          </label>
          <input
            type="text"
            value={data.dadSurname}
            onChange={(e) => setData({ ...data, dadSurname: e.target.value })}
            placeholder="Medina"
            className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="apellido-paterno" className="flexlab">
            <FaUser className="mr-2" />
            Apellidos
          </label>
          <input
            type="text"
            value={data.momSurname}
            onChange={(e) => setData({ ...data, momSurname: e.target.value })}
            placeholder="Antonio"
            className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="fecha-nacimiento" className="flexlab">
          <FaCalendar className="mr-2" />
          Fecha de nacimiento
        </label>
        <input
          type="date"
          value={data.birthday}
          onChange={(e) => setData({ ...data, birthday: e.target.value })}
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
      </div>
      <div className="mt-3">
        <label htmlFor="ciudad-origen" className="flexlab">
          <FaMapMarker className="mr-2" />
          Ciudad de origen
        </label>
        <input
          type="text"
          value={data.bornCity}
          onChange={(e) => setData({ ...data, bornCity: e.target.value })}
          placeholder="Huejutla"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
      </div>
      <div className="mt-3 md:w-1/2">
        <label htmlFor="telefono" className="flexlab">
          <FaPhone className="mr-2" />
          Teléfono
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          placeholder="123456789"
          className="w-1/2 lg:w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
      </div>
    </>
  );
};
