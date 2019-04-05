import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Smurf from './Smurf';

class Smurfs extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="Smurfs">
        
        <div className="smurf-wrapper">
          {this.props.smurfs.map(smurf => {
            return (
            
            <Link to={`/${smurf.id}`}>
              <div className="smurf-container">
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
                
              </div>
              </Link>
             
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
