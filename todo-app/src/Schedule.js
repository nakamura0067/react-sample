import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Schedule() {
 
    const onClickDay = value => {
        alert('Clicked day: ' + value);
    }
    
    return (
        <div>
            <Calendar
                onClickDay = {onClickDay}
            />
        </div>
    );
}
