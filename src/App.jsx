import React from 'react'
import { Container, Header, Statistic, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Container>
        <Header as="h1">Ritesh</Header>
        <Statistic size="small">
          <Statistic.Label>Your balance :</Statistic.Label>
          <Statistic.Value>$21.9 B</Statistic.Value>
        </Statistic>
        <Segment className="haha" textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic color="green" size="tiny">
                  <Statistic.Label>Incoming</Statistic.Label>
                  <Statistic.Value> $4.3 B </Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic color="red" size="tiny">
                  <Statistic.Label>Outgoing</Statistic.Label>
                  <Statistic.Value> $122 M </Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Header as="h3">History</Header>
        <Segment color="red">
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column width={10}>
                Silicon DOLL
              </Grid.Column>
              <Grid.Column width={3}>
                $117 M
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment color="green">
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column width={10}>
                Stocks UP babe
              </Grid.Column>
              <Grid.Column width={3}>
                $2.4 B
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Header as="h3">Add new transaction</Header>
        <Form>
          <Form.Group unstackable>
            <Form.Input
              label="Description"
              width={12}
              icon="tags"
              placeholder="Enter bitch"
            >
            </Form.Input>
            <Form.Input
              label="Value"
              width={4}
              placeholder="100.00"
              icon="dollar"
              iconPosition="left"
            >
            </Form.Input>
          </Form.Group>
          <Button.Group style={{ marginTop: "10px" }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>
      </Container>
    </div>
  );
}

export default App;
