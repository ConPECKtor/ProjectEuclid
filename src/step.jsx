export const Step = ({ index, active, onClick }) => {
  return (
    <li className="howwork__mainStep--item">
      <button
        type="button"
        onClick={onClick}
        className={`howwork__mainStep ${active ? "howwork__mainStep--active" : ""}`}
      >
          Шаг {index + 1}
      </button>
    </li>
  );
};
