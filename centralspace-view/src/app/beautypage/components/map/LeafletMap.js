import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const LeafletMap = ({ }) => {
    useEffect(() => {
        initIcons();
    }, []);

    const initIcons = () => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png')
        });
    }
    const position = [props.initConfiguration.lat, props.initConfiguration.lng];
    return (
        <Map
            center={position}
            zoom={props.initConfiguration.zoom}
            maxZoom={props.initConfiguration.maxZoom}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
                <Popup>
                    Cracow <br /> The Best place on earth!
              </Popup>
            </Marker>
        </Map>
    );
}

LeafletMap.propTypes = propTypes;

export default LeafletMap;