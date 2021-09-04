import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Button } from 'semantic-ui-react'
import { closeEditModal } from '../actions/modas.actions';
import useEntryDetails from '../hooks/useEntryDetails';
import EntryForm from './EntryForm'

function ModalEdit({ isOpen, id, description, value, isExpense }) {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);
  return (
    <Modal open={isOpen} >
      <Modal.Header>
        Edit Entry
      </Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryUpdate.description}
          value={entryUpdate.value}
          isExpense={entryUpdate.isExpense}
          setIsExpense={entryUpdate.setIsExpense}
          setValue={entryUpdate.setValue}
          setDescription={entryUpdate.setDescription}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())} >
          Close
        </Button>
        <Button onClick={() => entryUpdate.updateEntry(id)} primary >
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
