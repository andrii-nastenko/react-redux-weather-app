import React from 'react';
import './CityMap.scss';
import {useSelector} from "react-redux";
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css/';
import L from 'leaflet';

export function CityMap() {
    const weatherState = useSelector(state => state.weather)

    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })

    return (
        <Map center={weatherState.weatherData.coordinates} zoom={9}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={weatherState.weatherData.coordinates}>
                <Popup>{weatherState.weatherData.days[0].temp} °C, {weatherState.weatherData.days[0].weather}
                    , {weatherState.weatherData.days[0].wind} - meter per second</Popup>
            </Marker>
        </Map>
    )
}