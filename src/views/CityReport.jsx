import { useState } from "react";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
// import axios from 'axios';

import { Toaster } from "react-hot-toast";
import { ReportForm } from "../components";

let center = { lat: 7.067744476074094, lng: -73.85680068055541 };

export const CityReport = () => {

  const user = localStorage.getItem('user') ?? ""
  const [toggleMap, setToggleMap] = useState(true);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [locationCenter, setLocationCenter] = useState({});
  const [viewMarker, setViewMarker] = useState(false);
  const [reload, setReload] = useState(false);

  if (!isLoaded) {
    return <h1>Cargando mapa...</h1>;
  }

  const success = (pos) => {
    setLocationCenter({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
    setViewMarker(true);
  };

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  const handleMyLocation = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <>
      <Toaster />
      <GoogleMap
        mapContainerClassName="w-full h-[150vh] md:h-screen"
        zoom={18}
        center={
          locationCenter && locationCenter.lat && locationCenter.lng
            ? locationCenter
            : center
        }
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
        }}
        onClick={(e) => {
          const obj = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          };
          setLocationCenter(obj);
          setViewMarker(true);
        }}
      >
        {viewMarker && <Marker position={locationCenter} />}
        <button
          onClick={() => setToggleMap(!toggleMap)}
          className="bg-huasteca-orange p-2 relative rounded-md text-neutral-100 font-semibold my-2 left-[50%] md:hidden"
        >
          Mostrar mapa
        </button>
        <ReportForm
          locationCenter={locationCenter}
          setLocationCenter={setLocationCenter}
          handleMyLocation={handleMyLocation}
          reload={reload}
          setReload={setReload}
          toggleMap={toggleMap}
          user={user}
        />
      </GoogleMap>
    </>
  );
};
