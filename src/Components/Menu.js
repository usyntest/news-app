import React from "react";
import { Link } from "react-router-dom";

import logo from "./logo.png";

const changeFunc = (e) => {
  let target = {};
  if (e.target.classList[0] === "menu-icon") {
    target = e.target;
  } else {
    if (e.target.parentNode.classList[0] === "menu-icon") {
      target = e.target.parentNode;
    } else {
      return;
    }
  }
  target.parentNode.parentNode.childNodes.forEach((element) => {
    element.firstChild.classList.remove("active");
  });

  target.classList.add("active");
};

function Menu() {
  return (
    <div className="menu">
      <div className="menu-logo">
        <img src={logo} alt="logo" width="40" height="40" />
      </div>
      <div className="menu-icons">
        <Link to="/" style={{ textDecoration: "none" }} onClick={changeFunc}>
          <div className="menu-icon active">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
              <g>
                <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
                <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
              </g>
            </svg>
            <span>home</span>
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }} onClick={changeFunc}>
          <div className="menu-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
              <g>
                <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
              </g>
            </svg>
            <span>explore</span>
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }} onClick={changeFunc}>
          <div className="menu-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
              <g>
                <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
              </g>
            </svg>
            <span>profile</span>
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }} onClick={changeFunc}>
          <div className="menu-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
              <g>
                <circle cx="17" cy="12" r="1.5"></circle>
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="7" cy="12" r="1.5"></circle>
                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
              </g>
            </svg>
            <span>explore</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
