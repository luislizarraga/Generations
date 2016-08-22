import React, { PropTypes, Component } from 'react';


export default class MapWindowComponent extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        {this.props.children}
      </div>
    );
  }
}


MapWindowComponent.propTypes = {
  name: PropTypes.string.isRequired,
  // size: PropTypes.number.isRequired,
  // color: PropTypes.string.isRequired,
  // style: PropTypes.object
};