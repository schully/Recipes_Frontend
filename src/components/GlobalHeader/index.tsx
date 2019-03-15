import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bulma-components/full";

export default function GlobalHeader() {
  return (
    <header>
      <Button size="medium" rounded>
        <Link to="/login">Login </Link>
      </Button>
      
      <Button size="medium" color="primary" rounded>
        <Link className="addRecipe" to="/recipe/new">New</Link>
      </Button>

    </header>

  )
}