
export const Circle = ({ active, onClick }) => {
    return (
    <button
      type="button"
      onClick={onClick}
      className={`circleBTN ${active ? 'circleBTN--active' : ''}`}>
    
      <svg 
        width="15" 
        height="15" 
        viewBox="0 0 15 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`circleBTN ${active ? 'circleBTN--active' : ''}`}
        onClick={onClick}
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="currentColor" />
      </svg>
    </button>
    );
  };