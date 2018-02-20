import React from 'react';
import EditableLabel from 'react-inline-editing';

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

                    <EditableLabel text={this.props.item.text}
                        labelClassName='todotitle'
                        inputClassName='todoedit'
                        inputWidth='200px'
                        inputHeight='25px'
                        inputMaxLength='20'
                        inputFontSize='18px'
                        inputBorderWidth='0px' 	
                    />
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