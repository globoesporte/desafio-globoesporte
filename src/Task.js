import React, { Component } from 'react';
import X from './x.svg';

class Tasks extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: ""
		}
	}
	componentWillReceiveProps(nextProps){
		//in case of deletion
		if(nextProps.item.text !== this.state.name){
			return this.setState({
				name: nextProps.item.text
			})	
		}
	}
	componentDidMount(){
		this.setState({name:this.props.item.text})
	}
	updateInputName(e) {
		return this.setState({
			name: e.target.value
		})
	}
	onChange(e){
		return this.setState({name: e.target.value})
	}
	render() {
		return <div className="Tasks_task" key={this.props.item.text}  >
					<div className={"Task_text_btn"} >
						<input type="text"  
							className={"Task_text "+this.props.item.status} 
							value={this.state.name}
							onChange={this.onChange.bind(this)}
							onKeyPress={ this.props.handleKeyPress }
							/>
			
						<div className={"Task_btn_"+this.props.item.status} onClick={this.props.changeStatus} ></div>
					</div>
					
					<div className={"Task_btn_delete"}>
						<img src={X} alt="" onClick={this.props.deleteTask}/>
					</div>
			   </div>
	}
}

export default Tasks;