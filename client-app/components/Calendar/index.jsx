import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import './Calendar.css';

const Calendar = (props) => {
  const {
    activeDays,
    days,
    className,
    year,
    month,
  } = props;

  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const [startDay, setStartDay] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState(31);

  useEffect(() => {
    setStartDay(new Date(year + '-' + month + '-01').getDay() + 1);
    setDaysInMonth(new Date(year, month, 0).getDate());
  }, [month, year]);

  return (
    <main className={`${className}`}>
      <section className={`${className}__body`}>
        <ul className={`${className}__body--days`}>
          {daysOfTheWeek.map((day, index) => <li key={index}>{day.substring(0, 3)}</li>)}
        </ul>
        <ul className={`${className}__body--dates`}>
          {Array.from(Array(startDay), (_, i) => <li key={i}></li>)}
          {Array(daysInMonth).fill().map((_, index) => <li className={activeDays.includes(index + 1) ? 'active' : ''} key={index}>{index + 1}</li>)}
        </ul>
      </section>
    </main>
  );
};

Calendar.defaultProps = {
  activeDays: [],
  className: 'calendar',
  days: 31,
};

Calendar.propTypes = {
  activeDays: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
  days: PropTypes.number,
};

export default Calendar;