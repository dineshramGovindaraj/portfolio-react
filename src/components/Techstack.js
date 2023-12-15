import React from "react";
import "../styles/Techstack.css";
import Html from "../images/vscode-icons_file-type-html.svg";
import Css from "../images/vscode-icons_file-type-css.svg";
import Js from "../images/vscode-icons_file-type-js-official.svg";
import Reactjs from "../images/logos_react.svg";
import Bootstrap from "../images/logos_bootstrap.svg";
import Github from "../images/akar-icons_github-fill.svg";
import Git from "../images/logos_git-icon.svg";
import Vscode from "../images/vscode-icons_file-type-vscode.svg";
const Techstack = () => {
  return (
    <>
      <h1 className="tech-head">My Tech Stack</h1>
      <p className="tech-para"> Technologies I've been working with recently</p>
      <div className="container">
        <div className="flex-parent ">
          <div className="flex-child">
            <img src={Html} className="tech-img" alt="image" />
          </div>
          <div className="flex-child">
            <img src={Css} className="tech-img" alt="image" />
          </div>
          <div className="flex-child">
            <img src={Bootstrap} className="tech-img" alt="image" />
          </div>
          <div className="flex-child">
            <img src={Js} className="tech-img" alt="image" />
          </div>
          <div className="flex-child">
            <img src={Reactjs} className="tech-img" alt="image" />
          </div>
          <div className="flex-child">
            <img src={Vscode} className="tech-img" alt="image" />
          </div>
          <div className="flex-child">
            <img src={Git} className="tech-img" alt="image" />
          </div>
          <div className="flex-child">
            <img src={Github} className="tech-img" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;