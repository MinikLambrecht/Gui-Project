import React, { Component } from 'react';
import CustomInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

class PhoneInput extends Component {
  constructor() {
    super();
    this.state = {
        value: ''
    }
  }

  render() {
    return (
      <CustomInput
        required="required"
        placeholder="Enter phone number"
        value={ this.state.value }
        onChange={ value => this.setState({ value }) }
      />
    );
  }
}

export default PhoneInput;
