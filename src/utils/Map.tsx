import React, { useState } from 'react'
import {MapContainer, Marker, TileLayer, useMapEvent} from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import coordinatesDTO from './coordinates.model'

let defaultIcon = L.icon ({
    iconUrl : icon,
    shadowUrl : iconShadow,
    iconAnchor : [16,37]
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props : mapProps) {
    const [coordinates,setCoordinates] = useState<coordinatesDTO[]>([])
    
  return (
    <MapContainer 
    center={[43.68554,79.52545]}
    zoom={10}
    style={{height : props.height}}
    >
        <TileLayer attribution='React Movies' 
        url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

    <MapClicks setCoordinates={coordinates => {
        setCoordinates([coordinates]) 
    }}/>
    {coordinates.map((coordinate,index) =><Marker key={index}
        position={[coordinate.lat, coordinate.lng
        ]}>

    </Marker>)}

    </MapContainer>
  )
}

interface mapProps {
    height: string
}

Map.defaultProps = {
    height : "500px"
}

function MapClicks(props : mapClickProps) {
    useMapEvent('click', eventArgs => {
        props.setCoordinates({lat: eventArgs.latlng.lat, lng : eventArgs.latlng.lng})
        
    })
    
    return null;
}

interface mapClickProps {
    setCoordinates(coordinates : coordinatesDTO) : void;
}