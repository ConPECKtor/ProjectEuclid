import "./App.css";
import { useState } from "react";

import X from "./style/SVG/X.svg";
import logo from "./style/SVG/logo.svg";
import { Logotext } from "./style/SVG/Logotext.jsx";
import { LogoIcon } from "./style/SVG/Logoicon.jsx";

import logotext from "./style/SVG/LogoText.svg";
import search from "./style/SVG/search.svg";
import closed_search from "./style/SVG/closed_search.svg";
import burgerButton from "./style/SVG/burgerButton.svg";

import { Circle } from "./style/SVG/Circle.jsx";

import about_1 from "./style/SVG/about_1.svg";
import about_2 from "./style/SVG/about_2.svg";
import about_png from "./style/IMG/about.png";

import main1 from "./style/IMG/main_1.png";
import main2 from "./style/IMG/main_2.png";
import main3 from "./style/IMG/main_3.png";
import main4 from "./style/IMG/main_1.png";

import how1 from "./style/IMG/how_1.png";
import how2 from "./style/IMG/how_2.png";
import how3 from "./style/IMG/how_3.png";
import how4 from "./style/IMG/how_4.png";

import ok from "./style/SVG/ok.svg";
import vk from "./style/SVG/vk.svg";

import { Step } from "./step.jsx";

const bannerIMG = [main1, main2, main3];

