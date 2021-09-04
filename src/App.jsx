import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEntries } from './actions/entries.actions';

function App() {
  const [totalIncome, setTotalIncome] = useState("Loading");
  const [totalExpenses, setTotalExpenses] = useState("Loading");
  const [totalBalance, setTotalBalance] = useState("Loading");
  const [entry, setEntry] = useState();
  const entries = useSelector(state => state.entries);
  const { isOpen, id } = useSelector(state => state.modals);
  const dispatch = useDispatch();


  //useEffect hook FOR INITIAL ENTRIES TO FETCH FROM LOCAL SERVER
  useEffect(()=>{
    dispatch(getAllEntries())
  },[dispatch])

  //useEffect hook to load the Edit changes of Entry
  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  //useEffect hook for Total Money count on heading
  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    let totalBalance = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        totalExpenses += parseFloat(entry.value)
      } else {
        totalIncome += parseFloat(entry.value)
      }
      return 0;
    });
    totalBalance = totalIncome - totalExpenses;
    setTotalBalance(totalBalance);
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
  }, [entries])

  return (

    <Container>

      <MainHeader type="h1" value="Ritesh" />
      <DisplayBalance size="small" title="Your balance" value={`₹${totalBalance}`} />

      <DisplayBalances totalExpenses={totalExpenses} totalIncome={totalIncome} />
      <MainHeader type="h3" value="History" />

      <EntryLines entries={entries} />

      <MainHeader type="h3" value="Add new transaction" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />

    </Container>

  );
}

export default App;
