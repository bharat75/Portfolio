import React from "react";
import { useState, useEffect } from "react";
import Typed from "typed.js";
import pic from "../images/MyPic.jpeg";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css3.png";
import html from "../images/html5.png";
import js from "../images/javascript.png";
import jq from "../images/jquery.png";
import ri from "../images/react.png";
import raincheck from "../images/raincheck.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faMapMarkerAlt,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  useEffect(() => {
    const options = {
      strings: [
        "React JS Developer",
        "Node.js Developer",
        "Frontend Developer",
      ],
      typeSpeed: 100, // Typing speed in milliseconds
      backSpeed: 50, // Deleting speed in milliseconds
      backDelay: 1500, // Pause before starting to delete
      startDelay: 500, // Delay before starting the typing
      loop: true, // Loop the strings
      cursorChar: "|", // Customize the cursor character
    };

    // Create two Typed instances for both the spans
    const typed1 = new Typed(".typing-text", options);
    const typed2 = new Typed(".typing-text-info", options);

    return () => {
      // Destroy both instances on component unmount
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}`);
  };

  return (
    <>
      <div className="introduction" id="home">
        <p className="text1">Hello 👋 I'm</p>
        <p className="text2">Bharat Shubham</p>
        <p className="text3">
          And I'm a <span className="typing-text"></span>
        </p>
      </div>
      <div className="about-me" id="about">
        <h1>About me</h1>
        <p>
          <span className="stars">**</span>Who am I
          <span className="stars">**</span>
        </p>
        <div className="info">
          <img src={pic}></img>
          <p>
            <h3>
              I'm Bharat and I am a <span className="typing-text-info"></span>
            </h3>
            I am a dedicated front-end developer focused on creating attractive
            and user-friendly websites. I am passionate about translating design
            concepts into interactive digital experiences and continuously
            improving my skill set to stay updated with the latest industry
            trends. My portfolio showcases a variety of projects that
            demonstrate my ability to deliver responsive and dynamic web
            applications.
          </p>
        </div>
      </div>
      <div className="skills" id="skills">
        <h1>My Skills</h1>
        <p>
          <span className="stars">**</span>What I know
          <span className="stars">**</span>
        </p>
        <div className="skillset">
          <p>
            <h3>My creative skills and experiences</h3>I am a dedicated
            front-end developer focused on creating attractive and user-friendly
            websites. I am passionate about translating design concepts into
            interactive digital experiences and continuously improving my skill
            set to stay updated with the latest industry trends. My portfolio
            showcases a variety of projects that demonstrate my ability to
            deliver responsive and dynamic web applications.
          </p>
          <div className="techSkills">
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img className="skillPng" src={html}></img>
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="skillPng" src={css}></img>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img className="skillPng" src={js}></img>
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="skillPng" src={bootstrap}></img>
            </a>
            <a href="https://api.jquery.com/" target="_blank" rel="noreferrer">
              <img className="skillPng" src={jq}></img>
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img className="skillPng" src={ri}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>My Projects</h1>
        <p>
          <span className="stars">**</span>Check my work
          <span className="stars">**</span>
        </p>
        <div className="project-cards">
          <div className="card1">
            <a
              href="https://raincheck-weather-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={raincheck}></img>
              <h3>RainCheck Weather App</h3>
              <p>HTML, CSS, JS, ReactJS</p>
            </a>
          </div>
        </div>
      </div>
      <div className="contact-me" id="contact">
        <h1>Contact Me</h1>
        <p>
          <span className="stars">**</span>get in touch
          <span className="stars">**</span>
        </p>
        <div className="contact">
          <div className="contactLeft">
            <h3>Reach Out to me!</h3>
            <p>
              Discuss a Project or just want to say Hi? My inbox is open for
              all.
            </p>
            <div className="personalDetails">
              <div className="name">
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{
                      color: "purple",
                      width: "30px",
                      height: "30px",
                      marginTop: "30px",
                    }}
                  />
                </div>
                <div className="iconText">
                  <p>Name</p>
                  <p>Bharat Shubham</p>
                </div>
              </div>
              <div className="name">
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{
                      color: "purple",
                      width: "30px",
                      height: "30px",
                      marginTop: "30px",
                    }}
                  />
                </div>
                <div className="iconText">
                  <p>Address</p>
                  <p>Kolkata, India</p>
                </div>
              </div>
              <div className="name">
                <div className="icon">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{
                      color: "purple",
                      width: "30px",
                      height: "30px",
                      marginTop: "30px",
                    }}
                  />
                </div>
                <div className="iconText">
                  <p>Email</p>
                  <p>bharatshubham75@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="StayConnected">
              <p>Stay Connected</p>
              <a
                href="https://www.linkedin.com/in/bharat-shubham-70ab242a5"
                className="social linkedin"
                target="_Blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/bharat75"
                className="social github"
                target="_Blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.instagram.com/bharat._.shubham/"
                className="social twitter"
                target="_Blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
          <div className="contactRight">
            <h4>Message Me</h4>
            <form onSubmit={handleForm}>
              <div className="fields">
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="subject">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                ></input>
              </div>
              <div className="message">
                <textarea
                  value={message}
                  placeholder="Your message ..."
                  cols="30"
                  rows="7"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="submitButton">
                <button type="submit">
                  Send Message{" "}
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ color: "#fff" }}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
