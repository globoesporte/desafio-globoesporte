import React from 'react';

class Filters extends React.Component {

    changeFilter(filter) {
        this.props.changeFilter(filter);
    }

    render() {
        return (
            <div className="filter">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td width="55%">Faltam {this.props.tasksTodo} tarefas</td>
                            <td width="15%">
                                <input type="radio" defaultChecked onChange={this.changeFilter.bind(this, "all")} id="all" name="filter"/><label htmlFor="all">Todos</label>
                            </td>
                            <td width="15%">
                                <input type="radio" onChange={this.changeFilter.bind(this, "done")} id="done" name="filter"/><label htmlFor="done">Feitos</label>
                            </td>
                            <td width="15%">
                                <input type="radio" onChange={this.changeFilter.bind(this, "todo")} id="todo" name="filter"/><label htmlFor="todo">A Fazer</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Filters;