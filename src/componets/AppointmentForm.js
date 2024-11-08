import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';

const AppointmentForm = ({ onSave, initialData }) => {

    const [formData, setFormData] = useState(initialData || {
        date: '',
        time: '',
        patient: '',
        doctor: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
      };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <TextField name="date" label="Date" value={formData.date} onChange={handleChange} />
      <TextField name="time" label="Time" value={formData.time} onChange={handleChange} />
      <TextField name="patient" label="Patient" value={formData.patient} onChange={handleChange} />
      <TextField name="doctor" label="Doctor" value={formData.doctor} onChange={handleChange} />
      <Button type="submit">Save</Button>
    </form>
    </div>
  )
}

export default AppointmentForm
