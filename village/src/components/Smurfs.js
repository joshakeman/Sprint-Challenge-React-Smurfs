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
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
            
            <Link to={`/${smurf.id}`}>
              <div className="Smurf">
                <h3>{smurf.name}</h3>
                <strong>{smurf.height} tall</strong>
                <p>{smurf.age} smurf years old</p>
              </div>
              </Link>
              // <Smurf
              //   name={smurf.name}
              //   id={smurf.id}
              //   age={smurf.age}
              //   height={smurf.height}
              //   key={smurf.id}
              // />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
