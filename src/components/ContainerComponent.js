import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FirstUserStoryComponent from './first_user_story/FirstUserStoryComponent'
import { Link } from 'react-router'

export default class ContainerComponent extends Component {

  render() {
    return (
      <div className="container" style={divStyle}>
        {this.props.children}
      </div>
    );
  }
}

var divStyle = {
  // border: 'red',
  // borderWidth: 2,
  // borderStyle: 'solid',
  paddingTop: '3em',
  paddingBottom: '3em'
};