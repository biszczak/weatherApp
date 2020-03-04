import React from 'react';
import './NextDays.css';
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

let weatherDayImgSrc = null;
let weatherNightImgSrc = null;



const NextDays = (props) => {
    // { console.log(props.nextDaysWeather) }
    const highest = arr => (arr || []).reduce((acc, el) => {
        acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1
        acc.max = acc.max ? acc.max < acc.k[el] ? el : acc.max : el
        return acc
    }, { k: {} }).max

    const actualConditions = highest(props.nextDaysWeather.weather);
    // console.log(actualConditions)
    const weatherIcon = actualConditions.substring(0, 2);
    // console.log(weatherIcon)
    // const nightOrDay = actualConditions[actualConditions.length - 1];
    // console.log(nightOrDay);

    switch (weatherIcon) {
        case '01':
            weatherDayImgSrc = clearSkyDay;
            break;
        case '02':
            weatherDayImgSrc = fewCloudsDay;
            break;
        case '03':
            weatherDayImgSrc = scatteredCloudsDay;
            break;
        case '04':
            weatherDayImgSrc = scatteredCloudsDay;
            break;
        case '09':
            weatherDayImgSrc = showerRainDay;
            break;
        case '10':
            weatherDayImgSrc = rainDay;
            break;
        case '11':
            weatherDayImgSrc = thunderstormDay;
            break;
        case '13':
            weatherDayImgSrc = snowDay;
            break;
        case '50':
            weatherDayImgSrc = mistDay;
            break;

        default:
            break;
    }

    switch (weatherIcon) {
        case '01':
            weatherNightImgSrc = clearSkyNight;
            break;
        case '02':
            weatherNightImgSrc = fewCloudsNight;
            break;
        case '03':
            weatherNightImgSrc = scatteredCloudsDay;
            break;
        case '04':
            weatherNightImgSrc = scatteredCloudsDay;
            break;
        case '09':
            weatherNightImgSrc = showerRainDay;
            break;
        case '10':
            weatherNightImgSrc = thunderstormDay;
            break;
        case '11':
            weatherNightImgSrc = snowDay;
            break;
        case '13':
            weatherNightImgSrc = mistDay;
            break;
        case '50':
            weatherNightImgSrc = rainNight;
            break;

        default:
            break;
    }



    return (
        <div className="next-days-container">
            <div className="temps">
                <div className="day-temp">
                    <img src={weatherDayImgSrc} alt="weather img" style={{ width: '22px' }} />
                    <p>{props.nextDaysWeather.max}°</p>
                </div>
                <div className="night-temp">
                    <img src={weatherNightImgSrc} alt="weather img" style={{ width: '22px' }} />
                    <p>{props.nextDaysWeather.min}°</p>
                </div>
            </div>
            <div className="date">{props.nextDaysWeather.date.replace('-', '.')}</div>

        </div>
    )
}

export default NextDays;