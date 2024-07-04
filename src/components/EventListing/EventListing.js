import styles from './EventListing.module.css'

/**
 * Component that displays all events, does not include the title of the table.
 * data is an array of event objects. Event objects include an eventName, startDate, endDate, and id, in that order.
 */
export default function EventListing({ data }) {
  return (
    <tbody className={styles.allEvents}>
      {
        data.map((e) => ( //in jsx, function blocks need to be () not {}
          <EventRow key={e.id} eventName={e.eventName} startDate={e.startDate} endDate={e.endDate}/>
        ))
      }
    </tbody>
  )
}

//Describes each row in the table.
function EventRow({ eventName, startDate, endDate }) {
  return (
    <tr className={styles.eventRow}>
      <td className="event-row__name">{ eventName }</td>
      <td className="event-row__start">{ startDate }</td>
      <td className="event-row__end">{ endDate }</td>
    </tr>
  )
}