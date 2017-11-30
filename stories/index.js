import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Card } from '../src/card';
import { Text, Checkbox, Radio } from '../src/input';

import './index.css';

storiesOf('Card', module)
  .add('Base', () => <Card />);

storiesOf('Text', module)
  .add('Base',
    () => (
      <div>
        <Text size="large" placeholder="Some text" />
        <hr/>
        <Text placeholder="Some text" />
        <hr/>
        <Text
          size="small"
          placeholder="Some text"
          label="Input with no validation state"
        />
      </div>
    )
  )
  .add('Large', () => <Text size="large" />)
  .add('Medium', () => <Text />)
  .add('Small', () => <Text size="small" />);

storiesOf('Checkbox', module)
  .add('Base', () => (
    <div>
      <Checkbox label="Checkbox label" />
      <Checkbox label="Checkbox label" state="success" />
      <Checkbox label="Checkbox label" state="warning" />
      <Checkbox label="Checkbox label" state="error" />
    </div>
  ))
  .add('Success', () => <Checkbox label="Checkbox label" state="success" />);

storiesOf('Radio', module)
  .add('Base', () => (
    <div>
      <Radio label="Radio button label" />
      <Radio label="Radio button label" state="success" />
      <Radio label="Radio button label" state="warning" />
      <Radio label="Radio button label" state="error" />
    </div>
  ))
  .add('Success', () => <Radio label="Radio button label" state="success" />);
