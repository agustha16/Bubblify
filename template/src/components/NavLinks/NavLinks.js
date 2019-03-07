import React from "react";

const NavLinks = () => {
    return (
        <ul className="nav nav-tabs">
            <img className="nav-item logo-icon" src="../../../resources/Logo.png" alt="Card image" />
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#">Products</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#">Bundles</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#">About us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#">Cart</a>
            </li>
        </ul>
    );
};

export default NavLinks;
