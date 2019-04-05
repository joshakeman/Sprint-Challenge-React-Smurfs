import React from 'react';

const Smurf = props => {
  const smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.smurfId)
  if (!smurf) return <h3>Loading data...</h3>;
  console.log(smurf)
  return (
    <div className="Smurf">
      <div className="smurf-container control-width">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
        <div className="button-wrapper">
          <button className="btn">Update Smurf</button>
          <button onClick={e=>props.deleteSmurf(e, smurf.id)} className="btn">Delete Smurf</button>    
        </div>
        </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

