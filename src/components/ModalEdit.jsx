import React from 'react'
import { Modal,Button } from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({isOpen, setIsOpen,description,setDescription,value, setValue,isExpense,setIsExpense}) {
  return (
    <Modal open={isOpen} >
      <Modal.Header>
        Edit Entry
      </Modal.Header>
      <Modal.Content>
        <EntryForm 
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        setValue={setValue}
        setDescription={setDescription}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={()=>setIsOpen(false)} >
          Close
        </Button>
        <Button onClick={()=>setIsOpen(false)} primary >
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
