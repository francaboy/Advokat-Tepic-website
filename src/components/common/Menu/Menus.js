import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li>
        <Link to="/">Početna</Link>
      </li>

      <li>
        <Link to="/usluge">Usluge</Link>
      </li>
      <li>
        <Link to="/klijenti">Klijenti</Link>
      </li>
      <li>
        <Link to="/kontakt">Kontakt</Link>
      </li>
    </ul>
  );
};

export default Menus;
