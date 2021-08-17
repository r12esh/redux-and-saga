import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm() {
  return (
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
      <ButtonSaveOrCancel />
    </Form>
  )
}

export default NewEntryForm
