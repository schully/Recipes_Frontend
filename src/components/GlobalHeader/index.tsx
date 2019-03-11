import * as React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalHeader(){
  return (
    <header>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>

  )
}