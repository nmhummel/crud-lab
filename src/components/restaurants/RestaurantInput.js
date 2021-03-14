import React, { Component } from 'react';

//  allows a user to create new restaurants. Your form should have two inputs: a text input to enter the name of the restaurant, and an input with type equal submit.
class RestaurantInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <input type="text" value={this.state.name} onChange={ e => this.handleChange(e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
