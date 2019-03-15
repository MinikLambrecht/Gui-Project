/**
 * This is a component that can specify
 * country phone codes, validate input &
 * format the input by specified countrys phone number format
 */
import React, { Component } from 'react';             // Imports dependencies from react
import CustomInput from 'react-phone-number-input';   // Imports dependencies from react-phone-number-input
import 'react-phone-number-input/style.css';          // Imports stylesheet

/**
 * This is our class that will be exported and
 * where all our code is in.
 */
class PhoneInput extends Component {
  /**
   * Here we define out states, which is best defined
   * as a global variable for those who dont know
   */
  constructor() {
    super();
    this.state = {
        value: ''
    }
  }

  /**
   * Return our component to the called page
   * <CustomInput />
   */
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
