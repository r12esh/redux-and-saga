import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({ id, description, value, isExpense, deleteEntry,editEntry }) {

  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>
              {description}
            </Grid.Column>
            <Grid.Column width={3}>
              {"₹"+value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon style={{ cursor: "pointer" }} onClick={()=>editEntry(id)} name="edit" bordered />
              <Icon style={{ cursor: "pointer" }} onClick={() => deleteEntry(id)} name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default EntryLine;
