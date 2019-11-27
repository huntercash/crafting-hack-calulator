import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const Inputs = props => (
  <div>
    <Form>
      {/* Hours */}
      <Form.Field>
        <label max={50}>Hours</label>
        <input type='number' max={59} placeholder='18' />
      </Form.Field>
      {/* Minutes */}
      <Form.Field>
        <label>Minutes</label>
        <input type='number' max={59} placeholder='56' />
      </Form.Field>
      {/* Desired % of Gear */}
      <Form.Field max={100}>
        <label>Desired % of Gear</label>
        <input placeholder='83%' type='number' max={100} />
      </Form.Field>
      <Button onClick={console.log(props.numbers)}>Calculate</Button>
    </Form>
  </div>
);

export default Inputs;
