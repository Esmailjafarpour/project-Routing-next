import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list.jsx';
import EventSearch from '../../components/events/event-search.jsx';


function AllEventsPage() {

   const events = getAllEvents();
    return (
      <>
         <EventSearch/>
         <EventList items={events}/>
      </>
    )
  }
  
  export default AllEventsPage;