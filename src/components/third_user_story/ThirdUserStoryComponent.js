import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import marker_list from 'json!../../../store_directory.json';
import ReactDOMServer from 'react-dom/server';
import MapWindowComponent from '../MapWindowComponent'
import ContainerComponent from '../ContainerComponent'
import { Link } from 'react-router'
import scrollToElement from 'scroll-to-element';


GoogleMapsLoader.KEY = 'AIzaSyBB_9M1Tbm4yZ_EbKMstVA7t6c-gBbshyY';

export default class ThirdUserStoryComponent extends Component {
  constructor(props) {
    super(props)
    this.id = 0;
    this.state = {
      favorites_list: []
    } 
    this.handleMapsLoad = this.handleMapsLoad.bind(this);
    this.handleMapsInit = this.handleMapsInit.bind(this);
    this.handleMarkersLoad = this.handleMarkersLoad.bind(this);
    this.handleAddFavoriteButton = this.handleAddFavoriteButton.bind(this);
    this.createMapWindow = this.createMapWindow.bind(this);
    this.handleMarkersCreate = this.handleMarkersCreate.bind(undefined, this.createMapWindow);
    this.story_map = undefined;
    this.map_options = {
      center: {lat: 19.4174175, lng: -99.1561288},
      zoom: 11
    };
  }

  componentDidMount() {
    scrollToElement('#third_user_story_map');
  }

  handleMapsInit(google) {
    setTimeout(() => {
      this.handleMapsLoad(google);
    }, 200);
    setTimeout(() => {
      this.handleMarkersLoad(google);
    }, 600);
  }

  handleMapsLoad(google) {
    this.story_map = new google.maps.Map(document.getElementById('third_user_story_map'), this.map_options);
  }

  handleMarkersLoad(google) {
    marker_list.map(this.handleMarkersCreate.bind(undefined,this.story_map));
  }

  handleMarkersCreate(createWindow, story_map, obj) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        address: obj.Address,
        region: 'MX',

      },
      function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var marker = new google.maps.Marker({
            map: story_map,
            position: results[0].geometry.location,
            draggable: false,
            animation: google.maps.Animation.DROP,
            title: obj.Name,
          });
          
          var infowindow = new google.maps.InfoWindow({
            // content: createWindow(obj.Name,undefined)
            content: '<div><h4>'+obj.Name+'</h4><button class="btn btn-success" id="info_'+obj.Name.split(' ')[0]+'">Agregar a Favoritos</button></div>'
          });
          
          marker.addListener('click', function() {
            infowindow.open(story_map, marker);
            document.getElementById('info'+obj.Name.split(' ')[0]).addListener('click', function() {
              handleAddFavoriteButton(obj.Name);
            })
          });
        }
      }
    );
  }

  createMapWindow(name,on_click) {
    return ReactDOMServer.renderToString(
      <MapWindowComponent name={name}>
        <button className='btn btn-success' onClick={this.handleAddFavoriteButton}>Agregar a Favoritos</button>
      </MapWindowComponent>
    );
  }

  handleAddFavoriteButton(e) {
    this.setState({
      favorites_list: this.state.favorites_list.concat([{
        id: this.id++,
        name: 'blaaaa'
      }])
    });
  }

  render() {
    GoogleMapsLoader.load(this.handleMapsInit);
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
         <div className="col-md-9">
          <h1> Mexico City </h1>
          <div id="third_user_story_map" style={divStyle}></div>
         </div>
         <div className="col-md-3">
          <h4> Favorites: </h4>
          <ul>
            {this.state.favorites_list.map(place =>
              <li key={place.id}><p>place.name</p></li>
            )}
          </ul>
         </div>
        </div>
      </ContainerComponent>
    );
  }
}

var divStyle = {
  height: '500px'
};
