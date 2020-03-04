import React from 'react';
import clearSkyDay from '../img/weather_3.svg';
import clearSkyNight from '../img/weather_4.svg';
import fewCloudsDay from '../img/weather_2.svg';
import scatteredCloudsDay from '../img/weather_1.svg';
import showerRainDay from '../img/weather_6.svg';
import rainDay from '../img/weather_7.svg';
import thunderstormDay from '../img/weather_23.svg';
import snowDay from '../img/weather_35.svg';
import mistDay from '../img/weather_30.svg';
import rainNight from '../img/weather_8.svg';
import fewCloudsNight from '../img/weather_5.svg';
import { WiStrongWind, WiRaindrops, } from 'react-icons/wi'
import { GiSpeedometer } from 'react-icons/gi'

const ActualWeatherInfo = (props) => {
    let weatherImgSrc = null;
    // console.log(props.weather.image)
    const actualTime = Number(new Date().toLocaleTimeString().substring(0, 2));
    const actualTemperature = Math.round(props.weather.temp - 273.15)
    // console.log(actualTime)
    if (actualTime > 5 && actualTime < 21) {
        if (props.weather.image === '01d') { weatherImgSrc = clearSkyDay; }
        else if (props.weather.image === '02d') { weatherImgSrc = fewCloudsDay; }
        else if (props.weather.image === '03d') { weatherImgSrc = scatteredCloudsDay; }
        else if (props.weather.image === '04d') { weatherImgSrc = scatteredCloudsDay; }
        else if (props.weather.image === '09d') { weatherImgSrc = showerRainDay; }
        else if (props.weather.image === '10d') { weatherImgSrc = rainDay; }
        else if (props.weather.image === '11d') { weatherImgSrc = thunderstormDay; }
        else if (props.weather.image === '13d') { weatherImgSrc = snowDay; }
        else if (props.weather.image === '50d') { weatherImgSrc = mistDay; }
        else { weatherImgSrc = fewCloudsDay; }
    } else {
        if (props.weather.image === '01n') { weatherImgSrc = clearSkyNight; }
        else if (props.weather.image === '02n') { weatherImgSrc = fewCloudsNight; }
        else if (props.weather.image === '03n') { weatherImgSrc = scatteredCloudsDay; }
        else if (props.weather.image === '04n') { weatherImgSrc = scatteredCloudsDay; }
        else if (props.weather.image === '09n') { weatherImgSrc = showerRainDay; }
        else if (props.weather.image === '11n') { weatherImgSrc = thunderstormDay; }
        else if (props.weather.image === '13n') { weatherImgSrc = snowDay; }
        else if (props.weather.image === '50n') { weatherImgSrc = mistDay; }
        else if (props.weather.image === '10n') { weatherImgSrc = rainNight; }
        else { weatherImgSrc = fewCloudsNight; }
    }
    // console.log(clearSkyDay)
    return (
        <div className="actual-container" style={{ width: '360px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="actual-wrapper" style={{ display: 'flex', alignItems: 'center', marginTop: '30px', height: '200px' }}>
                <div style={{ textAlign: 'right' }}>
                    <img src={weatherImgSrc} alt="weather img" style={{ width: '150px', marginRight: '30px' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '68px', fontWeight: '400', width: '50%', textAlign: 'center', marginLeft: '30px' }}>{actualTemperature}°C</span>
                </div>
            </div>
            <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px' }}>
                <div className="additional-info" style={{ width: '119px', borderRight: '1px solid #fff', textAlign: 'center' }}>
                    <WiStrongWind fontSize="32" fontWeight="300" />
                    <p style={{ fontSize: '12px', marginTop: 0 }}>Wiatr</p>
                    <p style={{ fontSize: '12px', }}>{props.weather.wind} m/s</p>
                </div>
                <div className="additional-info" style={{ width: '119px', borderRight: '1px solid #fff', textAlign: 'center' }}>
                    <WiRaindrops fontSize="32" fontWeight="300" />
                    <p style={{ fontSize: '12px', marginTop: 0 }}>Wilgotność</p>
                    <p style={{ fontSize: '12px', }}>{props.weather.humidity} %</p>
                </div>
                <div className="additional-info" style={{ width: '119px', textAlign: 'center' }}>
                    <GiSpeedometer fontSize="32" fontWeight="300" />
                    <p style={{ fontSize: '12px', marginTop: 0 }}>Ciśnienie</p>
                    <p style={{ fontSize: '12px', }}>{props.weather.pressure} hPa</p>
                </div>
            </div>
        </div>
    )
}

export default ActualWeatherInfo;