import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {GoogleMapCoordinates} from "../../store/types";

const containerStyle = {
    width: '1200px',
    height: '800px'
};

export const GoogleMaps = ({latitude, longitude}: GoogleMapCoordinates) => {
    const center = {
        lat: latitude,
        lng: longitude
    };

    const key = process.env.GOOGLE_MAPS_API_KEY ? process.env.GOOGLE_MAPS_API_KEY : ''

    return (
        <LoadScript
            googleMapsApiKey={key}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

