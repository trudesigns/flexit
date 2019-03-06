import React from "react";
import { NavLink } from "react-router-dom";

const NavbarAuth = ({ session }) => (
  <>
    <ul className="navbar">
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/account">Account</NavLink>
      </li>
      <li>
        <NavLink to="/addvideo">Add Video</NavLink>
      </li>
      <li>
        <NavLink to="/likes">Likes</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/exercise/add">Add Exercise</NavLink>
      </li>
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Signin</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
    </ul>
    <h2>Welcome {session.getCurrentUser.username}</h2>
  </>
);

export default NavbarAuth;
