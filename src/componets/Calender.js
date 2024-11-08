
import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';

const Calender = () => {
  return (
    <div>
      <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
    
      
      eventClick={(eventInfo) => alert(`Clicked on: ${eventInfo.event.title}`)}
    />
    </div>
  )
}

export default Calender
