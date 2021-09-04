import React, { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

function EntryForm({description, value, isExpense,setIsExpense,setDescription,setValue}) {
  return (
    <Fragment>
      <Form.Group unstackable>
        <Form.Input
          label="Description "
          width={12}
          icon="tags"
          placeholder="Enter description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        >
        </Form.Input>
        <Form.Input
          label="Value"
          width={4}
          placeholder="100.00"
          icon="rupee"
          iconPosition="left"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
          type="number"
        >
        </Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox 
        onChange={()=>setIsExpense(!isExpense)} 
        label={isExpense ? "Expense" : "Income"} 
        toggle 
        checked={!isExpense}
        />
      </Segment>
    </Fragment>
  )
}

export default EntryForm
