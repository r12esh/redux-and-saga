import React from 'react'
import { Container } from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines({ entries }) {
  return (
    <Container>
      {
        entries.map((entry) => (
          <EntryLine
            {...entry}
            key={entry.id}
          />
        ))
      }
    </Container>
  )
}

export default EntryLines
