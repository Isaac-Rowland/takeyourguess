import "./playButton.css";

export const PlayButton = ({ onClick }) => (
  <div className="container">
    <button onClick={onClick} className="playBut">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50px"
        height="50px"
        viewBox="0 0 213.7 213.7"
      >
        <polygon
          className="triangle"
          id="XMLID_18_"
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="
  73.5,62.5 148.5,105.8 73.5,149.1 "
        />
        <circle
          className="circle"
          id="XMLID_17_"
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          cx="106.8"
          cy="106.8"
          r="103.3"
        />
      </svg>
    </button>
  </div>
);
