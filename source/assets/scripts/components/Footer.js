import React from "react";
import {Link} from '../router';

export const Footer = () => {
  return (
    <footer className="x footer">
      <span className="x footer__text">Faltam x tarefas</span>
      <nav className="x footer__nav">
        <Link to="/">Todos</Link>
        <Link to="/feitos">Feitos</Link>
        <Link to="/fazer">A Fazer</Link>
      </nav>
    </footer>
  );
};