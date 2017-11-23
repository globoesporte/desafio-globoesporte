import React  from 'react';

import TodoList from './TodoList';
import Filters from './Filters';

class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasksTodo: 0,
            filter: "all",
            isEditing: false,
            editIndex: 0,
        };
    }

    tasksTodoHandler(quantity) {
        this.setState({tasksTodo: quantity});
    }

    changeFilter(filter) {
        this.setState({filter: filter});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            if (this.state.isEditing) {
                this.todoList.editTask(e.target.value, this.state.editIndex);
                this.setState({isEditing: false});
            } else
                this.todoList.addTask(e.target.value);
            e.target.value = '';
        }
    }

    editTask(task, index) {
        this.setState({isEditing: true, editIndex: index});
        this.textInput.value = task.text;
    }

    render() {
        return (
            <div>
                <input placeholder="Escreva aqui uma nova tarefa..." 
                    onKeyPress={this.handleKeyPress.bind(this)}
                    ref={(input) => { this.textInput = input; }}/>

                <TodoList tasksTodo={(quant) => this.tasksTodoHandler(quant)}
                    filter={this.state.filter}
                    ref={instance => { this.todoList = instance; }}
                    editTaskHandle={(task, index) => this.editTask(task, index)}/>
                    
                <Filters tasksTodo={this.state.tasksTodo}
                    changeFilter={(filter) => this.changeFilter(filter)}/>
            </div>
        )
    }
}

export default Content;