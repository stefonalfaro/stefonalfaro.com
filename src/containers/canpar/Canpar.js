import React from "react";
import Header from "../../components/header/Header";
import "./Canpar.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function Canpar() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="canpar">
          <h1>Canpar</h1>
          <p>Your Canpar content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
