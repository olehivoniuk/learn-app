import React from 'react';
import './datePickerComponent.css';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { useState } from 'react';
import { DatePicker } from '@gsebdev/react-simple-datepicker';
import 'react-responsive-datepicker/dist/index.css';
function DatePickerComponent() { // Remove the 'data' prop from function parameters

  const [selectedDate, setSelectedDate] = useState(new Date());
  const onChangeCallback = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      id='datepicker-id'
      name='date-demo'
      onChange={onChangeCallback}
      value={selectedDate}
    />
  );
}

// Add PropTypes validation for selectedDate
DatePickerComponent.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

export default DatePickerComponent;
