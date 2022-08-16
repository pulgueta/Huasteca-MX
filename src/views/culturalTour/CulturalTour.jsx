import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { queryData } from "../../utils/firebase";
import { useNavigate } from "react-router";

const center = { lat: 7.067744476074094, lng: -73.85680068055541 };

export const CulturalTour = () => {

  const navigate = useNavigate()

  const [dataTour, setDataTour] = useState([])

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    const getData = async () => {
      const docs = await queryData('places')
      const data = docs
      const array = []
      data.forEach(element => {
        if (element.data().state === 'active') {
          array.push({
            id: element.id,
            ...element.data()
          })
        }
      });
      setDataTour(array)
    }

    getData()
  }, [])

  const handleDetails = (marker) => {
    navigate(`/recorridos-culturales/${marker.id}`)
  }

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
        {dataTour.length > 0 && dataTour.map((marker) => {
          return (
            <Marker position={{ lat: marker.lat, lng: marker.lng }} onClick={() => handleDetails(marker)} />
          )
        })}
      </GoogleMap>
    </>
  );
};
