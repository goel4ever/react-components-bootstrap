import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { FormGroup, FormControl, ControlLabel, Checkbox as C, Radio as R } from 'react-bootstrap';

class Text extends Component {
  render() {
    return (
      <FormGroup bsSize={this.props.size} validationState={null}>
        {this.props.label ? <ControlLabel>{this.props.label}</ControlLabel> : null}
        <FormControl type="text" placeholder={this.props.placeholder} />
      </FormGroup>
    );
  }
}

class Checkbox extends Component {
  render() {
    return (
      <C validationState={this.props.state}>{this.props.label}</C>
    );
  }
}

class Radio extends Component {
  render() {
    return (
      <R validationState={this.props.state}>{this.props.label}</R>
    );
  }
}


export { Text, Checkbox, Radio };
