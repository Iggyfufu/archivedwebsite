import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
  (
    <div>
      <div className="nav">
        <Link to="about">About</Link>
        <Link to="work">Work</Link>
      </div>
    </div>
  );

export default Navbar;
