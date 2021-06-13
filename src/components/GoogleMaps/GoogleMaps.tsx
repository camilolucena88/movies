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

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBaP6Fhc35A1StbEuaH7xija46CCciDU-U"
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

