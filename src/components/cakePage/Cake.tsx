import React, { ReactElement } from 'react';
import SVGCake from './SVGCake';
import '../../scss/cakePage/Cake.scss';

import Button from './Button';
import { Link } from 'react-router-dom';

export default function Cake(): ReactElement {
  return (
    <div className="cakeMain">
      <div className="velas">
        <h1>20</h1>
        <div className="fuego"></div>
        <div className="fuego"></div>
        <div className="fuego"></div>
        <div className="fuego"></div>
        <div className="fuego"></div>
      </div>
      <SVGCake />
      <Link to="/greeting">
        <Button text="перейти до привітання" />
      </Link>
    </div>
  );
}
