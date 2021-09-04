import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {

  const{
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  } = useEntryDetails();
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
