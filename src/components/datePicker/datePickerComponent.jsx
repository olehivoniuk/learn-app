import './datePickerComponent.css';
import { useState } from 'react';
import { DatePicker } from '@gsebdev/react-simple-datepicker';
import 'react-responsive-datepicker/dist/index.css';

function DatePickerComponent({ data }) {

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

export default DatePickerComponent;
