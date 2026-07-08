import "./App.css";
import logo from "./style/SVG/logo.svg";
import logotext from "./style/SVG/LogoText.svg";
import search from "./style/SVG/search.svg";

import about_1 from "./style/SVG/about_1.svg";
import about_2 from "./style/SVG/about_2.svg";

function App() {
  return (
    <div className="App">
      <nav className="header">
        <div className="header__logobox">
          <img src={logo} alt="Лого" />
          <img src={logotext} alt="Текст" />
        </div>
        <ul className="header__list">
          <li className="header__listItem">
            <a href="#projects" class="header__listItemLink">
              <b>Проекты</b>
            </a>
          </li>
          <li className="header__listItem">
            <a href="#about" class="header__listItemLink">
              <b>О нас</b>
            </a>
          </li>
          <li className="header__listItem">
            <a href="#stages" class="header__listItemLink">
              <b>Этапы</b>
            </a>
          </li>
          <li className="header__listItem">
            <a href="#reviews" class="header__listItemLink">
              <b>Отзывы</b>
            </a>
          </li>
          <li className="header__listItem">
            <a href="#contacts" class="header__listItemLink">
              <b>Контакты</b>
            </a>
          </li>
        </ul>
        <div className="header__search">
          <img src={search} alt="Кнопка поиска" />
        </div>
      </nav>
      <div className="container">
        <main>
          <div className="about">
            <div className="about__maintext">
              <h2>О Нас</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae repellat et atque sequi incidunt voluptas quaerat
                suscipit, esse porro aliquam voluptatem sunt veritatis
                accusantium quibusdam, tempore non dolorum, rerum dignissimos?
              </p>
            </div>
            <div className="about__card">
              <div className="about__cardPhoto">
                <div className="about__cardPhotoFooter">
                  <p>
                    Принимая во внимание показатели успешности, перспективное
                    планирование способствует подготовке и реализации новых
                    принципов
                  </p>
                  <button>Подробнее</button>
                </div>
              </div>

              <div className="about__cardCards">
                <div className="about__cardCardsItem">
                  <img src={about_1} alt="Фигура" />
                  <h3>Консультация с широким активом</h3>
                  <p>
                    А также свежий взгляд на привычные вещи — безусловно
                    открывает новые горизонты для как самодостаточных,
                    так и внешне зависимых концептуальных решений
                  </p>
                </div>
                <div className="about__cardCardsItem">
                  <img src={about_2} alt="Фигура" />
                  <h3>В своём стремлении повысить</h3>
                  <p>
                    Качество жизни, они забывают, что сплочённость команды
                    профессионалов представляет собой интересный эксперимент
                    проверки прогресса профессионального сообщества
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
