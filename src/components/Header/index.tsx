import React from "react";

import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__row}>
          <nav className={style.header__nav}>
            <ul>
              <li>
                <NavLink
                  to="react-astronomy/"
                  end
                  className={({ isActive }) => (isActive ? style.active : style.link)}
                >
                  Сегодня
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="react-astronomy/calendar"
                  className={({ isActive }) => (isActive ? style.active : style.link)}
                >
                  Архив
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="react-astronomy/choice-date"
                  className={({ isActive }) => (isActive ? style.active : style.link)}
                >
                  Выбрать дату
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
