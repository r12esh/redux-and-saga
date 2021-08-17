import React from 'react'
import { Statistic } from 'semantic-ui-react'


function DisplayBalance({size="tiny",color="black",value,title}) {
  return (

    <Statistic color={color} size={size}>
      <Statistic.Label>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>

  )
}

export default DisplayBalance;
