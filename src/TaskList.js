import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			data: this.props.data,
			displayType: "all", 
			filters: ["todo", "done", "all"],
			filters_t: ["A fazer", "Feitos", "Todos" ]
		}

	}
	componentDidUpdate(){
		if(this.nameInput !== undefined && this.nameInput !== null && this.nameInput !== ""){
			this.refs["task"+this.nameInput].refs.input.focus()
			this.nameInput = null
		}
	}

	changeTaskStatus(index){

		const data = this.state.data
		data[index].status = data[index].status === "done" ? "todo" : "done";
		
		this.setState({
			data: data
		})
	}

	addTask(text){
		const data = this.state.data;
		data.push({text: text, status: "todo"})
		this.setState({
			data: data
		})
	}

	deleteTask(index) {
		const data = this.state.data
		data.splice(index, 1)
		this.setState({
			data: data
		})
	}
	handleKeyPress(index, e){
	    if (e.key === 'Enter') {
	     	const data = this.state.data

			data[index].text = e.target.value;
			e.target.focus();

			this.setState({
				data: data
			})
	    }
	}

	changeDisplayType(e){
		this.setState({displayType:e})
	}

	renderFilters(e){
		const filters = this.state.filters.map((item) => {
			let css = item === this.state.displayType ? "Task_display active" : "Task_display";
			let index = this.state.filters.indexOf(item)
			return <div className={css} key={item} 
						onClick={ this.changeDisplayType.bind(this, item)}>{this.state.filters_t[index]}</div>
		})

		return filters
	}
	render() {

		let tasks = [];
		let todoCount = 0;

		tasks = this.props.data.map((item, index) => {
			if(item.status === "todo")
					todoCount++;

			if(this.state.displayType === "all" || this.state.displayType === item.status ){
				
				return <Task key={index} item={item} 
							changeStatus={this.changeTaskStatus.bind(this,index)}
							deleteTask={this.deleteTask.bind(this,index)}
							handleKeyPress={this.handleKeyPress.bind(this, index)}
							/>
			}else{
				return null;
			}
		})
		
		return (
			<div>
			<div className="Tasks_container">
				{tasks}
			</div>
			<div className="Tasks_container footer">
					<div className="Task_missin">{"Faltam "+todoCount+" tarefas"}</div>
					{this.renderFilters()}
			</div>
			</div>

		)
	}
}

export default TaskList;
