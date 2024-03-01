import './datePickerComponent.css';
import { useState } from 'react';
import { DatePicker } from '@gsebdev/react-simple-datepicker';
import 'react-responsive-datepicker/dist/index.css';

function DatePickerComponent({ data }) {
  // Define state for selected date
  const [selectedDate, setSelectedDate] = useState('01/02/2023');

  // Callback function when user selects a date
  const onChangeCallback = (date) => {
    // Update state with selected date
    setSelectedDate(date);
    // You can perform additional actions here if needed
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

export default DatePickerComponent;
