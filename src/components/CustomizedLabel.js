import React, { Component } from 'react';


class CustomizedLabel extends Component {
    render() {
        const { x, y, value } = this.props;
        // console.log(this.props.stroke)
        return <text style={{ color: '#fff' }} x={x} y={y} dy={-10} fill={'#fff'} fontSize={16} fontWeight={400} textAnchor="middle">{value}&#176;</text>
    }
};

export default CustomizedLabel