import Moment from 'react-moment';
import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pt';

import './TodoHoje.css';

Moment.globalLocale = 'pt';


export class TodoHoje extends Component {
    render() {

        const today = moment();

        const weekday = today.format('dddd').replace('-feira','');

        return (
            <div className="hoje">
                <div className="hoje-group" >
                    
                    <div className="hoje-sem-mes-ano" >
                        <div className="hoje-semana">{weekday}</div>
                        <Moment className="hoje-mes-ano" element="div" locale="pt" format="MMM YYYY">{today}</Moment>
                    </div>
                    <Moment className="hoje-dia" element="div" locale="pt" format="DD">{today}</Moment>
                </div>
            </div>
        );
    }
}