import React, { Component } from 'react';

import './TodoSelectTab.css';

import { TodoSelectTabButton} from './TodoSelectTabButton';


export class TodoSelectTab extends Component {

    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { selected : this.props.selected};
    }

    onClick(text){
        this.setState({ selected : text});
        this.props.onClick(text);
    }

    render() {
        var selected = this.state.selected;
        
        var items = this.props.items.map((item, index) => {
            return (
                <TodoSelectTabButton selected={selected===item.text} 
                    name={this.props.name} 
                    key={index}
                    item={item}
                    index={index}
                    tabSelect={this.props.tabSelect} 
                    onClick={this.onClick.bind(this)} />
            );
        });
        return (
            <ul className="tg-list"> {items} </ul>
        );

    }

}

