import React, { Component } from 'react';
import ActualWeather from './ActualWeather';
import HoursWeather from './HoursWeather';
import DayWeather from './DayWeather';

const APIKey = 'c11fe48850d77d616156f3d2acbd4b2f';

class Result extends Component {


    state = {
        weatherData: [],
        allDays: []
    }
    dayHours;

    componentDidMount() {
        const API = `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.weather.value}&appid=${APIKey}`;
        // const
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error('Błąd pobierania danych')
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const weatherData = [];
                const dayHours = [...data.list.slice(1, 6)]
                dayHours.forEach(hour => {
                    // console.log(hour)
                    hour = {
                        name: hour.dt_txt.substring(11, 16),
                        uv: Math.round(hour.main.temp - 273.15),
                    }
                    weatherData.push(hour)
                })
                const allDays = [];
                data.list.forEach(day => {
                    day = {
                        date: day.dt_txt.substring(5, 10),
                        day: Number(day.dt_txt.substring(8, 10)),
                        month: Number(day.dt_txt.substring(5, 7)),
                        tempMax: Math.round(day.main.temp_max - 273.15),
                        tempMin: Math.round(day.main.temp_min - 273.15),
                        weather: day.weather[0].icon

                    }
                    allDays.push(day)
                    // console.log(day)
                })
                this.setState({
                    weatherData: weatherData,
                    allDays: allDays
                })


            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { city, err } = this.props.weather;


        let content = null;

        // console.log(this.state.allDays)
        if (!err && city) {
            // const tempInCelcius = Math.round(temp - 273.15);
            // const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
            // const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
            content = (

                <div className="ResoultContainer" style={{ marginTop: '90px' }}>

                    <ActualWeather weather={this.props.weather} />
                    <HoursWeather weatherData={this.state.weatherData} />
                    <DayWeather weather={this.props.weather} weatherData={this.state.weatherData} allDays={this.state.allDays} />
                </div>
            )
        }
        return (
            <div className="resolult" style={{ color: '#fff', fontSize: '16px', fontWeight: '300' }}>
                {err ? `Brak miasta ${city} w bazie` : content}
            </div>
        )
    }
}


export default Result;