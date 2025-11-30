import React from "react";
import Header from "../../components/header/Header";
import "./Shopify.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function Shopify() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="shopify">
          <h1>Shopify</h1>
          <p>Your Shopify content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
