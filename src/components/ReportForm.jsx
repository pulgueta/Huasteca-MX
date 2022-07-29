import { useState } from "react";

import { FaMapMarker, FaCamera } from "react-icons/fa";

export const ReportForm = ({ locationCenter, setLocationCenter, handleMyLocation }) => {
  const [images, setImages] = useState([])
  const [problem, setProblem] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (!locationCenter.lat || !locationCenter.lng || images.length === 0 || problem === '') return setError(true)

    let data = {
      lat: locationCenter.lat,
      lng: locationCenter.lng,
      images: images,
      problem: problem
    }

    console.log('data :>> ', data);
  };

  return (
    <div className="bg-neutral-300 w-80 md:w-[420px] py-4 px-6 lg:px-8 lg:py-6 rounded-lg drop-shadow-md h-max relative top-16 left-6 lg:top-20 lg:left-20">
      <h1 className="text-xl lg:text-2xl font-bold text-center">
        Reportar problema
      </h1>
      <div className="flex flex-col mt-5">
        <label htmlFor="coordenadas-lat" className="flexlab font-medium">
          <FaMapMarker className="mr-2" />
          Lat
          <input
            type="number"
            value={locationCenter && locationCenter.lat && locationCenter.lat}
            onChange={(e) => setLocationCenter(locationCenter => ({ ...locationCenter, lat: parseFloat(e.target.value) }))}
            className="ml-2 w-full h-8 rounded-md px-2 text-sm font-medium outline-huasteca-brown"
          />
        </label>
        <label htmlFor="coordenadas-lon" className="flexlab font-medium mt-4">
          <FaMapMarker className="mr-2" />
          Lng
          <input
            type="number"
            value={locationCenter && locationCenter.lng && locationCenter.lng}
            onChange={(e) => setLocationCenter(locationCenter => ({ ...locationCenter, lng: parseFloat(e.target.value) }))}
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
            <FaCamera className="mr-2" />
            Foto
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const arrayOld = e.target.files
              const array = []
              for (let index = 0; index < arrayOld.length; index++) {
                const element = arrayOld[index];
                console.log('element :>> ', element.name);
                array.push(element.name)
              }
              setImages(array)
            }}
            className="w-full h-10 rounded-md text-sm file:h-10 file:bg-huasteca-orange file:rounded-l-md bg-neutral-100 file:border-none file:px-4 file:py-2 mt-2"
            error={error}
          />

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
