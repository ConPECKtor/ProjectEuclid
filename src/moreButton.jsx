
export const MoreButton = ({ setIsOpen, isOpen }) => {

    return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`qna__listItem__cardBTN`}>
    
    <div className="qna__listItem__cardBtnDiv">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="qna__listItem__cardBtnDiv--circle">
            <ellipse cx="25" cy="25" rx="25" ry="25" fill="#CACACA"/>
        </svg>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className={`qna__listItem__cardBtnDiv--X ${
          isOpen ? "qna__listItem__cardBtnDiv--X--active" : ""} `}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0571 15.0571L15.0571 -1.31634e-06L15.9429 -1.31634e-06L15.9429 15.0571L23.8835 15.0571L31 15.0571L31 15.9429L15.9429 15.9429L15.9429 31L15.0571 31L15.0571 15.9429L2.42093e-06 15.9429L2.49836e-06 15.0571L15.0571 15.0571Z" fill="black"/>
        </svg>
    </div>
    </button>
    );
  };