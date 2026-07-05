
import "./App.css";
import logo from "./style/SVG/logo.svg"
import logotext from "./style/SVG/LogoText.svg"

function App() {
  return (
    <div className="App">
      <nav className="header">
        <div className="header__logobox">
          <img src={logo.svg} alt="Лого"/>
        </div>
        <ul className="header__list">
          <li className="header__listItem">О нас</li>
          <li className="header__listItem">Проекты</li>
          <li className="header__listItem">Этапы</li>
          <li className="header__listItem">Отзывы</li>
          <li className="header__listItem">Контакты</li>
        </ul>
        <div className="header__search">
          <svg></svg>
        </div>
      </nav>
      <div className="container"></div>
    </div>
  );
}

export default App;
