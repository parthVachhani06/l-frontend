import React, { useState } from 'react'
import AppointmentForm from '../componets/AppointmentForm';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

const CreateAppointmentPage = () => {

    const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSave = (appointmentData) => {
        createAppointment(appointmentData).then(() => {
            setSuccess(true);
            setOpenSnackbar(true);
            // Redirect to appointments list page after 2 seconds
            
          })
          .catch((err) => {
            setError('Failed to create appointment');
            setOpenSnackbar(true);
          });
      };

      const createAppointment = (data) => {
        return axios.post('https://l-backend-eg7s.onrender.com/appointments', data);
      };

      const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
      };

  return (
    <div>
    <h2>Create Appointment</h2>
    <AppointmentForm onSave={handleSave} />

    {/* Snackbar for showing success or error messages */}
    <Snackbar
      open={openSnackbar}
      autoHideDuration={4000}
      onClose={handleCloseSnackbar}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity={success ? 'success' : 'error'}
      >
        {success ? 'Appointment created successfully!' : error}
      </Alert>
    </Snackbar>
  </div>
  )
}

export default CreateAppointmentPage
