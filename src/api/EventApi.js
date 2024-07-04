export function EventApi() {
  const BASE_URL = 'http://localhost:3000/events'
  
  async function fetchEvents() {
    // try {
    //   const data = await fetch(BASE_URL);
    //   return await data.json();
    // } catch (error) {
    //   throw new Error("fetchEvents ERROR")
    // }

    return fetch(BASE_URL).then(res => res.json());
  }

  return {
    fetchEvents
  }
}