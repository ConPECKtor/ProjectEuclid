import "./App.css";
import { useState } from "react";

import X from "./style/SVG/X.svg";
import logo from "./style/SVG/logo.svg";
import logotext from "./style/SVG/LogoText.svg";
import search from "./style/SVG/search.svg";
import closed_search from "./style/SVG/closed_search.svg";
import burgerButton from "./style/SVG/burgerButton.svg";

import circleActive from "./style/SVG/CircleA.svg";
import circleDefault from "./style/SVG/CircleD.svg";

import about_1 from "./style/SVG/about_1.svg";
import about_2 from "./style/SVG/about_2.svg";

function Header({
  burgerActive,
  setBurgerActive,
  searchActive,
  setSearchActive,
}) {
  return (
    <nav className="header">
      <div
        className={`header__burger ${
          burgerActive ? "header__burger--active" : ""
        }`}
      >
        <img
          src={X}
          alt="Закрыть"
          className="burger__close-button"
          onClick={() => setBurgerActive(false)}
          style={{ cursor: "pointer" }}
        />

        <ul className="header__burgerList">
          <li className="header__burgerListItem">
            <a href="#projects" className="header__burgerListItemLink">
              <b>Проекты</b>
            </a>
          </li>
          <li className="header__burgerListItem">
            <a href="#about" className="header__burgerListItemLink">
              <b>О нас</b>
            </a>
          </li>
          <li className="header__burgerListItem">
            <a href="#stages" className="header__burgerListItemLink">
              <b>Этапы</b>
            </a>
          </li>
          <li className="header__burgerListItem">
            <a href="#reviews" className="header__burgerListItemLink">
              <b>Отзывы</b>
            </a>
          </li>
          <li className="header__burgerListItem">
            <a href="#contacts" className="header__burgerListItemLink">
              <b>Контакты</b>
            </a>
          </li>
        </ul>
      </div>

      <div className="header__burgerButton">
        <img
          src={burgerButton}
          alt="Кнопка для навигации (мобильная)"
          onClick={() => setBurgerActive(true)}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="header__logobox">
        <img src={logo} alt="Лого" className="header__logoboxLogo" />
        <img src={logotext} alt="Текст" className="header__logoboxText" />
      </div>

      <ul className="header__list">
        <li className="header__listItem">
          <a href="#projects" className="header__listItemLink">
            <b>О нас</b>
          </a>
        </li>
        <li className="header__listItem">
          <a href="#about" className="header__listItemLink">
            <b>Проекты</b>
          </a>
        </li>
        <li className="header__listItem">
          <a href="#stages" className="header__listItemLink">
            <b>Этапы</b>
          </a>
        </li>
        <li className="header__listItem">
          <a href="#reviews" className="header__listItemLink">
            <b>Отзывы</b>
          </a>
        </li>
        <li className="header__listItem">
          <a href="#contacts" className="header__listItemLink">
            <b>Контакты</b>
          </a>
        </li>
      </ul>

      <div
        className={`header__searchBurger ${
          searchActive ? "header__searchBurger--active" : ""
        }`}
      >
        <input type="text" className="header__searchBurgerText" />
        <img src={search} alt="Кнопка поиска" />
        <img
          src={closed_search}
          alt="Кнопка закрытия поиска"
          onClick={() => setSearchActive(false)}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className="header__searchButton">
        <img
          src={search}
          alt="Кнопка поиска"
          onClick={() => setSearchActive(true)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <div className="banner">
        <h2 className="banner__title">Проектные решения любой сложности</h2>
        <p className="banner__desc">
          Есть над чем задуматься: базовые сценарии поведения пользователей и по
          сей день остаются уделом проектантов
        </p>
        <button className="banner__addOrder">Заказать расчёт</button>
        {/* <div className="banner__mainInfo">
          <div className="banner__mainInfoTexts">
            <p className="banner__mainInfoTitle">Проектные решения любой сложности</p>
            <p className="banner__mainInfoDescription">
              Есть над чем задуматься: базовые сценарии поведения пользователей
              и по сей день остаются уделом проектантов
            </p>
          </div>

          <button className="banner__mainInfoButton">Заказать расчёт</button>
        </div> */}

        <div className="banner__backgroundsBtn">
          <img src={circleActive} alt="" />
          <img src={circleDefault} alt="" />
          <img src={circleDefault} alt="" />
        </div>
      </div>
      <div className="about">
        <div className="about__maintext">
          <h2>О Нас</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            repellat et atque sequi incidunt voluptas quaerat suscipit, esse
            porro aliquam voluptatem sunt veritatis accusantium quibusdam,
            tempore non dolorum, rerum dignissimos?
          </p>
        </div>
        <div className="about__card">
          <div className="about__cardPhoto">
            <div className="about__cardPhotoFooter">
              <p>
                Принимая во внимание показатели успешности, перспективное
                планирование способствует подготовке и реализации новых
                принципов
              </p>
              <button>Подробнее</button>
            </div>
          </div>

          <div className="about__cardCards">
            <div className="about__cardCardsItem">
              <img src={about_1} alt="Фигура" />
              <p>Консультация с широким активом</p>
              <p>
                А также свежий взгляд на привычные вещи — безусловно открывает
                новые горизонты для как самодостаточных, так и внешне зависимых
                концептуальных решений
              </p>
            </div>
            <div className="about__cardCardsItem">
              <img src={about_2} alt="Фигура" />
              <p>В своём стремлении повысить</p>
              <p>
                Качество жизни, они забывают, что сплочённость команды
                профессионалов представляет собой интересный эксперимент
                проверки прогресса профессионального сообщества
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return <footer></footer>;
}

function Euclid() {
  let [burgerActive, setBurgerActive] = useState(false);
  let [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <div>
        <Header
          burgerActive={burgerActive}
          setBurgerActive={setBurgerActive}
          searchActive={searchActive}
          setSearchActive={setSearchActive}
        />
      </div>
      <div className="container">
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return <Euclid />;
}
