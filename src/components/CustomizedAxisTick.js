import React, { Component } from 'react';


class CustomizedAxisTick extends Component {
    render() {
        const { x, y, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={15} y={0} dy={16} textAnchor="end" fill="#fff" transform="rotate(0)">
                    {payload.value}
                </text>
            </g>
        );
    }
}

export default CustomizedAxisTick;