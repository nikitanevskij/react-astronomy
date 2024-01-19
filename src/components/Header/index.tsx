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
                <Link to="react-astronomy/">Главная</Link>
              </li>
              <li>
                <Link to="react-astronomy/calendar">Выбрать перирод</Link>
              </li>
              <li>
                <Link to="react-astronomy/choice-date">Выбрать дату</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
