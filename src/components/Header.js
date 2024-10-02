// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink exact to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
      <NavLink to="/projects" activeClassName="active-link">
        Projects
      </NavLink>
    </nav>
  </header>
);

export default Header;
