import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./eCommerce.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";

export default function ECommerce() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="eCommerce">
          <h1>eCommerce</h1>
          <p>Your opportunities content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}