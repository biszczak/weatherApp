import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Header = (props) => {

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, paddingTop: '20px', paddingBottom: '20px', paddingLeft: '20px', width: '100%', textAlign: 'left', background: 'rgba(255,255,255, 0.1)' }}>
            <div style={{ cursor: 'pointer', display: "flex", alignItems: 'center', color: '#fff', fontWeight: 300 }} onClick={props.handleClick}>
                <IoIosArrowBack style={{ marginRight: '15px' }} />
                Wróć
            </div>
        </div>
    )
}

export default Header;