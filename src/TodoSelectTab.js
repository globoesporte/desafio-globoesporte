import React, { Component } from 'react';

import './TodoSelectTab.css';

import { TodoSelectTabButton} from './TodoSelectTabButton';


export class TodoSelectTab extends Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
                <TodoSelectTabButton name={this.props.name} key={index} item={item} index={index} tabSelect={this.props.tabSelect} />
            );
        });
        return (
            <ul className="tg-list"> {items} </ul>
        );

    }

}

