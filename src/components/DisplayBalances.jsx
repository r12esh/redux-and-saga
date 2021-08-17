import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances() {
  return (
    <Segment className="haha" textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="green" size="tiny" title="Incoming" value="$4.3 B" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color="red" size="tiny" title="Expenses" value="$122 M" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances
