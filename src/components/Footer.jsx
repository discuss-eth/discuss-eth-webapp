import React, { Component } from 'react';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

export default class Footer extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About'/>
                <List link inverted>
                  <List.Item as='a' href="https://github.com/discuss-eth/discuss-eth.github.io">GitHub</List.Item>
                  <List.Item as='a' href="mailto:moody.salem+discuss-eth@gmail.com">Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>Footer Header</Header>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}