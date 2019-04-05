import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom'
import axios from 'axios'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf'
import UpdateForm from './components/UpdateForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  currentSmurf = smurf => {
    this.setState({
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      editingId: smurf.id
    })
    this.props.history.push(`/${smurf.id}`)
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({ smurfs: res.data})
    })
    .catch(err=> {
      console.log(err)
    })
  }

  addSmurf = newSmurf => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        this.setState ({smurfs: [...this.state.smurfs, newSmurf]
      })
    })
    .catch(err =>{
      console.log(err)
    })

    this.props.history.push('/')
  }

  updateSmurf = (e)=> {
    e.preventDefault();
  
    axios.put(`http://localhost:3333/smurfs/${this.state.editingId}`, {name: this.state.name, age: this.state.age, height:this.state.height})
      .then(res => {
        this.setState({ smurfs: res.data,
          name: '',
          age: '',
          height: ''
        });
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  
      this.props.history.push("/")
  
  }

  deleteSmurf = (e, id) => {
    e.preventDefault()
  
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
          console.log('Data is back, now set state and reroute', res.data);
          this.setState({
            smurfs: res.data
          });
          this.props.history.push('/');
        })
        .catch(err => {
          console.log(err);
        });
  
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="container">
        <div className="navbar">
          <h1> Smurf Village </h1>
          <NavLink to="/smurf-form"><button className="btn">Add a Smurf!</button></NavLink>
        </div>
        <Route path="/smurf-form" render={pros =>
        <SmurfForm
          addSmurf={this.addSmurf}
        />}/>
        {/* <SmurfForm addSmurf={this.addSmurf} /> */}
        <Route exact path="/" render={props => 
        <Smurfs
        {...props}
        smurfs={this.state.smurfs}
        currentSmurf = {this.currentSmurf}
        />
        }/>
        <Route exact path="/:smurfId" render={props => 
        <Smurf {...props}
        smurfs={this.state.smurfs}
        deleteSmurf={this.deleteSmurf}
        />}/>

        <Route path="/:smurfId/update" render={props =>
            <UpdateForm
            {...props}
            handleChanges={this.handleChanges}
            updateSmurf={this.updateSmurf}
            {...this.state} />
          }/>
        </div>
      </div>
    );
  }
}

export default App;
