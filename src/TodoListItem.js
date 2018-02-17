import React from 'react';

import './Circle.scss';
import './Check.scss';

export class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
        var index = parseInt(this.props.index, 0);
        this.props.removeItem(index);
    }
    onClickDone() {
        var index = parseInt(this.props.index, 0);
        this.props.markTodoDone(index);
    }
    render() {
        var todoClass = this.props.item.status;

        return (
            <li className="list-group-item ">
                <div className={todoClass}>
                    {this.props.item.text}
                    
                    <span hidden={this.props.item.status==='todo'} aria-hidden="true" onClick={this.onClickDone}>
                    <div class="checkmark-circle">
                        <div class="background"></div>
                        <div class="checkmark draw"></div>
                    </div>
                    </span>
                    <span hidden={this.props.item.status==='done'} aria-hidden="true" onClick={this.onClickDone}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53">
                            <circle className="path-circle" fill="none" stroke="#dfdfe7" stroke-width="10" stroke-miterlimit="10" cx="26" cy="26" r="20" />
                        </svg>
                    </span>
                    
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}