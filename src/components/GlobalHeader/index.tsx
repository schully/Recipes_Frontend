import * as React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalHeader() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/login">Login </Link>
          <br />
          <Link to="/recipe/new">New Recipe </Link>
          <br />
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>

  )
}