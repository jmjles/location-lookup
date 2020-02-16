 
 
import React,{ Component } from 'react';
import { key } from '../misc/config';

export class MapContainer extends Component {
    state={
        initCenter:{
            lat:40,
            lng:-100
        },
    }
    Bounds = new this.props.google.maps.LatLngBounds();

    MapProps = {
        google:this.props.google,
        zoom:this.props.zoom,
        minZoom:4,
        bounds:this.Bounds.extend(this.props.center)
    }
    render(){
        console.log(this.MapProps)
        return(
            <Map {...this.MapProps}>
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: key.google
})(MapContainer)