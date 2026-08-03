import logo from "../assets/logo.png";
import "./Header.css";
import { useState } from "react";


const Header = ({ handleTheme }) => {



    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo} alt="Logo Character Counter" />
                <h1>Character Counter</h1>
            </div>

            <button
                className="button"
                onClick={handleTheme}
            >
                🌗
            </button>
        </header>
    );
};

export default Header;