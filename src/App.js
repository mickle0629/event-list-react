import './App.css';
import EventListing from './components/EventListing/EventListing';
import { useEffect, useState } from 'react';
import { EventApi } from './api/EventApi';

function App() {
  const [eventData, setEventData] = useState(null)

  useEffect(() => {
    // console.log(fetch('localhost:3000/events').then((res) => res.json()))
    // console.log("Mounted")
    
    console.log(EventApi().fetchEvents());
  }, [])

  return (
    <main className="main-container">
      <button type="submit" className="add-btn">New Event</button>
      <h1 className="event-list__title">All Events</h1>
      <table className="event-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <EventListing />
      </table>
    </main>
  );
}

export default App;
