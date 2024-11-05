import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Customer = (props) => {
  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell><img src={props.image} alt='customer'/></TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
  )
}

// const CustomerProfile = (props) => {
//     return (
//       <TableRow>
//         <TableCell>{props.id}</TableCell>
//         <TableCell><img src={props.image} alt='customer'/></TableCell>
//         <TableCell>{props.name}</TableCell>
//       </TableRow>
//     );
// };

// const CustomerInfo = (props) => {
//     return (
//       <TableRow>
//         <TableCell>{props.birthday}</TableCell>
//         <TableCell>{props.gender}</TableCell>
//         <TableCell>{props.job}</TableCell>
//       </TableRow>
//     );
// };

export default Customer