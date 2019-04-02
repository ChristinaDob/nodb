import React, { Component } from 'react';
import UserFavorites from '../UserFavorites/UserFavorites';

import axios from 'axios';

export default class ColorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorList: [],
      favorites: []
    };
  }

  componentDidMount() {
    this.getAllColors();
  }

  getAllColors = () => {
    axios.get('/api/colors').then(response => {
      console.log(response.data.results);
      const filteredColors = response.data.results.filter(color => {
        return this.props.company === color.company;
      });
      this.setState({
        colorList: filteredColors
      });
    });
  };

  render() {
    const { colorList } = this.state;
    const { favorites } = this.props;
    console.log(favorites);
    const mappedResults = colorList.map(color => {
      return (
        <div>
          <section>
            <img
              onClick={() => this.props.addToFavorites(color)}
              src={color.img_path}
              alt="color"
            />
          </section>
        </div>
      );
    });
    return <div className="colorList">{mappedResults}</div>;
  }
}
