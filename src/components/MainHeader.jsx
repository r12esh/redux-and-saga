import React from 'react'
import { Header } from 'semantic-ui-react'


const MainHeader = ({type="h1",value}) => {
  return (
    <Header as={type}>{value}</Header>
  )
}

export default MainHeader
