import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
  (
    <div>
      <h1>Kenneth Zhu</h1>
      <h2>Full Stack Developer</h2>
      <div className="nav">
        <Link to="about">About</Link>
        <Link to="work">Work</Link>
      </div>
    </div>
  );

export default Navbar;
