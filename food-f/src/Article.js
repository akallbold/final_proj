import React, { Component } from 'react';
import Iframe from "react-iframe"
import MapsList from "./MapsList"

class Article extends Component {
  render() {
    return (
      <div className="center-panel">
        <Iframe url= "http://www.grubstreet.com/bestofnewyork/best-martini-nyc.html" width="50%"/>

      </div>
    );
  }
}

export default Article;
