import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';
import './index.css';

class Card extends Component {
  render() {
    return (
      <Button bsStyle="primary">Primary</Button>
    );
  }
}

export {Card};
