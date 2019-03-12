import * as React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalHeader(){
  return (
    <header>
      <ul>
        <li>
          <Link to="/login">Login </Link>
          <Link to="/recipe/new">New Recipe </Link>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>

  )
}