import {getAllEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list.jsx';
import EventSearch from '../../components/events/event-search.jsx';
import {useRouter} from 'next/router';


function AllEventsPage() {

   const events = getAllEvents();
   const router = useRouter();

   const findEventHandler = (year,month) => {

      const fullPath =`/events/${year}/${month}`;
      router.push(fullPath);

   }

    return (
      <>
         <EventSearch onSearch={findEventHandler}/>
         <EventList items={events}/>
      </>
    )
  }
  
  export default AllEventsPage;