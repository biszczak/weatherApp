import React from 'react';
import { LineChart, Line, XAxis } from 'recharts';
import CustomizedLabel from './CustomizedLabel';
import CustomizedAxisTick from './CustomizedAxisTick';



const HoursWeather = (props) => {
    const windowWidth = window.innerWidth;
    return (
        <div style={{ color: '#fff', borderBottom: '1px solid rgba(255, 255, 255, 0.5)', paddingBottom: '15px' }}>
            <h4 style={{ fontWeight: 300, marginTop: '47px' }}>TEMPERATURA GODZINNA</h4>

            <LineChart width={windowWidth < 732 ? (windowWidth - 35) : 700} height={250} margin={{ left: 30, right: 30, top: 50 }} data={props.weatherData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" height={60} width={600} stroke="#fff" tick={<CustomizedAxisTick />} />
                {/* <YAxis /> */}
                <Line type="monotone" dataKey="uv" stroke="#fff" label={<CustomizedLabel />} />
            </LineChart>


        </div>
    )
    // }
}

export default HoursWeather;