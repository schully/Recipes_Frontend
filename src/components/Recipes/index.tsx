import React from 'react';
import {
Link //  Link allows us to navigate to another router in this app
} from 'react-router-dom';
import GlobalHeader from '../GlobalHeader';
import './styles.scss';

export default function Recipes(props: any) {
  return (
    <div>
      <GlobalHeader />
      <h2>All recipes</h2>
      <Link className="add-button" to="/recipe/new">New recipe</Link>
    </div>
  )
}