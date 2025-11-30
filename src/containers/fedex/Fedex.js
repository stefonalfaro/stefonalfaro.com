import React from "react";
import Header from "../../components/header/Header";
import "./Fedex.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function Fedex() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="fedex">
          <h1>Fedex</h1>
          <p>Your Fedex content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
