import React, {useContext, useState, useEffect} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!skillsSection.display) {
    return null;
  }

  const content = (
    <div className="skills-text-div">
      <h1
        className={isDark ? "dark-mode skills-heading" : "skills-heading"}
      >
        {skillsSection.title}{" "}
      </h1>
      <p
        className={
          isDark
            ? "dark-mode subTitle skills-text-subtitle"
            : "subTitle skills-text-subtitle"
        }
      >
        {skillsSection.subTitle}
      </p>
      <SoftwareSkill />
      <div>
        {skillsSection.skills.map((skill, i) => {
          return (
            <p
              key={i}
              className={
                isDark
                  ? "dark-mode subTitle skills-text"
                  : "subTitle skills-text"
              }
            >
               <span className="skill-title">{skill.title}</span> <br />{skill.description}
            </p>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        {isMobile ? content : (
          <Fade right duration={1000}>
            {content}
          </Fade>
        )}
      </div>
    </div>
  );
}
