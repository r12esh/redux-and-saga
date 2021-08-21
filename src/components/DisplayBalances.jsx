import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({totalIncome, totalExpenses}) {
  return (
    <Segment className="haha" textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance color="green" size="tiny" title="Income" value={`₹${totalIncome}`} />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance color="red" size="tiny" title="Expenses" value={`₹${totalExpenses}`} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default DisplayBalances
