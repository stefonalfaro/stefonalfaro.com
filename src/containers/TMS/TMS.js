import React from "react";
import Header from "../../components/header/Header";
import "./TMS.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function TMS() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="TMS">
          <h1>TMS</h1>
          <p>Your opportunities content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}