import React from 'react';
import MenuBar from '../components/MenuBar.js';
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js';

class MainBox extends React.Component {
  state = {
    detailsToDisplay: <Profile />,
  };

  setDetailsToDisplay = id => {
    switch (id) {
      case 'profile':
        this.setState({
          detailsToDisplay: <Profile />,
        });
        console.log('profile');
        break;

      case 'photo':
        this.setState({
          detailsToDisplay: <Photos />,
        });
        break;

      case 'cocktail':
        this.setState({
          detailsToDisplay: <Cocktails />,
        });
        break;

      case 'pokemon':
        this.setState({
          detailsToDisplay: <Pokemon />,
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <MenuBar setDetailsToDisplay={this.setDetailsToDisplay} />
        {this.state.detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
