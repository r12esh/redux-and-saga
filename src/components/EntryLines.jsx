import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines({ entries, deleteEntry,editEntry }) {
  return (
    <Container>
      {
        entries.map((entry) => (
          <EntryLine
            {...entry}
            key={entry.id}
            deleteEntry={deleteEntry}
            editEntry={editEntry}
          />
        ))
      }
    </Container>
  )
}

export default EntryLines
