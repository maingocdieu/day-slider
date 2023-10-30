import { useRef } from "react";
import "./App.css";

function App() {
  /**
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const ref = useRef();

  /**
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const ref2 = useRef();

  const handleMouseDown = (e) => {
    ref.current.style.background = "red";
  };

  /**
   *
   * @param {MouseEvent} e
   */
  const handleMouseMove = (e) => {
    let i = 0;
    i = e.clientX - ref2.current.getBoundingClientRect().left;
    if (i > 0 && i < 600) {
      ref2.current.style.width = `${i}px`;
      ref2.current.style.zIndex = 8;

      ref.current.style.left = `${i}px`;
    }
  };

  return (
    <>
      <div className="container">
        <div className="straight" onMouseMove={handleMouseMove}>
          <div className="day-30">
            <div className="circle"></div>
            <span className="day">30 days</span>
          </div>

          <div className="day-60">
            <div className="circle"></div>
            <span className="day">60 days</span>
          </div>
        </div>

        <div className="slider" ref={ref2} onMouseMove={handleMouseMove}>
          <div
            className="circle-slider"
            ref={ref}
            onMouseDown={handleMouseDown}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
