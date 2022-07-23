import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";

export const UserInfo = ({ data, setData }) => {
  return (
    <>
      <div className="mt-2">
        <label htmlFor="correo" className="flexlab">
          <FaEnvelope className="mr-2" />
          Correo electrónico
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="correo@mail.com"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="usuario" className="flexlab">
          <FaUser className="mr-2" />
          Nombre de usuario
        </label>
        <input
          type="text"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          placeholder="Fernando"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
      </div>
      <div className="mt-2">
        <label htmlFor="contraseña" className="flexlab">
          <FaKey className="mr-2" />
          Contraseña
        </label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="*********"
          className="w-full h-10 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
        />
      </div>
    </>
  );
};
