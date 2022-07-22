import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

import { ReportForm } from "../components";

const center = { lat: 7.067744476074094, lng: -73.85680068055541 };

export const CityReport = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <h1>Cargando mapa...</h1>;
  }

  return (
    <>
      <GoogleMap
        mapContainerClassName="w-full h-[150vh] md:h-[calc(100vh-160px)]"
        zoom={18}
        center={center}
        options={{
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
        }}
      >
        <ReportForm />
      </GoogleMap>
    </>
  );
};
