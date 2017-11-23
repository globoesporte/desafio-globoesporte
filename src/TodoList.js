import React from 'react';

import Task from './Task';

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        const data = require('../api/data.json');
        this.state = { data };
    }

    componentDidMount() {
        this.props.tasksTodo(this.tasksTodo());
    }

    addTask(newTask) {
        const data = this.state.data;
        data.push({text: newTask, status: 'todo'});
        this.setState(data);

        this.props.tasksTodo(this.tasksTodo());
    }

    editTask(editedTask, index) {
        const data = this.state.data;
        data[index].text = editedTask;
        this.setState(data);
    }

    tasksTodo() {
        let quantity = 0;
        this.state.data.map((task, index) => {
            if (task.status === 'todo') {
                quantity++;
            }
        });
        return quantity;
    }

    checkTaskStatus(indexTask) {
        const status = this.state.data[indexTask].status;
        const data = this.state.data;
        data[indexTask].status = status === 'done' ? 'todo': 'done';
        this.setState(data);

        this.props.tasksTodo(this.tasksTodo());
    }

    deleteTask(indexTask) {
        const data = this.state.data;
        data.splice(indexTask, 1);
        this.setState(data);

        this.props.tasksTodo(this.tasksTodo());
    }

    renderList() {
        return this.state.data.map((task, index) => {

            if (this.props.filter !== task.status && this.props.filter != 'all')
                return;

            return (
                <Task key={index} task={task}
                    checkTask={this.checkTaskStatus.bind(this, index)}
                    deleteTask={this.deleteTask.bind(this, index)}
                    editTaskHandler={() => this.props.editTaskHandle(task, index)}/>
            );
        });
    }

    render() {
        const content = this.renderList();
        return (
            <div className="todoList">
                <table cellSpacing="0" cellPadding="0">
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;