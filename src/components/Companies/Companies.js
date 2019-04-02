import React from 'react';
import './Companies.css';
import ColorList from '../ColorList/ColorList';

export default function Companies(props) {
  return (
    <div className="companieswrapper">
      <div className="compRevlon">Revlon</div>
      <img
        className="revlon"
        src="http://christinadob.com/todo/media/revlon.png"
        alt="revlon lipstick"
      />
      <ColorList
        company="Revlon"
        favorites={props.favorites}
        addToFavorites={props.addToFavorites}
      />
      <div>
        <div className="compLoreal">L'Oréal</div>
        <img
          className="loreal"
          src="http://christinadob.com/todo/media/loreal.jpg"
          alt="loreal lipstick"
        />
        <ColorList
          company="Loreal"
          favorites={props.favorites}
          addToFavorites={props.addToFavorites}
        />
      </div>
    </div>
  );
}
