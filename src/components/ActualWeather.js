import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ActualWeatherInfo from './ActualWeatherInfo';

const ActualWeather = (props) => {
    const { date, city, } = props.weather;
    return (
        <div className="ActualWeather">
            <div className="Details" style={{ borderBottom: '1px solid rgba(255,255,255, 0.6' }}>
                <FaMapMarkerAlt size={16} style={{ color: '#fff' }} />
                <h4 style={{ fontWeight: '500', margin: '0', textTransform: 'capitalize' }}>{city}</h4>
                <p className="Date" style={{ fontSize: '12px', margin: '0', color: '#e4e3e8' }}>{date}</p>
                <ActualWeatherInfo weather={props.weather} />
            </div>
        </div>
    )
}

export default ActualWeather;