import React from "react";
import GoogleMapReact from 'google-map-react';
import { Map as StyledMap } from "../styles/Map";

const Marker = () => <div><i class="fa-solid fa-location-dot" style={{fontSize:25, color:"red"}}></i></div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: 25.4244845,
      lng: -101.0117174
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <StyledMap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAc_fWC63FYIV8dwbn3k17PICrN9A-HpHw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ gestureHandling: "cooperative", mapTypeControl: true, streetViewControl: true,}}
      >
        <Marker
          lat={25.4244845}
          lng={-101.0117174}
        />
      </GoogleMapReact>
    </StyledMap>
  );
}