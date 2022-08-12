import { useState } from "react";

import { FaMapMarker, FaCalendar } from "react-icons/fa";

import { addDocs } from "../../../utils/firebase";
// import { UploadImages } from "../../../utils/firebase";

import toast from "react-hot-toast";

export const RegisterForm = ({
  locationCenter,
  setLocationCenter,
  reload,
  setReload,
  toggleMap,
}) => {
  const [images, setImages] = useState(null);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [problem, setProblem] = useState("");
  const [/*error,*/ setError] = useState(false);

  const handleSubmit = async () => {
    if (
      !locationCenter.lat ||
      !locationCenter.lng ||
      imagesUrl.length === 0 ||
      problem === "" ||
      images === null
    )
      return toast.error("Debes Completar el formulario!");

    let data = {
      lat: locationCenter.lat,
      lng: locationCenter.lng,
      images: imagesUrl,
      problem: problem,
      state: "pending",
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

  // const uploadImagesStorage = async () => {
  //   if (images === null) return toast.error("Debes subir primero tus images!");

  //   const arrayImages = await toast.promise(
  //     UploadImages("reportImages", images),
  //     {
  //       loading: "Guardando...",
  //       success: "¡Imagenes guardadas!",
  //       error: "¡Algo salió mal!",
  //     }
  //   );

  //   if (arrayImages.length > 0) {
  //     setImagesUrl(arrayImages);
  //   }
  // };

  return (
    <div
      className={
        toggleMap
          ? "bg-neutral-300 w-80 md:w-[420px] py-4 px-6 lg:px-8 m-10 lg:py-6 rounded-lg drop-shadow-md h-max"
          : "hidden"
      }
    >
      <h1 className="text-xl lg:text-2xl font-bold text-center">
        Registrar nuevo lugar
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
        <label htmlFor="coordenadas-lon" className="flexlab font-medium mt-4">
          Título
          <input
            type="text"
            // value={
            //   locationCenter && locationCenter.lng ? locationCenter.lng : ""
            // }
            // onChange={(e) =>
            //   setLocationCenter((locationCenter) => ({
            //     ...locationCenter,
            //     lng: parseFloat(e.target.value),
            //   }))
            // }
            placeholder="El pintor..."
            className="ml-2 w-full h-8 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
        </label>
        {/* <button
          onClick={handleMyLocation}
          className="w-full bg-green-600 mt-4 p-3 rounded-md shadow-md text-neutral-100 font-semibold hover:bg-green-500 transition-all duration-300"
        >
          Localizar mi ubicación
        </button> */}
        <div className="mt-4">
          <label htmlFor="imagen" className="flexlab font-medium">
            <FaCalendar className="mr-2" />
            Fecha de construcción
          </label>
          <div className="flex flex-col">
            <input
              type="date"
              onChange={(e) => setImages(e.target.files)}
              className="w-full h-10 rounded-md text-sm px-2 bg-neutral-100 mt-2"
            />
            <input
              type="text"
              placeholder="Se detectó..."
              //   onChange={(e) => setImages(e.target.files)}
              className="w-full h-10 rounded-md text-sm px-2 bg-neutral-100 mt-2"
            />
          </div>
          <div className="mt-2 flex flex-col">
            <label htmlFor="imagen principal" className="font-bold text-md">
              Foto principal
            </label>
            <input
              type="file"
              accept="image/*"
              //   value={create.mainImage}
              //   onChange={(e) =>
              //     setCreate({ ...create, mainImage: e.target.value })
              //   }
              className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
            />
            <label htmlFor="fotos adicionales" className="font-bold text-md">
              Fotos adicionales
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              // value={create.images}
              // onChange={(e) => setCreate({ ...create, images: e.target.value })}
              className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 mt-4 p-3 rounded-md shadow-md text-neutral-100 font-semibold hover:bg-blue-500 transition-all duration-300"
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};
