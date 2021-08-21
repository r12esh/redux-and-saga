import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import { v4 } from "uuid";
import ModalEdit from './components/ModalEdit';

function App() {

  const [entries, setEntries] = useState(initialEntry);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState("Loading");
  const [totalExpenses, setTotalExpenses] = useState("Loading");
  const [totalBalance, setTotalBalance] = useState("Loading");

  //useEffect hook to load the Edit changes of Entry
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  //useEffect hook for Total Money count on heading
  useEffect(()=>{
    let totalIncome = 0;
    let totalExpenses = 0;
    let totalBalance = 0;
    entries.map((entry)=>{
      if (entry.isExpense){
        totalExpenses += parseFloat(entry.value)
      }else{
        totalIncome += parseFloat(entry.value)
      }
    });
    totalBalance = totalIncome - totalExpenses;

    setTotalBalance(totalBalance);
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);

    console.log(`Total Income is ${totalIncome}`);
    console.log(`Total Expense is ${totalExpenses}`);

  },[entries])

  //reset entry
  const resetEntry = () => {
    setValue("")
    setDescription("")
    setIsExpense(true)
  }

  //Function delete entry
  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    console.log("Old list", entries);
    console.log("Result h ye new", result);
    setEntries(result)
  }
  //function add entry
  const addEntry = () => {
    const result = entries.concat(
      {
        id: v4(),
        description,
        value,
        isExpense
      }
    )
    setEntries(result);
    resetEntry();
  }

  //function editEntry
  const editEntry = (id) => {
    console.log("entry Editing of ID:", id);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
      // console.log("Thiisisisissi",entry);
    }
  }

  return (

    <Container>

      <MainHeader type="h1" value="Ritesh" />

      <DisplayBalance
        size="small"
        title="Your balance"
        value={`₹${totalBalance}`}
      />

      <DisplayBalances 
      totalExpenses={totalExpenses}
      totalIncome={totalIncome}
      />

      <MainHeader
        type="h3"
        value="History"
      />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsExpense={setIsExpense}
        editEntry={editEntry}
      />

      <MainHeader
        type="h3"
        value="Add new transaction"
      />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        setValue={setValue}
        setDescription={setDescription}
      />

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        setValue={setValue}
        setDescription={setDescription}
      />

    </Container>

  );
}

export default App;

var initialEntry = [
  {
    id: v4(),
    description: "Electricity Bill",
    value: "2400",
    isExpense: true,
  },
  {
    id: v4(),
    description: "Salary",
    value: "90000",
    isExpense: false,
  },
  {
    id: v4(),
    description: "Monthly goods",
    value: "30",
    isExpense: true,
  },
  {
    id: v4(),
    description: "Bought Stocks",
    value: "20",
    isExpense: true,
  },
]