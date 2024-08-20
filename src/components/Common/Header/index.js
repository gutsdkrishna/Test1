import React from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import WalletConnect from '../../WalletConnection'; // Adjusted path
import gradient from "../../../assets/gradient.png";

function Header() {
  return (
    <div className="sidebar">
      <h1 className="logo">
        CryptoPortfolio<span style={{ color: "var(--blue)" }}></span>
      </h1>
      <div className="nav-links">
        <a href="/">
          <p className="nav-link">Home</p>
        </a>
        <a href="/compare">
          <p className="nav-link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="nav-link">Watchlist</p>
        </a>
      </div>
      <WalletConnect />
    </div>
  );
}

export default Header;
