import React, {useContext, useState} from "react";
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
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleClick = (e, dropdownName) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

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
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('erp')} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'erp')}>
            <span className="dropdown-toggle">
              ERP <span className="dropdown-arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${openDropdown === 'erp' ? 'show' : ''}`} style={{ display: openDropdown === 'erp' ? 'block' : 'none' }} >
              <li>
                <Link to="/ERP">Overview</Link>
              </li>
              <li>
                <Link to="/ERP/Warehouse-Management-Systems">Warehouse Management Systems</Link>
              </li>
              <li>
                <Link to="/ERP/Transportation-Management-Systems">Transportation Management Systems</Link>
              </li>
              <li>
                <Link to="/ERP/EDI">X12 EDI</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('cloud')} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'cloud')}>
            <span className="dropdown-toggle">
              Cloud <span className="dropdown-arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${openDropdown === 'cloud' ? 'show' : ''}`} style={{ display: openDropdown === 'cloud' ? 'block' : 'none' }} >
              <li>
                <Link to="/Cloud">Overview</Link>
              </li>
              <li>
                <Link to="/Cloud/Azure">Azure</Link>
              </li>
              <li>
                <Link to="/Cloud/AWS">AWS</Link>
              </li>
              <li>
                <Link to="/Cloud/Firebase">Firebase</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('ecommerce')} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'ecommerce')}>
            <span className="dropdown-toggle">
              eCommerce <span className="dropdown-arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${openDropdown === 'ecommerce' ? 'show' : ''}`} style={{ display: openDropdown === 'ecommerce' ? 'block' : 'none' }}>
              <li>
                <Link to="/eCommerce">Overview</Link>
              </li>
              <li>
                <Link to="/eCommerce/WooCommerce">WooCommerce</Link>
              </li>
              <li>
                <Link to="/eCommerce/Shopify">Shopify</Link>
              </li>
              <li>
                <Link to="/eCommerce/Stripe">Stripe</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('carriers')} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'carriers')}>
            <span className="dropdown-toggle">
              Carriers <span className="dropdown-arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${openDropdown === 'carriers' ? 'show' : ''}`} style={{ display: openDropdown === 'carriers' ? 'block' : 'none' }}>
              <li>
                <Link to="/Carriers">Overview</Link>
              </li>
              <li>
                <Link to="/Carriers/CanadaPost">Canada Post</Link>
              </li>
              <li>
                <Link to="/Carriers/Fedex">Fedex</Link>
              </li>
              <li>
                <Link to="/Carriers/UPS">UPS</Link>
              </li>
              <li>
                <Link to="/Carriers/GLS">GLS Canada</Link>
              </li>
              <li>
                <Link to="/Carriers/Canpar">Canpar</Link>
              </li>
            </ul>
          </li>
          <li className="dropdown" onMouseEnter={() => handleMouseEnter('it')} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'it')}>
            <span className="dropdown-toggle">
              Corporate IT <span className="dropdown-arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${openDropdown === 'it' ? 'show' : ''}`} style={{ display: openDropdown === 'it' ? 'block' : 'none' }}>
              <li>
                <Link to="/IT">Overview</Link>
              </li>
              <li>
                <Link to="/IT/Windows-Servers">Windows Servers</Link>
              </li>
              <li>
                <Link to="/IT/Active-Directory">Active Directory</Link>
              </li>
              <li>
                <Link to="/IT/Security">Security</Link>
              </li>
              <li>
                <Link to="/IT/Backups">Backups</Link>
              </li>
            </ul>
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
