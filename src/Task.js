import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hiddenDelete: true,
            taskClass: 'task',
        };
    }

    componentDidMount() {
        if (this.props.task.status === 'done')
            this.setState({taskClass: 'taskDone'});
    }

    renderButtons() {
        const pathFirstImg = this.props.task.status === 'todo' ? 'img/todo.png': 'img/done.png';
        const pathSecondImg = this.props.task.status === 'todo' ? 'img/delete.png': '';
        
        let firstImg, secondImg;

        firstImg = (<img src={pathFirstImg} onClick={this.clickTask.bind(this)}/>);

        if (this.props.task.status === 'done') {
            secondImg = (<div/>);
        } else {
            secondImg = (<img hidden={this.state.hiddenDelete} src={pathSecondImg} onClick={this.props.deleteTask}/>);
        }
        return [firstImg, secondImg];
    }

    clickTask() {
        if (this.props.task.status === 'done')
            this.setState({taskClass: 'task'});
        else
            this.setState({taskClass: 'taskDone'});
        this.props.checkTask();
    }

    taskHover(e) {
        const hidden = !this.state.hiddenDelete;
        this.setState({hiddenDelete: hidden});
    }

    render() {

        const imgs = this.renderButtons();
        
        return(
            <tr className={this.state.taskClass} onMouseOut={this.taskHover.bind(this)}
                onMouseOver={this.taskHover.bind(this)}>
                <td width="80%" onClick={this.props.editTaskHandler}>
                    <p>{this.props.task.text}</p>
                </td>
                <td width="10%">
                    {imgs[0]}
                </td>
                <td width="10%">
                    {imgs[1]}
                </td>
            </tr>
        );
    }
}

export default Task;