import React from 'react';

export default const InventoryItem = (props) => {
   return (
    <tr className="table-success"> {/*changes color based on expiry - harvest*/}
      <td>Carrot (Icon)</td>
      <td>500g</td>
      <td>3 days ago</td>
      <td>10 days</td>
      <td>Thumb</td>
      <td>Details</td>
    </tr>
   )
}