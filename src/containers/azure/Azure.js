import React from "react";
import Header from "../../components/header/Header";
import "./Azure.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function Azure() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="azure">
          <h1>Azure</h1>
          <p>Your Azure content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
