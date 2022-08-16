import { useState } from "react";

import { FaMapMarker, FaCalendar } from "react-icons/fa";

import { addDocs } from "../../../utils/firebase";
import { UploadImages } from "../../../utils/firebase";

import toast from "react-hot-toast";

export const RegisterForm = ({
  locationCenter,
  setLocationCenter,
  reload,
  setReload,
  toggleMap,
  handleMyLocation
}) => {
  const [images, setImages] = useState(null);
  const [mainImage, setMainImage] = useState(null)
  const [place, setPlace] = useState('')
  const [date, setDate] = useState('')
  const [detected, setDetected] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async () => {
    if (
      !locationCenter.lat ||
      !locationCenter.lng ||
      images.length === 0 ||
      mainImage === 0 ||
      images === null ||
      mainImage === null ||
      place === '' ||
      date === '' ||
      detected === '' ||
      description === ''
    )
      return toast.error("Debes Completar el formulario!");

    let data = {
      lat: locationCenter.lat,
      lng: locationCenter.lng,
      images: images,
      mainImage: mainImage[0],
      state: "pending",
      place: place,
      date: date,
      detected: detected,
      description: description
    };

    await addDocs("places", data);
    toast.success("Lugar registrado!");

    setImages(null);
    setMainImage(null);
    setPlace("");
    setDate("");
    setDetected("");
    setLocationCenter(null);
    setReload(!reload);

  };

  const saveImages = async (files, main) => {
    if (!main && !images) {
      toast.error("Selecciona las imagenes!")
      return
    }
    if (main && !mainImage) {
      toast.error("Selecciona las imagenes!")
      return
    }

    if (!main) {
      const arrayImages = toast.promise(UploadImages("registerPlaces", files),
        {
          loading: "Guardando...",
          success: "¡Imagenes guardadas!",
          error: "¡Algo salió mal!",
        }
      );
      setImages(await arrayImages)
    } else {
      const arrayImages = toast.promise(UploadImages("articleImages", files),
        {
          loading: "Guardando...",
          success: "¡Imagenes guardadas!",
          error: "¡Algo salió mal!",
        }
      );
      setMainImage(await arrayImages)
    }
  }

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
          Lugar
          <input
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            placeholder="Lugar..."
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
          <label htmlFor="imagen" className="flexlab font-medium">
            <FaCalendar className="mr-2" />
            Fecha de construcción
          </label>
          <div className="flex flex-col">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-10 rounded-md text-sm px-2 bg-neutral-100 mt-2"
            />
            <input
              type="text"
              placeholder="Autor..."
              value={detected}
              onChange={(e) => setDetected(e.target.value)}
              className="w-full h-10 rounded-md text-sm px-2 bg-neutral-100 mt-2"
            />
          </div>
          <div className="mt-2 flex flex-col">
            <label htmlFor="imagen principal" className="font-bold text-md">
              Foto principal
            </label>
            <div className="flex flex-row gap-2 items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setMainImage(e.target.files)
                }
                className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
              />
              <button
                type="button"
                onClick={() => saveImages(mainImage, true)}
                className="bg-green-600 py-2 px-4 mx-auto rounded-md text-neutral-100 font-bold float-right"
              >
                Subir
              </button>
            </div>
            <label htmlFor="fotos adicionales" className="font-bold text-md">
              Fotos adicionales
            </label>
            <div className="flex flex-row gap-2 items-center justify-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setImages(e.target.files)}
                className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
              />
              <button
                type="button"
                onClick={() => saveImages(images, false)}
                className="bg-green-600 py-2 px-4 mx-auto rounded-md text-neutral-100 font-bold float-right"
              >
                Subir
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-md py-2 px-4 w-full min-h-[100px]"
            ></textarea>
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
