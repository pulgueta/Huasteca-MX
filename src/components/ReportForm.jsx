import { useState } from "react";

import { FaMapMarker, FaCamera, FaUpload } from "react-icons/fa";

import { addDocs } from "../utils/firebase/firebaseHelp";
import { UploadImages } from "../utils/firebase/uploadImages";

import toast from "react-hot-toast";

export const ReportForm = ({
  locationCenter,
  setLocationCenter,
  handleMyLocation,
  reload,
  setReload,
  toggleMap,
  user,
}) => {
  const [images, setImages] = useState(null);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [problem, setProblem] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (
      !locationCenter.lat ||
      !locationCenter.lng ||
      imagesUrl.length === 0 ||
      problem === "" ||
      images === null
    ) {
      return toast.error("Debes Completar el formulario!");
    }

    let data = {
      lat: locationCenter.lat,
      lng: locationCenter.lng,
      images: imagesUrl,
      problem: problem,
      state: "pending",
      reportingUser: user ? user : 'No user'
    };

    setImages(null);
    setImagesUrl(null);
    setProblem("");
    setError(false);
    setLocationCenter(null);
    setReload(!reload);

    await addDocs("cityReports", data);
    toast.success("Reporte subido!");
  };

  const uploadImagesStorage = async () => {
    if (images === null) return toast.error("Debes subir primero tus images!");

    const arrayImages = toast.promise(
      UploadImages("reportImages", images),
      {
        loading: "Guardando...",
        success: "¡Imagenes guardadas!",
        error: "¡Algo salió mal!",
      }
    );

    setImagesUrl(await arrayImages);
  };

  return (
    <div
      className={
        toggleMap
          ? "bg-neutral-300 w-80 md:w-[420px] py-4 px-6 lg:px-8 m-10 lg:py-6 rounded-lg drop-shadow-md h-max"
          : "hidden"
      }
    >
      <h1 className="text-xl lg:text-2xl font-bold text-center">
        Reportar problema
      </h1>
      <div className="flex flex-col mt-5">
        <label htmlFor="coordenadas-lat" className="flexlab font-medium">
          <FaMapMarker className="mr-2" />
          Lat
          <input
            type="number"
            value={
              locationCenter && locationCenter.lat ? locationCenter.lat : ""
            }
            onChange={(e) =>
              setLocationCenter((locationCenter) => ({
                ...locationCenter,
                lat: parseFloat(e.target.value),
              }))
            }
            className="ml-2 w-full h-8 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
        </label>
        <label htmlFor="coordenadas-lon" className="flexlab font-medium mt-4">
          <FaMapMarker className="mr-2" />
          Lng
          <input
            type="number"
            value={
              locationCenter && locationCenter.lng ? locationCenter.lng : ""
            }
            onChange={(e) =>
              setLocationCenter((locationCenter) => ({
                ...locationCenter,
                lng: parseFloat(e.target.value),
              }))
            }
            className="ml-2 w-full h-8 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
        </label>
        <button
          onClick={handleMyLocation}
          className="w-full bg-green-600 mt-4 p-3 rounded-md shadow-md text-neutral-100 font-semibold hover:bg-green-500 transition-all duration-300"
        >
          Localizar mi ubicación
        </button>
        <div className="mt-4">
          <label
            htmlFor="imagen"
            className={`flexlab font-medium ${error && images === null && "text-red-700"}`}
          >
            <FaCamera className="mr-2" />
            {"Foto"}
          </label>
          <div className="flex flex-row">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setImages(e.target.files)}
              className="w-full h-10 rounded-md text-sm file:h-10 file:bg-huasteca-orange file:rounded-l-md bg-neutral-100 file:border-none file:px-4 file:py-2 mt-2"
              error={error}
            />
            <button
              className="bg-huasteca-orange rounded-md flex flex-row items-center justify-around ml-3 h-10 mt-2 p-2"
              onClick={uploadImagesStorage}
            >
              Cargar
              <FaUpload className="ml-2" />
            </button>
          </div>
          <label
            htmlFor="descripcion"
            className="flexlab font-medium mt-4 mb-2"
          >
            Descripción del problema
          </label>
          <textarea
            name="problema"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="rounded-md py-2 px-4 w-full min-h-[100px]"
            error={error}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 mt-4 p-3 rounded-md shadow-md text-neutral-100 font-semibold hover:bg-blue-500 transition-all duration-300"
          >
            Enviar problema
          </button>
        </div>
      </div>
    </div>
  );
};
