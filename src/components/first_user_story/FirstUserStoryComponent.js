import React, { Component } from 'react';
import ContainerComponent from '../ContainerComponent'
import { Link } from 'react-router'
import scrollToElement from 'scroll-to-element';
let GoogleMapsLoader = require('google-maps');


GoogleMapsLoader.KEY = 'AIzaSyBB_9M1Tbm4yZ_EbKMstVA7t6c-gBbshyY';

export default class FirstUserStoryComponent extends Component {
  constructor(props) {
    super(props)
    this.map_options = {
      center: {lat: 19.4174175, lng: -99.1561288},
      zoom: 12
    }
    this.handleMapsLoad = this.handleMapsLoad.bind(this)
  }

  componentDidMount(){
    scrollToElement('#first_user_story_map');
  }

  handleMapsLoad(google) {
    setTimeout(() => {
      new google.maps.Map(document.getElementById('first_user_story_map'), this.map_options);
    }, 400);
  }

  render() {
    GoogleMapsLoader.load(this.handleMapsLoad);
    return (
      <ContainerComponent>
        <div className="row">
         <div className="col-md-12">
          <Link to='/'>
            <button className="btn btn-success btn-lg">
              Go back!
            </button>
          </Link>
         </div>
        </div>
        <div className="row">
         <div className="col-md-12">
          <h1 style={hStyle}> Mexico City </h1>
          <div id="first_user_story_map" style={divStyle}></div>
         </div>
        </div>
      </ContainerComponent>
    );
  }
}

var divStyle = {
  height: '500px'
};

var hStyle = {
  paddingBottom: '1em'
};