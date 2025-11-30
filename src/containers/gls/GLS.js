import React from "react";
import Header from "../../components/header/Header";
import "./GLS.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function GLS() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="gls">
          <h1>GLS Canada</h1>
          <p>Your GLS Canada content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
