import React from "react";
import Header from "../../components/header/Header";
import "./Firebase.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function Firebase() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="firebase">
          <h1>Firebase</h1>
          <p>Your Firebase content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
