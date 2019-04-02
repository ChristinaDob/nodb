import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import axios from 'axios';
import Companies from './components/Companies/Companies';
import UserFavorites from './components/UserFavorites/UserFavorites';
import ColorList from './components/ColorList/ColorList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      favorites: []
    };
  }
  addToFavorites = color => {
    const newColors = {
      name: color.name,
      img_path: color.img_path
    };
    axios
      .post('/api/colors', newColors)
      .then(results => {
        this.setState({
          favorites: results.data
        });
      })
      .catch(err => {
        console.log(`Something went wrong Could not add to favorites`, err);
      });
  };

  deleteFavorites = id => {
    axios
      .delete(`/api/colors/${id}`)
      .then(res => {
        this.setState({
          favorites: res.data
        });
      })
      .catch(err => {
        console.log(
          `Something went wrong could not delete your favorites`,
          err
        );
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="MainContainer">
          <Companies
            favorites={this.state.favorites}
            addToFavorites={this.addToFavorites}
          />
          <UserFavorites
            favorites={this.state.favorites}
            deleteFavorites={this.deleteFavorites}
          />
        </div>
      </div>
    );
  }
}

export default App;
