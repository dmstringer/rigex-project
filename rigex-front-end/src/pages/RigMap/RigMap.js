import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import unselectedMarker from '../../assets/map-marker-unselected.png';
import selectedMarker from '../../assets/map-marker-selected.png';

const mapStyles = {
  width: '765px',
  height: '92vh',
};

export const MapContainer = ({ google, rig: { wells } }) => {
  const [selectedMarkerId, setSelectedMarkerId] = useState('');

  let wellMarkers =
    wells.length &&
    wells.map(({ id, latitude, longitude, name }) => (
      <Marker
        title={name}
        id={id}
        key={id}
        position={{ lat: latitude, lng: longitude }}
        draggable={false}
        label={{
          text: name,
        }}
        onClick={() => {
          setSelectedMarkerId(id === selectedMarkerId ? '' : id);
        }}
        icon={{
          url: selectedMarkerId === id ? selectedMarker : unselectedMarker,
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(24, 32),
          labelOrigin: new google.maps.Point(12, -15),
        }}
      />
    ));

  return (
    <div className="map-container">
      <Map
        zoomControl={false}
        panControl={false}
        streetViewControl={false}
        mapTypeControl={false}
        fullscreenControl={false}
        google={google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          wells.length
            ? { lat: wells[0].latitude, lng: wells[0].longitude }
            : {
                lat: 29.749907,
                lng: -95.358421,
              }
        }
        containerStyle={{
          width: 'inherit',
          height: 'inherit',
          marginTop: '5px',
        }}
      >
        {wellMarkers.length && wellMarkers}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(MapContainer);
