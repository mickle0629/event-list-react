import './App.css';
import EventListing from './components/EventListing/EventListing';
import { useEffect, useState } from 'react';
import { EventApi } from './api/EventApi';

function App() {
  const [eventData, setEventData] = useState(null)

  //syncs app w/ external API (JSON-server)
  useEffect(() => {
    EventApi().fetchEvents().then(res => {
      if (res) {
        setEventData(res)
      }
    });
    
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
        {eventData && <EventListing data={eventData} />}
      </table>
    </main>
  );
}

export default App;
