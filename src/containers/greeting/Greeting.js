import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {" "}
                {greeting.title}
                {" "}
              </h1>
              <h2 className={isDark ? "dark-mode greeting-text-second" : "greeting-text-second"}>
                {greeting.title2}
              </h2>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="mailto:stefonalfaro@gmail.com" />
                {greeting.resumeLink && (
                  <Button
                    text="My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
                <Button text="UpWork" href="https://www.upwork.com/freelancers/stefonalfaro" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
