import React from "react";

import style from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__row}>
          <nav className={style.header__nav}>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/calendar">Выбрать перирод</Link>
              </li>
              <li>
                <Link to="/choice-date">Выбрать дату</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
