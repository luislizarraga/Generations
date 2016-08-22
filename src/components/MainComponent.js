import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FirstUserStoryComponent from './first_user_story/FirstUserStoryComponent'
import ContainerComponent from './ContainerComponent'
import { Link } from 'react-router'

export default class MainComponent extends Component {

  render() {
    return (
      <ContainerComponent>
        <div className="row">
         <div className="col-md-12 text-center">
          <h1> Hey there! What would you like to do?</h1>
         </div>
        </div>
        <div className="row" style={divStyle}>
         <div className="col-md-4">
          <Link to='first'>
            <button className="btn btn-success btn-lg">
              See a Mexico City Map!
            </button>
          </Link>
         </div>
         <div className="col-md-4">
          <Link to='second'>
            <button className="btn btn-success btn-lg">
              See a Mexico City Map,<br/> with interesting places marked!
            </button>
          </Link>
         </div>
         <div className="col-md-4">
          <Link to='third'>
            <button className="btn btn-success btn-lg">
              See a Mexico City Map,<br/> where you can make a list of<br/> your favorite places!
            </button>
          </Link>
         </div>
        </div>
      </ContainerComponent>
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