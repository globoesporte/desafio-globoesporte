import React from 'react';
import { ToggleButton } from './ToggleButton';

import './TodoListItem.css';

export class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.state = {
            status: this.props.item.status
        };
    }
    onClickClose() {
        var index = parseInt(this.props.index, 0);
        this.props.removeItem(index);
    }
    onClickDone() {
        var index = parseInt(this.props.index, 0);
        this.props.markTodoDone(index);
    }
    handleToggle() {
        this.setState({ status: this.state.status==="todo"?"done":"todo"})
    }
    render() {
        var todoClass = this.state.status;

        const style = {
            display: 'block',
            marginTop : '10px'
        }

        return (
            <li >
                <div className={todoClass+' todoitem'}>
                    <span className="todotitle" >{this.props.item.text}</span>

                    <div style={style} onClick={this.handleToggle.bind(this)}>
                        <ToggleButton status={this.state.status} />
                    </div>

                    <div className="tododelete">
                        <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                    </div>
                </div>
            </li>
        );
    }
}