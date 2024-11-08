import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';


const AppointmentList = ({ appointments, onEdit, onDelete }) => {
  return (
    <div>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Patient</TableCell>
          <TableCell>Doctor</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell>{appointment.date}</TableCell>
            <TableCell>{appointment.time}</TableCell>
            <TableCell>{appointment.patient}</TableCell>
            <TableCell>{appointment.doctor}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(appointment)}>Edit</Button>
              <Button onClick={() => onDelete(appointment.id)} color="error">Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}

export default AppointmentList
