import React, { Component } from 'react';
import './ColorList.css';

class ColorList extends Component {

	render() {

		const{onChange, onSubmit , onUpdate, onRemove, input, colorList, onAdd}= this.props;
		
		return (
			<div>
				<form className="ColorList" onSubmit={onSubmit}>
					<input 
					placeholder="원하는 색을 입력하세요"
					name='color_text' 
					value={input} 
					onChange={onChange} 
					
					/>
					<button>등록</button>
					</form>
					<ul>
					{colorList.map((color) => {
						return (
							<li key={color.id}>
								<h1 style={{color: (color.color), opacity: (color.opacity)}} onClick={(e)=> {e.preventDefault(); onAdd(color.color, color.opacity)}}>{color.color}</h1>
							<button onClick={(e) => { e.preventDefault(); onUpdate(color.id);}}>수정</button>
							<button onClick={(e)=> {e.preventDefault(); onRemove(color.id);}}>삭제</button>
              </li>
						);
					})}
				</ul>
			
			</div>
		);
	}
}

export default ColorList;
