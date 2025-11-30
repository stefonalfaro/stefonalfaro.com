import React from "react";
import Header from "../../components/header/Header";
import "./EDI.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function EDI() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="EDI">
          <h1>EDI</h1>
          <p>Your odpportunities content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}