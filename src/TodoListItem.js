import React from 'react';
import { ToggleButton } from './ToggleButton';

import './TodoListItem.css';

export class TodoListItem extends React.Component {

    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }
    
    onClickClose() {
        var index = parseInt(this.props.index, 0);
        this.props.removeItem(index);
    }

    onToggle() {
        var index = parseInt(this.props.index, 0);
        this.props.onToggle(index);
   }

    render() {
        const style = {
            display: 'block',
            marginTop: '10px'
        }

        return (
            <li >
                <div className={this.props.item.status + ' todoitem'}>
                    <span className="todotitle" >{this.props.item.text}</span>

                    <div style={style} onClick={this.onToggle.bind(this)}>
                        <ToggleButton status={this.props.item.status} />
                    </div>

                    <div className="tododelete">
                        <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                    </div>
                </div>
            </li>
        );
    }
}