import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Calendar from './components/Calendar';
import Toggle from './components/Toggle';

import './app.css';

const App = ({ className }) => {

  const [loading, setLoading] = useState(true);

  const [activeDays, setActiveDays] = useState([]);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState('2020-07');
  const [type, setType] = useState('cooling');
 
  const [month, setMonth] = useState('07');
  const [year, setYear] = useState('2020');

  useEffect(() => {
    const dateArr = date.split('-');
    setYear(dateArr[0]);
    setMonth(dateArr[1]);
    
    // this would usually be proxied
    fetch(`http://localhost:8000/weather/${type}?month=${dateArr[1]}&year=${dateArr[0]}`)
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setActiveDays(data.days);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [date, type]);

  const handleCheck = (e) => {
    setType((e.target.checked) ? 'heating' : 'cooling');
  }

  return (
    <main className={className}>
      {
        loading ? <p>Loading...</p> :
        <>
          <input type='month' id='start' name='trip-start' value='2020-06' min='2020-06' max='2020-07' onChange={(e) => setDate(e.target.value)} value={date}/>
          <p>The amount of days {type} was used</p>
          <h2>{count}</h2>
          <Toggle handleChange={handleCheck} options={['cooling', 'heating']}/>
          <Calendar activeDays={activeDays} month={month} year={year} />
        </>
      }
    </main>
  )
}

App.defaultProps  = {
  className: 'main',
};

App.propTypes = {
  className: PropTypes.string,
};

export default App;