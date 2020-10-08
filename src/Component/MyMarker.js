import React from 'react';
import "../css/marker.css";

const Marker = (props: any) => {
    const { color, name} = props;
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
         
        />
        <h3>{name}</h3>
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;