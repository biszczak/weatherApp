import React from 'react';
import NextDays from './NextDays.js'




const DayWeather = (props) => {
    const today = props.weather.date;
    let day = Number(today.substring(0, 2));
    let month = Number(today.substring(3, 5));
    const temperatures = [];

    let nextDaysWeather = [];
    props.allDays.forEach(element => {

        if ((element.day > day && element.month === month) || (element.day < day && element.month > month)) {
            nextDaysWeather.push(element);
            day = element.day;
            month = element.month

        }
    });

    // console.log(props.allDays)
    const getMinAndMaxTemp = () => {
        nextDaysWeather.forEach(e1 => {
            let obj = { date: '', day: e1.day, min: 100, max: -100, weather: [] };
            obj.date = e1.date;
            // obj.weather = e1.weather
            props.allDays.forEach(e2 => {
                if (e1.date === e2.date) {
                    obj.weather.push(e2.weather)
                    if (e2.tempMin < obj.min || e2.tempMin < obj.max) {
                        obj.min = e2.tempMin;
                    }

                    if (e2.tempMax > obj.max || e2.tempMax > obj.min) {
                        obj.max = e2.tempMax;
                    }
                }
            })
            temperatures.push(obj)
        });
    }

    getMinAndMaxTemp();
    nextDaysWeather = [...temperatures];
    // console.log(nextDaysWeather);


    // console.log(nextDaysWeather)
    // console.log(temperatures)
    // console.log(props.weather.image)
    return (
        <div style={{ paddingBottom: '100px' }}>
            <h4 style={{ fontWeight: '300', marginTop: '46px', marginBottom: '35px' }}>NA NASTĘPNE DNI</h4>
            <div style={{ display: 'flex' }}>

                {
                    nextDaysWeather.map(day => {
                        // console.log(index);
                        return <NextDays key={day.day} weather={props.weather} nextDaysWeather={day} temperatures={temperatures} />
                    })
                }

            </div>
        </div>
    )
}

export default DayWeather;