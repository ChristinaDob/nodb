import React, { Component } from 'react';
import ColorList from '../ColorList/ColorList';
import './UserFavorites.css';
import App from '../../App';

export default class UserFavorites extends Component {
  render() {
    const mappedFavorites = this.props.favorites.map(favorite => {
      return (
        <div>
          <div key={favorite.id}>
            <p>{favorite.name}</p>
            <img src={favorite.img_path} alt="favorites" />
            <button onClick={() => this.props.deleteFavorites(favorite.id)}>
              delete
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="favorites">
        <h1 className="favHeader">Favorites</h1>
        {mappedFavorites}
      </div>
    );
  }
}
