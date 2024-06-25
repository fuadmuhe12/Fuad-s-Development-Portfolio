import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

import Blast from "../BlastAnimation/Blast";
import "./header.scss";

const nameArray = ["E", "m", "r", "a", "n"];
const jobArray = [
  "F",
  "u",
  "l",
  "l",
  " ",
  "S",
  "t",
  "a",
  "c",
  "k",
  " ",
  "D",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
  ".",
];

const Header = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <section className="section-1 header__container section__padding">
        <main className="intro-page">
          <h1 arial-label="Hi i'm Thomas, full-stack developer">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>’</span>
            <span className={`${letterClass} _16`}>m</span> {""}
            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={15}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

          <p className="text-desc">Full Stack Developer</p>
          <Link to="/contact" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contact me</span>
            </div>
          </Link>
          <div className="scroll__wrapper switch__color">
            <MdArrowDropDown className="scroll__down switch__color" />
          </div>
        </main>
      </section>
    </>
  );
};

export default Header;
