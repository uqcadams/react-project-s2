import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="page-header">
      <NavLink to="/">
        <h1> Ogcisum</h1>
      </NavLink>
      <p>Create &amp; Share Samples, Listen In Mobile App</p>
    </header>
  );
}
