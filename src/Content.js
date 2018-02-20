import React, { Component } from 'react';
import TaskList from './TaskList';
import jsonData from './api/data.json'

class Content extends Component {
	constructor(props) {
		super(props)

		this.state = {
			jsonData: jsonData,
			name: "Escreva aqui uma nova tarefa..."
		}

		this.updateInputName     = this.updateInputName.bind(this)
		this.clickEvent          = this.clickEvent.bind(this)
		this.handleKeyPress	     = this.handleKeyPress.bind(this)

	}

	handleKeyPress(e){
	    if (e.key === 'Enter') {
	     	this.addTask(this.state.name);
	     	/**
				Inclusão abaixo existe apenas para que alista de tarefas tenha 
				a capacidade de inserir uma tarefa em sua instancia
				obs.: 'content' deve manter uma instancia da lista de tarefas
	     	*/
	     	//this.taskList.addTask(this.state.name)

			return this.setState({
				name: "Escreva aqui uma nova tarefa..."
			});
	    }
	}

	addTask(text){
     	this.state.jsonData.push({text: text, status: "todo"})
	}

	updateInputName(e) {
		return this.setState({
			name: e.target.value
		})
	}

	clickEvent(e) {
		this.setState({
			name:""
		})
	}

	render() {
		return (
			<div className="Content_container">

				<input type="text" className="Content_input" value={ this.state.name } 
					onClick={ this.clickEvent } 
					onChange={ this.updateInputName }
					onKeyPress={ this.handleKeyPress }
					/>
				<div className="Content_line"></div>
				
				<TaskList data={this.state.jsonData} 
			     	ref={inst => { this.taskList = inst; }}
					/>

			
			</div>
		)
	}
}

export default Content;