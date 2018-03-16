import React, { Component } from 'react';
import Maps from "./Maps"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


// createElements= () => {
//   <Maps/>
// }

class MapsList extends Component {
  render() {
    return (
      <div className="right-panel">
        <Maps />
      </div>
    );
  }
}

export default MapsList;
