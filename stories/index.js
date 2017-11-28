import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Card } from '../src/card';

import './index.css';

storiesOf('Card', module)
  .add('with text', () => <Card />);
