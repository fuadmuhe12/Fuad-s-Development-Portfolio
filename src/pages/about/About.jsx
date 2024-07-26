import React from "react";
import myCV from "../../assets/images/Fuad's__CV.pdf";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

// components
import { Cards, Blast } from "../../components";
import "./about.scss";

const About = () => {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <Reveal>
        <div className="fake-big">About</div>
      </Reveal>
      <div className="section-about-wrapper section__padding">
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  "A",
                  "b",
                  "o",
                  "u",
                  "t",
                  "",
                  "&",
                  "",
                  "S",
                  "k",
                  "i",
                  "l",
                  "l",
                  "s",
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                I'm a full-stack developer with a background in Software
                Engineering, dedicated to creating innovative solutions. My
                experience includes web and mobile app development, fueled by a
                passion for creative problem-solving.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I excel in web development, handling everything from front-end
                interfaces to scalable back-end systems. Additionally, I thrive
                in mobile app development.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                I’m passionate about harnessing technology to make a positive
                impact. My goal is to develop software that streamlines tasks
                and reveals valuable insights from data. Always eager for new
                challenges and collaborations, I am committed to lifelong
                learning and thriving in the dynamic tech world. Let’s innovate
                and shape the future together.
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: "2rem" }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Download CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  );
};

export default About;
