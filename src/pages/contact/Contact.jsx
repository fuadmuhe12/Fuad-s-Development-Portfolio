import React, { useState, useRef } from "react";
import { BsExclamationLg, BsPatchCheckFill } from "react-icons/bs";
import { RiSendPlane2Fill } from "react-icons/ri";
import { Blast } from "../../components";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

// Email js
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = React.memo(() => {
  const [letterClass, setLetterClass] = React.useState("text-animate");
  React.useEffect(() => {
    const interval = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [validInpt, setValidInpt] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidInpt((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  // select all the input with useRef Hook
  const emailRef = useRef(null);
  const TextAreaRef = useRef(null);
  const MessageRef = useRef(null);

  const form = useRef(null);

  // show Message function
  const showMessage = (message, updateColor) => {
    const divContent = document.createElement("div");
    divContent.textContent = message;
    divContent.classList.add("div-content");
    MessageRef.current.prepend(divContent);
    divContent.style.backgroundColor = updateColor;

    MessageRef.current.style.transform = `translateX(${"0"}%)`;
    MessageRef.current.style.visibility = "visible";
    setTimeout(() => {
      divContent.classList.add("hide");
      divContent.addEventListener("transitionend", () => {
        divContent.remove();
      });
      divContent.style.transform = `translateX(${"0"}%)`;
      // MessageRef.current.style.visibility = 'visible'
      emailRef.current.parentElement.classList.remove("error");
      TextAreaRef.current.parentElement.classList.remove("error");
      emailRef.current.parentElement.classList.remove("success");
      TextAreaRef.current.parentElement.classList.remove("success");
    }, 5000);
  };
  // Error function
  const setError = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("success")) {
      inputRef.current.parentElement.classList.remove("success");
    } else {
      inputRef.current.parentElement.classList.add("error");
    }
  };

  // success Function
  const setSuccess = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("error")) {
      inputRef.current.parentElement.classList.remove("error");
    } else {
      inputRef.current.parentElement.classList.add("success");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, message } = validInpt;
    // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email && !message) {
      setError(emailRef);
      setError(TextAreaRef);
      showMessage("Pls! fill in the required inputs");
    } else if (!email && message) {
      setError(emailRef);

      showMessage("Ooops! Email can't be empty");
    } else if (!email.match(pattern)) {
      setError(emailRef);
      showMessage("Ooops! Email not valid");
    } else if (!message && email.match(pattern)) {
      setError(TextAreaRef);

      showMessage("Leave a message pls!");
    } else if (email && !message) {
      setError(TextAreaRef);
      showMessage("please! Send a message");
    } else if (email && message) {
      const scriptURL = "https://formspree.io/f/mqazeovq";
      const formData = new FormData();
      formData.append("Name", validInpt.name);
      formData.append("Email", validInpt.email);
      formData.append(
        "Message",
        "Suject" +
          "=>" +
          validInpt.subject +
          "|" +
          "Message" +
          "=>" +
          validInpt.message
      );

      try {
        if (true) {
          setSuccess(emailRef);
          setSuccess(TextAreaRef);
          showMessage("Message sent successfully", "green");

          setValidInpt({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }
        await fetch(scriptURL, {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        console.error("Error!", error.message);
      }
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="fake-big">@</div>
        <form ref={form} className="contact-form" onSubmit={onSubmit}>
          <div>
            <h2 aria-label="contact me" className="contact__heading">
              <Blast
                letterClass={letterClass}
                arrayStr={["C", "o", "n", "t", "a", "c", "t", "", "m", "e"]}
                indexLetter={12}
              />
            </h2>
            <Fade bottom>
              <p>
                I’m open to freelance and remote job opportunities and am ready
                to start new projects at any time. If you have a job offer,
                please use the form below to get in touch with me.
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div className="input-wrapper">
              <div className="form-input-group">
                <input
                  autoComplete="false"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={validInpt.name}
                  onChange={handleChange}
                />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>

              <div className="form-input-group">
                <input
                  autoComplete="false"
                  ref={emailRef}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={validInpt.email}
                  onChange={handleChange}
                />
                <span className="switch__bg"></span>
                <BsExclamationLg className="exclamation" />
                <BsPatchCheckFill className="checkCircle" />
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
              <input
                autoComplete="false"
                type="text"
                placeholder="Subject"
                name="subject"
                value={validInpt.subject}
                onChange={handleChange}
              />
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="form-input-group">
              <textarea
                autoComplete="false"
                ref={TextAreaRef}
                type="text"
                placeholder="Message"
                name="message"
                value={validInpt.message}
                onChange={handleChange}
              />
              <span className="switch__bg"></span>
              <BsExclamationLg className="exclamation" />
              <BsPatchCheckFill className="checkCircle" />
            </div>
          </Fade>
          <Fade left>
            <button type="submit" className="contact-button submit-button">
              <div>
                <span className="bg switch__bg"></span>
                <span className="base switch__border-color"></span>
                <span className="text">
                  Send Message
                  <RiSendPlane2Fill className="message-deliver" />
                </span>
              </div>
            </button>
          </Fade>
          <Reveal bottom>
            <footer className="footer">
              <p>
                {" "}
                &copy; copyright All Right Reserved Fuad Mohammed -{" "}
                {new Date().getFullYear()}
              </p>
            </footer>
          </Reveal>
        </form>
        <div ref={MessageRef} className="message"></div>
      </section>
    </>
  );
});

export default Contact;
