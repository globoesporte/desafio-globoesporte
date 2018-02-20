import React, { Component } from 'react';

import './TodoSummary.css'

export class TodoSummary extends Component {
    render() {
        return (
            <span className="summary">
                Faltam {this.props.total} tarefas
          </span>

        );
    }
}