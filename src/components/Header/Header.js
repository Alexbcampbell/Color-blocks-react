import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="appTopper">
        <h1 className="appHdg">{this.props.hdg}</h1>
        <div className="appTopper-toolbar">
          <div>Add Colours</div>
          <div>Layout</div>
        </div>
      </header>
    );
  }
}

export default Header;
