import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form.js'
import Result from './Result.js';

const APIKey = `c11fe48850d77d616156f3d2acbd4b2f`;

class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    temp: '',
    pressure: '',
    wind: '',
    humidity: '',
    image: '',
    err: false,
    api: false
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      value: '',
      date: '',
      city: '',
      temp: '',
      pressure: '',
      wind: '',
      humidity: '',
      image: '',
      err: false,
      api: false
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;
    // const API = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=${APIKey}`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        const time = new Date().toLocaleString();
        this.setState(prevState => ({
          err: false,
          date: time,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          city: prevState.value,
          image: data.weather[0].icon,
          api: true
        }))

      })
      .catch(err => {
        // console.log(err);
        this.setState(prevState => ({
          err: true,
          city: prevState.value
        }))
      })
  }


  render() {
    return (
      <div className="App">
        {this.state.value && this.state.api ? <><Header handleClick={this.handleClick} /><Result weather={this.state} /></> : <Form
          value={this.state.value}
          city={this.state.city}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
          error={this.state.err}
          api={this.state.api}

        />}


        {/* {!this.state.err ?  : } */}

        {/* <Result weather={this.state} /> */}

      </div>
    );
  }
}

export default App;
