import React from 'react'
import {AppBar} from 'material-ui';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  get styles() {
    return {
      logo: {
        margin: '14px 10px 0 -8px'
      }
    }
  };

  render() {
    return (
      <div>
        <AppBar
          title="Fruit Market"
          style={{backgroundColor: '#FFF'}}
          className="navbar"
          iconStyleLeft={this.styles.logo}
          iconElementLeft={<img style={{width: 50}} src={require('Images/logo.png')}/>}
        />
      </div>
    );
  }
}

export default Navbar;
