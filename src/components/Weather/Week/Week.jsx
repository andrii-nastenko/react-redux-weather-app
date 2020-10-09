import React, {useEffect} from 'react';
import style from './Week.module.scss';
import {AddCity} from "../AddCity/AddCity";
import {useDispatch, useSelector} from "react-redux";
import {setOptions} from "../../../redux/weatherReducer";

export function Week() {
    const dispatch = useDispatch()
    const weatherState = useSelector(state => state.weather)

    useEffect(() => {
        dispatch(setOptions({
            forecast: 'forecast',
            city: weatherState.options.city,
            lat: weatherState.options.lat,
            lon: weatherState.options.lon,
            days: 7
        }))
    }, [dispatch, weatherState.options.city, weatherState.options.lat, weatherState.options.lon])

    return (
        <div className={style.container}>
            <AddCity/>
            <div>Week</div>
        </div>
    )
}