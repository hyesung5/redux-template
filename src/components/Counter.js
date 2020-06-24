import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    render() {
        const { number, onIncrement, onDecrement, color, opacity } = this.props;

        const style = {
            color,
            opacity
        };

        return (
            <div className="Counter">
                <h1 style={style}>{number}</h1>
                <div className="btn-wrapper">
                    <button onClick={onIncrement}>+</button>
                    <button onClick={onDecrement}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;