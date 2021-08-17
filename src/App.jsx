import React from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <div className="App">
      <Container>
        <MainHeader type="h1" value="Ritesh" />
        <DisplayBalance size="small" title="Your balance" value="$21.9 B" />
        <DisplayBalances />
        <MainHeader type="h3" value="History" />
        <EntryLine description="Silicon DOLL" value="$117 M" isExpense={true} />
        <EntryLine description="Cocacola Dividend" value="$550 M" isExpense={false} />
        <EntryLine description="Home near Lakshadweep" value="$3.0 B" isExpense={true} />
        <EntryLine description="Car sales + Electricity Sales + Satellite Profits (Combines)" value="$9.8 B" isExpense={false} />
        <MainHeader type="h3" value="Add new transaction" />
        <NewEntryForm />
      </Container>
    </div>
  );
}

export default App;
