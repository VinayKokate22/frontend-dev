import React, { useState } from "react";
import "./scan.css";
const Scan = () => {
  const [cursorX, setcursorX] = useState();
  const [cursorY, setcursorY] = useState();
  // const hidden = document.querySelector(".scan");
  // hidden.addEventListener("hover", (ev) => {
  //   hidden.classList.add(".cursor");
  // });
  window.addEventListener("mousemove", (e) => {
    setcursorX(e.pageX);
    setcursorY(e.pageY);
  });
  return (
    <div className="scan">
      <div className="discount_code">
        <div className="scantitle" data-aos="slide-up">
          <h2>
            scan <br /> <span className="triggerbubble">&</span> go
          </h2>
        </div>
        <h3>DH7a5</h3>
      </div>

      <div
        className="cursor"
        style={{
          left: cursorX,
          top: cursorY,
        }}
      ></div>
    </div>
  );
};

export default Scan;
