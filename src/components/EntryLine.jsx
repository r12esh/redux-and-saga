import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import { useDispatch } from "react-redux"
import { removeEntryRedux } from "../actions/entries.actions"
import { openEditModal } from '../actions/modas.actions';

function EntryLine({ id, description, value, isExpense }) {

  const dispatch = useDispatch();

  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>
              {description}
            </Grid.Column>
            <Grid.Column width={3}>
              {"₹" + value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(openEditModal(id))}
                bordered />
              <Icon
                name="trash"
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(removeEntryRedux(id))}
                bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  )
}

export default EntryLine;
