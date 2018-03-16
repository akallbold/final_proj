import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import {mapsKey} from "./secret"

class Maps extends Component {

  render() {
    console.log("props",this.props)

    return (
      <div className="map">
        <Map
          google={this.props.google}
          initialCenter={{lat:40.7128,lng:-74.0060}}
          className={"map"}
          zoom={7}
        />
        <Marker name= {'Current Location'} />
      </div>
    );
  }
}

export default GoogleApiWrapper({

})(Maps);
