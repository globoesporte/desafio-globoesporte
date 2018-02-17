import React from 'react';
import { ToggleButton } from './ToggleButton';
import './Circle.scss';
import './Check.scss';

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
            //position: 'absolute',
//            top: '50%',
  //          left: '50%',
    //        transform: 'translate(-50%, -50%)'
        }

        return (
            <li className="list-group-item ">
                <div className={todoClass}>
                    {this.props.item.text}

                    <span style={style} onClick={this.handleToggle.bind(this)}>
                        <ToggleButton active={this.state.active} />
                    </span>

                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </li>
        );
    }
}