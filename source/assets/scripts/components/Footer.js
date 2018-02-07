import React from "react";
import { Link } from '../routes';

export const Footer = ({remainingTodos}) => {

  const fazer = remainingTodos > 1 ? 'Faltam' : 'Falta';
  const tarefa = remainingTodos > 1 ? ' tarefas' : 'tarefa';
  const remaining = remainingTodos === 0 
    ? <span className="x footer__text">Sem tarefas</span>
    : <span className="x footer__text">
        {fazer} {remainingTodos} {tarefa}
      </span>

  return (
    <footer className="x footer">
      {remaining}
      <nav className="x footer__nav">
        <Link to="/">Todos</Link>
        <Link to="/feitos">Feitos</Link>
        <Link to="/fazer">A fazer</Link>
      </nav>
    </footer>
  );
};