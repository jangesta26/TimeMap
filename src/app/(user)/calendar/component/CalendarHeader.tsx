import React from 'react';

const CalendarHeader = () => (
  <thead>
    <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
        <th
          key={index}
          className="text-center p-2"
        >
          {day}
        </th>
      ))}
    </tr>
  </thead>
);

export default CalendarHeader;



