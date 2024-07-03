export function EventApi() {
  const BASE_URL = 'http://localhost:3000/events'
  
  async function fetchEvents() {
    const data = await fetch(BASE_URL);
    return await data.json();
  }

  return {
    fetchEvents
  }
}