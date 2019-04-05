import React, { Component } from 'react'

class UpdateForm extends Component {
    constructor(props) {
      super(props);
      console.log(this.props)
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    

    render() {
        return(
        <div className="form">
            <form onSubmit={this.props.updateSmurf}>
            <input required placeholder="name..." name="name" onChange={this.handleInputChange} value={this.state.name}></input>
            <input required placeholder="age..." name="age" onChange={this.handleInputChange} value={this.state.age}></input>
            <input required placeholder="height" name="height" onChange={this.handleInputChange} value={this.state.height}></input>
            <button type="submit" className="btn">Update Smurf</button>
            </form>
        </div>
        )
    }

}

export default UpdateForm