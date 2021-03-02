import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import unselectedMarkerURL from '../../assets/map-marker-unselected.png';
import selectedMarkerURL from '../../assets/map-marker-selected.png';
import status from '../../assets/status.png';
import crosshair from '../../assets/crosshair.png';
import car from '../../assets/car.png';
import './rigMap.scss';

const mapStyles = {
  width: '765px',
  height: '92vh',
};

export const MapContainer = ({ google, rig }) => {
  const [selectedMarker, setSelectedMarker] = useState({});
  const [infoWindowShowing, setInfoWindowShowing] = useState(false);
  const [infoWindowPosition, setInfoWindowPosition] = useState();

  const onMarkerClick = (_, marker) => {
    if (selectedMarker.id !== marker.id) {
      setSelectedMarker(marker);
      setInfoWindowShowing(true);
    }
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const onMapClick = () => {
    if (infoWindowShowing) {
      setSelectedMarker({});
      setInfoWindowShowing(false);
    }
  };

  const wellMarkers =
    rig.wells.length &&
    rig.wells.map(({ id, latitude, longitude, name, status }) => (
      <Marker
        title={name}
        id={id}
        key={id}
        position={{ lat: latitude, lng: longitude }}
        draggable={false}
        status={status}
        coordinates={{ latitude, longitude }}
        label={{
          text: name,
        }}
        onClick={onMarkerClick}
        icon={{
          url:
            selectedMarker.id === id ? selectedMarkerURL : unselectedMarkerURL,
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(24, 32),
          labelOrigin: new google.maps.Point(12, -15),
        }}
      />
    ));

  return (
    <div className="map-container">
      <Map
        onClick={onMapClick}
        zoomControl={false}
        panControl={false}
        streetViewControl={false}
        mapTypeControl={false}
        fullscreenControl={false}
        google={google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          rig.wells.length
            ? { lat: rig.wells[0].latitude, lng: rig.wells[0].longitude }
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
        onBoundsChanged={(_, map) => {
          const centerY = map.getBounds().getSouthWest().lat();
          const centerX = map.getBounds().getCenter().lng();
          setInfoWindowPosition({ lat: centerY, lng: centerX });
        }}
      >
        {wellMarkers.length && wellMarkers}
        <InfoWindow
          onClose={() => {
            setInfoWindowShowing(false);
            setSelectedMarker({});
          }}
          visible={infoWindowShowing}
          position={infoWindowPosition}
          disableAutoPan={true}
        >
          <div className="info-window">
            <p className="header">Well</p>
            <h1>{selectedMarker.title}</h1>
            <table>
              <tr>
                <td className="info-column">
                  <img className="info-icon" src={status} alt="status icon" />
                  <p className="info-text">Status</p>
                </td>
                <td>
                  <p
                    className={
                      'well-content status status-' +
                      (selectedMarker.status === 'active'
                        ? 'green'
                        : selectedMarker.status === 'inactive'
                        ? 'red'
                        : 'yellow')
                    }
                  >
                    {selectedMarker.status && capitalize(selectedMarker.status)}
                  </p>
                </td>
              </tr>
              <tr>
                <td className="info-column">
                  <img
                    className="info-icon"
                    src={crosshair}
                    alt="crosshair icon"
                  />
                  <p className="info-text">{'Lat & Long'}</p>
                </td>
                <td>
                  <p className="well-content">
                    {selectedMarker.coordinates &&
                      selectedMarker.coordinates.latitude +
                        ', ' +
                        selectedMarker.coordinates.longitude}
                  </p>
                </td>
              </tr>
              <tr>
                <td className="info-column">
                  <img className="info-icon" src={car} alt="car icon" />
                  <p className="info-text">Rig</p>
                </td>
                <td>
                  <p className="well-content">{rig.name}</p>
                </td>
              </tr>
            </table>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
})(MapContainer);
