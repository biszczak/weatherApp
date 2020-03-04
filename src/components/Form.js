import React from 'react';
import Logo from './Logo';
import './Form.css'

const Form = (props) => {

    return (
        <div className="FormContainer" >
            <div className="content">
                <Logo />
                <h1 style={{ color: '#fff' }}>iWeather</h1>
                <form onSubmit={props.submit} >
                    <input style={!props.api && props.error ? { borderBottom: '1px solid #d35266' } : { borderBottom: '1px solid #fff' }}
                        type="text"
                        placeholder="Wpisz miejscowość"
                        value={props.value}
                        onChange={props.change}
                    />
                    {!props.api && props.error ? <span style={{ position: 'absolute', color: '#d35266', fontSize: '12px', marginTop: '43px' }}>Brak miejscowości {props.city} w bazie</span> : null}
                    <button>Wyszukaj</button>
                </form>
            </div>
            <p style={{ color: '#fff', position: 'absolute', bottom: 0, fontWeight: 300 }}>Copyright by Biszczak</p>
        </div>
    )
}

export default Form