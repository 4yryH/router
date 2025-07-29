import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/posts"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Лента постов
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Об авторе
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Обратная связь
        </NavLink>
      </nav>
    </>
  );
};
