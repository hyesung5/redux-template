import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorList from '../components/ColorList';
import * as colorListActions from '../store/modules/colorList';
import * as counterActions from '../store/modules/counter';
import { bindActionCreators } from 'redux';

class ColorListContainer extends Component {
    // 빈칸을 채워서 이번 프로젝트를 완성해보세요. 
    // 이전과 달라진 것은 전혀 없습니다.
    // mapStateToProps, mapDispatchToProps를 통해 내려준 props를 통해 해당 함수들을 완성해보세요.

    // input 변화
    
    handleChange = e => {
           
        // Todo
        
        const { ColorListActions } = this.props;
        ColorListActions.changeInput(e.target.value);

    };

    // color 추가
    handleSubmit = e => {
        // Todo
        e.preventDefault();
        const { ColorListActions, input } = this.props;
       // const {CounterActions}= this.props;
        ColorListActions.insert(input); // 등록
        ColorListActions.changeInput(''); // 인풋 값 초기화
       // CounterActions.changeColor(input);
    };

    // color opacity 업데이트   
    handleUpdate = id => {
        // Todo
        const { ColorListActions } = this.props;
        const {CounterActions}= this.props;
        ColorListActions.update(id);
        CounterActions.changeOpacity();
       

    };

    // color 제거
    handleRemove = id => {
        // Todo

        const { ColorListActions } = this.props;
        ColorListActions.remove(id);
    };

    handleAddColor =(color, opacity) =>{
        
        
        const {CounterActions}= this.props;
        CounterActions.changeColor(color);
        CounterActions.changeOpacity(opacity);
    }

    render() {
        const {input, list} = this.props;
        return (
            <ColorList 
            input={input} 
            colorList={list} 
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onUpdate={this.handleUpdate}
            onRemove={this.handleRemove}
            onAdd={this.handleAddColor}
            />
        );
    }
}

const mapStateToProps = ({ colorList: { input, list } }) => ({
    input,
    list
});

const mapDispatchToProps = dispatch => ({
    ColorListActions: bindActionCreators(colorListActions, dispatch),
    // 새롭게 추가한 color값을 counter에도 반영해야 하므로 CounterActions도 불러왔음
    CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorListContainer);