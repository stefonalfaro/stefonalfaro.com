import React from "react";
import Header from "../../components/header/Header";
import "./WindowsServers.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function WindowsServers() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="windowsservers">
          <h1>Windows Servers</h1>
          <p>Your Windows Servers content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
