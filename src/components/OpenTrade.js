import React from 'react';

const OpenTrade = props => {

  return (
      <tr onClick={props.handleRowClick} key={`${props.trade.id}-row`} className="table-light">
        <td key={`${props.trade.id}-produce`}>{props.trade.produce}</td>
        <td key={`${props.trade.id}-distance`}>{props.trade.distance} km</td> 
        <td key={`${props.trade.id}-user.name`}>{props.trade.user_name}</td> 
        <td key={`${props.trade.id}-completion`}>{props.trade.completion}%</td>
      </tr>
  )
}

export default OpenTrade