import React from "react";
import LeafletMap from './LeafletMap';
import '../../../../resources/beautypage/css/leaflet-map.css';

class LeafletMapEmbedded extends React.Component {
  constructor() {
    super()
    this.state = {
      initConfiguration: { 
        lat: 50.049683,
        lng: 19.944544,
        zoom: 13,
        maxZoom: 18
      }
    }
}

  render () {
    return (
    //  <div className="section leaflet-map">
     <div className="section light leaflet-map">
       <LeafletMap initConfiguration={this.state.initConfiguration}/>
     </div>
    )
  }
}

LeafletMapEmbedded.propTypes = propTypes;

export default LeafletMapEmbedded;