import React from 'react';
import { ToggleButton } from './ToggleButton';

import './TodoApp.css';

export class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.state = {
            active: false
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
        this.setState({ active: !this.state.active })
    }
    render() {
        var todoClass = this.props.item.status;

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
            <li className="list-group-item ">
                <div className={todoClass}>
                    <span className="todotitle" >{this.props.item.text}</span>

                    <div style={style} onClick={this.handleToggle.bind(this)}>
                        <ToggleButton active={this.state.active} />
                    </div>

                    <div>
                        <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                    </div>
                </div>
            </li>
        );
    }
}