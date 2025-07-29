import React from "react";
import "./Feedback.css";

export const Feedback = () => {
  return (
    <>
      <h1>Обратная связь</h1>
      <div>
        <h2>
          Оставьте свои контактные данные и мы разошлем их всем возможным
          спамерам
        </h2>
        <form>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Example@mail.com"
              name="email"
              id="email"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="tel">Телефон</label>
            <input
              type="tel"
              placeholder="+7(xxx)-xxx-xx-xx"
              name="tel"
              id="tel"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="name">Имя</label>
            <input type="text" placeholder="Иван" name="name" id="name" />
          </div>
          <button>Отправить</button>
        </form>
      </div>
    </>
  );
};
