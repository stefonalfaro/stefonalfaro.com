import React from "react";
import Header from "../../components/header/Header";
import "./ERP.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function ERP() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="cloud">
          <h1>ERP</h1>
          <p>Throughout my career I've been employed on-site managing the IT operations for 3PL warehousing and transportation companies. Originally with a 40,000sqft 3PL and then onto a 500,000sqft spread across four locations coast to coast in Canada. </p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}