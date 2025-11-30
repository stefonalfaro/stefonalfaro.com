import React from "react";
import Header from "../../components/header/Header";
import "./IT.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function IT() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="it">
          <h1>Corporate IT</h1>
          <p>Your Corporate IT content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
