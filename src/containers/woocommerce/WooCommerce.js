import React from "react";
import Header from "../../components/header/Header";
import "./WooCommerce.scss";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { StyleProvider } from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function WooCommerce() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
      <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <div className="woocommerce">
          <h1>WooCommerce</h1>
          <p>Your WooCommerce content here...</p>
        </div>
        <Footer />
      </StyleProvider>
    </div>
  );
}
