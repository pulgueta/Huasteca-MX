import React from 'react'
import { useParams } from 'react-router-dom'
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export const LocalitationProblems = () => {

    const { lat, lng } = useParams()
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) {
        return <h1>Cargando mapa...</h1>;
    }

    return (
        <>
            {lat && lng && (
                <GoogleMap
                    mapContainerClassName="w-screen h-screen"
                    zoom={18}
                    center={lat && lng && { lat: +lat, lng: +lng }}
                    options={{
                        // streetViewControl: false,
                        fullscreenControl: false,
                        // mapTypeControl: false,
                    }}
                >
                    {lat && lng && <Marker position={{ lat: +lat, lng: +lng }} />}
                </GoogleMap>
            )}
        </>
    )
}