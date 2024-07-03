import styles from './EventListing.module.css'

export default function EventListing() {
  return (
    <tbody className={styles.allEvents}>
      <EventRow eventName="Airsoft Day" startDate="2024-07-06" endDate="2024-07-06" />
      <EventRow eventName="Job Interview" startDate="2024-07-10" endDate="2024-07-10" />
      <EventRow eventName="Workout Session" startDate="2024-07-12" endDate="2024-07-12" />
    </tbody>
  )
}

function EventRow({ eventName, startDate, endDate }) {
  return (
    <tr className={styles.eventRow}>
      <td className="event-row__name">{ eventName }</td>
      <td className="event-row__start">{ startDate }</td>
      <td className="event-row__end">{ endDate }</td>
    </tr>
  )
}