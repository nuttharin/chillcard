import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./MyMarker";
import "../css/map.css";



export default function ChillMap() {
  return (
    <div className="mapStyle">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyB0a3cGBsWKPae7y83gYbU_EotXpGSHX2o",
          language: "th",
          region: "TH"
        }}
        defaultCenter={{ lat: 13.8447162, lng: 100.4121443 }}
        defaultZoom={15}
      >
          <Marker
          lat={13.8447162}
          lng={100.4121443}
          name="Westgate Residence Hotel"
          color="blue">

          </Marker>
       
        
            
    
      </GoogleMapReact>
    </div>
  );
}