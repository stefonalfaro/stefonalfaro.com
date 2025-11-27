import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";
import { Link } from "react-router-dom";


function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <Link to="/Cloud">Cloud</Link>
          </li>
          <li>
            <Link to="/eCommerce">eCommerce</Link>
          </li>
          <li>
            <Link to="/Carriers">Carriers</Link>
          </li>
          <li>
            <a href="https://services.stefonalfaro.com/" target="_blank">Services</a>
          </li>
          <li>
            <a href="https://erp.gappexpress.com/" target="_blank">ERP</a>
          </li>
          {/* <li>
            <a href="https://blog.stefonalfaro.com/" target="_blank">Blog</a>
          </li> */}
          <li>
            <a href="mailto:stefonalfaro@gmail.com">Contact</a>
          </li>

        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
