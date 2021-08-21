import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({addEntry, description,setDescription,value, setValue,isExpense,setIsExpense}) {

  return (
    <Form>
      <EntryForm
      description={description}
      value={value}
      isExpense={isExpense}
      setIsExpense={setIsExpense}
      setValue={setValue}
      setDescription={setDescription}
      />
      
      <ButtonSaveOrCancel 
      addEntry={addEntry} 
      />

    </Form>
  )
}

export default NewEntryForm;