function Banner() {
  let [activeBanner, setActiveBanner] = useState(0);

  let currentBanner = bannerIMG[activeBanner];

  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${currentBanner})` }}
    >
      <h2 className="banner__title">Проектные решения любой сложности</h2>
      <p className="banner__desc">
        Есть над чем задуматься: базовые сценарии поведения пользователей и по
        сей день остаются уделом проектантов
      </p>
      <button className="banner__addOrder">Заказать расчёт</button>

      <div className="banner__backgroundsBtn">
        {bannerIMG.map((_, index) => (
          <Circle
            id={index}
            active={activeBanner === index}
            onClick={() => setActiveBanner(index)}
          />
        ))}
      </div>
    </section>
  );
}

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
        <img
          src={search}
          alt="Кнопка поиска"
          className="header__searchBurgerSearch"
        />
        <img
          src={closed_search}
          alt="Кнопка закрытия поиска"
          onClick={() => setSearchActive(false)}
          style={{ cursor: "pointer" }}
          className="header__searchBurgerClose"
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

function About() {
  return (
    <section className="about">
      <h3 className="about__title">О нас</h3>
      <p className="about__desc">
        Также как перспективное планирование создаёт необходимость включения в
        производственный план целого ряда внеочередных мероприятий с учётом
        комплекса экспериментов, поражающих по своей масштабности и
        грандиозности. А также диаграммы связей могут быть описаны максимально
        подробно. Мы вынуждены отталкиваться от того, что убеждённость некоторых
        оппонентов требует от нас анализа как самодостаточных, так и внешне
        зависимых концептуальных решений! Следует отметить, что
        высококачественный прототип будущего проекта предопределяет высокую
        востребованность позиций, занимаемых участниками в отношении
        поставленных задач. Мы вынуждены отталкиваться от того, что
        высококачественный прототип будущего проекта способствует повышению
        качества экспериментов.
      </p>

      <div className="about__cards">
        <div className="about__card about__card__banner">
          <div className="about__card__banner--background"></div>
          <div className="about__card__shadowbox">
            <p className="about__card__shadowbox--desc">
              Принимая во внимание показатели успешности, перспективное
              планирование способствует подготовке и реализации новых принципов
            </p>
            <button className="about__card__shadowbox--btn">Подробнее</button>
          </div>
        </div>

        <div className="about__card ">
          <img src={about_1} alt="" className="about__card__svg" />
          <div className="about__card__text">
            <h4 className="about__card__text--title">
              Консультация c широким активом
            </h4>
            <p className="about__card__text--desc">
              А также свежий взгляд на привычные вещи — безусловно открывает
              новые горизонты для как самодостаточных, так и внешне зависимых
              концептуальных решений
            </p>
          </div>
        </div>

        <div className="about__card">
          <img src={about_2} alt="" className="about__card__svg" />
          <div className="about__card__text">
            <h4 className="about__card__text--title">
              В своём стремлении повысить
            </h4>
            <p className="about__card__text--desc">
              Качество жизни, они забывают, что сплочённость команды
              профессионалов представляет собой интересный эксперимент проверки
              прогресса профессионального сообщества
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

let stepTitles = [
  "Проводим консультацию",
  "Составляем смету",
  "Привлекаем подрядчиков",
  "Инспектируем все этапы работ",
];
let stepDesc = [
  "Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.",
  "Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.",
  "Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.",
  "Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.",
];

let stepIMG = [how1, how2, how3, how4];

function HowWork() {
  let [activeStep, setActiveStep] = useState(0);

  let currentStep = stepIMG[activeStep];

  return (
    <section className="howwork">
      <h3 className="howwork__title">Как мы работаем</h3>

      <div className="howwork__main">
        <ul className="howwork__main__steps">
          {stepIMG.map((_, index) => (
            <Step
              key={index}
              index={index}
              active={activeStep === index}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </ul>

        <div className="howwork__main__info">
          <p className="howwork__main__infoTitle">{stepTitles[activeStep]}</p>
          <p className="howwork__main__infoDesc">{stepDesc[activeStep]}</p>
          <div className="howwork__main__infoButtons">
            <button className="howwork__main__infoButtons--more">Подробнее</button>
            <button className="howwork__main__infoButtons--deal">Договор</button>
          </div>
        </div>

        <div
          className="howwork__main__photo"
          style={{ backgroundImage: `url(${currentStep})` }}
        ></div>
      </div>
    </section>
  );
}

let qnaTitles = [
  "Из чего формируется конечная стоимость проекта?",
  "У меня есть свой проект. Сможем ли мы его доработать / реализовать?",
  "Я выбираю между разными компаниями. В чём ваше отличие?",
  "Могу ли я делегировать вам работу / согласование с подрядчиком / организацией?",
  "Могу ли я вернуть деньги на каком-либо из этапов работ?",
];

let qnaDescs = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam aliquam alias laboriosam praesentium quos obcaecati officia aspernatur soluta similique, dolor voluptatibus, debitis adipisci quidem minus illum. Ex, aliquam architecto?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus fugiat sit magni quae sequi ipsam magnam accusantium culpa, voluptatibus expedita. Perspiciatis beatae et doloribus nisi, non molestias debitis reiciendis!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam aliquam alias laboriosam praesentium quos obcaecati officia aspernatur soluta similique, dolor voluptatibus, debitis adipisci quidem minus illum. Ex, aliquam architecto?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus fugiat sit magni quae sequi ipsam magnam accusantium culpa, voluptatibus expedita. Perspiciatis beatae et doloribus nisi, non molestias debitis reiciendis!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus fugiat sit magni quae sequi ipsam magnam accusantium culpa, voluptatibus expedita. Perspiciatis beatae et doloribus nisi, non molestias debitis reiciendis!",
];

function Question({ index, title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`qna__listItem `}>
      <div className="qna__listItem__card">
        <p className="qna__listItem__cardTitle">{title}</p>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="qna__listItem__cardBTN"
        >
          X
        </button>
      </div>
      <p
        className={`qna__listItem__cardDesc ${
          isOpen ? "qna__listItem__cardDesc--active" : ""
        } `}
      >
        {desc}
      </p>
    </li>
  );
}

function QNA() {
  return (
    <section className="qna">
      <h3 className="qna__title">Часто задаваемые вопросы</h3>
      <ul className="qna__list">
        {qnaTitles.map((_, index) => (
          <Question
            index={index}
            title={qnaTitles[index]}
            desc={qnaDescs[index]}
          />
        ))}
      </ul>
    </section>
  );
}

function Main() {
  return (
    <main>
      <Banner />
      <About />
      <HowWork />
      <QNA />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__left--logoBox">
          <LogoIcon className={"footer__left--logoIcon"} />
          <Logotext className={"footer__left--logoText"} />
        </div>

        <ul className="footer__left--list">
          <li className="footer__left--itemList">О нас</li>
          <li className="footer__left--itemList">Проекты</li>
          <li className="footer__left--itemList">Отзывы</li>
          <li className="footer__left--itemList">Договор оферты</li>
          <li className="footer__left--itemList">Договор подряда</li>
          <li className="footer__left--itemList">Конфиденциальность</li>
          <li className="footer__left--itemList">Партнёрское соглашение</li>
        </ul>

        <div className="footer__left--socials">
          <img src={ok} alt="Лого" className="" />
          <img src={vk} alt="Лого" className="" />
        </div>
      </div>
      <div className="footer__middle">
        <h3 className="footer__middle__text">Оставить заявку</h3>
        <input type="text" className="footer__middle__input" name="FullName" />
        <input type="email" className="footer__middle__input" name="Email" />
        <input type="text" className="footer__middle__input" />
        <button className="footer__middle__button btn">Отправить данные</button>
      </div>
      <p className="footer__right">
        Высокий уровень вовлечения представителей целевой аудитории является
        чётким доказательством простого факта: разбавленное изрядной долей
        эмпатии, рациональное мышление позволяет оценить значение модели
        развития. Таким образом, консультация с широким активом обеспечивает
        широкому кругу (специалистов) участие в формировании стандартных
        подходов.
      </p>
    </footer>
  );
}

function Euclid() {
  let [burgerActive, setBurgerActive] = useState(false);
  let [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <Header
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
        searchActive={searchActive}
        setSearchActive={setSearchActive}
      />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return <Euclid />;
}
