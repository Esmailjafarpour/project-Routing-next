import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list.jsx';

function AllEventsPage() {

   const events = getAllEvents();
    return (
      <div>
         <EventList items={events}/>
      </div>
    )
  }
  
  export default AllEventsPage;