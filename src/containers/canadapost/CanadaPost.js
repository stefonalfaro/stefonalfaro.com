import React from "react";
import Header from "../../components/header/Header";
import "./CanadaPost.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function CanadaPost() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="canadapost">
          <h1>Canada Post</h1>
          <p>Your Canada Post content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
