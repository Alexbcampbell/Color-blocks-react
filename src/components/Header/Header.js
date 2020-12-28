import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import mapStoreToProps from '../../Redux/mapStoreToProps';

class Header extends Component {
  onClickRed = (event) => {};

  render() {
    // const colorButton = this.props.store.colorReducer.map(item, index) => {
    //   return()
    // }

    return (
      <header className="appTopper">
        <h1 className="appHdg">{this.props.hdg}</h1>
        <div className="appTopper-toolbar">
          <div>
            <button>Add Red</button>
            <button>Add Blue</button>
            <button>Add Green</button>
            <button>Add Yellow</button>
          </div>
          <div>Layout</div>
        </div>
      </header>
    );
  }
}

export default connect(mapStoreToProps)(Header);
