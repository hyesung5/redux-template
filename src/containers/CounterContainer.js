import React, { Component } from 'react';
import Counter from '../components/Counter';
// counterActions라는 이름으로 counter모듈에서 export해준 액션생성함수들을 한번에 받아옵니다.
import * as counterActions from '../store/modules/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
    render() {
        const { number, CounterActions, color, opacity } = this.props;
        return (
            <Counter
                number={number}
                onIncrement={CounterActions.increment}
                onDecrement={CounterActions.decrement}
                color={color}
                opacity={opacity}
            />
        );
    }
}

const mapStateToProps = state => ({
    number: state.counter.number,
    color: state.counter.color,
    opacity: state.counter.opacity
});

const mapDispatchToProps = dispatch => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);