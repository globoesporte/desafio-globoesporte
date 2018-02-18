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
        this.setState({ status: this.state.status==='todo'?'done':'todo' })
    }
    render() {
        var todoClass = this.state.status;

        const style = {
            //fontSize: '6em',
            float: 'right',
            margin: '0 auto',
            display: 'block',
            top: '10px',
            left: '5px',
            transform: 'translate(1px, -45px)',
            'padding-right' : '40px'
        }

        return (
            <li className="todoitem ">
                <div className={todoClass}>
                    <span className="todotitle" >{this.props.item.text}</span>

                    <div style={style} onClick={this.handleToggle.bind(this)}>
                        <ToggleButton active={this.state.status==='todo'} />
                    </div>

                    <div className="tododelete">
                        <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                    </div>
                </div>
            </li>
        );
    }
}