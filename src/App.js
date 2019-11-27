import React, { useState } from 'react';
import { Container, Grid, Segment, Form } from 'semantic-ui-react';
import { calculate } from './helpers/functions';
function App() {
  // State
  const [data, setData] = useState({
    hours: '0',
    minutes: '0',
    percentage: '0'
  });

  const handleChange = e =>
    setData({
      ...data,
      [e.target.name]: [e.target.value]
    });

  return (
    <>
      <div></div>
      <Container>
        <Grid stackable doubling divided='vertically'>
          <Grid.Row columns={1} centered>
            <Grid.Column style={{ textAlign: 'center' }}>
              <h1>Game of Thrones Conquest: Crafting Hack</h1>
              <h4>get what you want, what you really really want</h4>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h1 style={{ textAlign: 'center' }}>Input your variables</h1>
              <Form>
                {/* Hours */}
                <Form.Field>
                  <label htmlFor='hours' max={50}>
                    Hours to complete crafting
                  </label>
                  <input
                    name='hours'
                    type='number'
                    max={59}
                    placeholder='18'
                    value={data.hours}
                    onChange={handleChange}
                  />
                </Form.Field>
                {/* Minutes */}
                <Form.Field>
                  <label htmlFor='minutes'>Minutes to complete crafting</label>
                  <input
                    name='minutes'
                    type='number'
                    max={59}
                    placeholder='56'
                    value={data.minutes}
                    onChange={handleChange}
                  />
                </Form.Field>
                {/* Desired % of Gear */}
                <Form.Field max={100}>
                  <label htmlFor='percentage'>
                    Desired % of Gear (if it says 18% legendary, put 18)
                  </label>
                  <input
                    name='percentage'
                    placeholder='83%'
                    type='number'
                    max={100}
                    value={data.percentage}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <h1 style={{ textAlign: 'center' }}>Then do this</h1>
              <Segment>
                <h3>Minutes to use speed ups on</h3>
                <p>
                  Total Minutes:{' '}
                  {calculate(data.hours, data.minutes, data.percentage)}
                </p>
                <h3>Breakdown to use</h3>
                <p>
                  Amount of 1 hour speed ups:{' '}
                  {Math.round(
                    Math.floor(
                      calculate(data.hours, data.minutes, data.percentage) / 60
                    )
                  )}
                </p>
                <p>
                  Amount of 5 minute speed ups:{' '}
                  {Math.round(
                    Math.floor(
                      (calculate(data.hours, data.minutes, data.percentage) %
                        60) /
                        5
                    )
                  )}
                </p>
                <p>
                  Amount of 1 minute speed ups:{' '}
                  {Math.round(
                    Math.floor(
                      calculate(data.hours, data.minutes, data.percentage) % 5
                    )
                  )}
                </p>
                <strong>Complete using gold</strong>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default App;
