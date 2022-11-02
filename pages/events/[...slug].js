import {useRouter} from 'next/router';
import {getFilteredEvents} from '../../dummy-data';
import EventList from '../../components/events/event-list.jsx';
import Button from '../../components/ui/button';

function filteredEventsPage() {

   const router = useRouter();
   const filterData = router.query.slug;

   if (!filterData) {
      return <p className="center">Loading ...</p>
   }

   const filteredYear = filterData[0];
   const filteredMonth = filterData[1];

   const numYear = +filteredYear;
   const numMonth = +filteredMonth;

   if (
      isNaN(numYear)|| isNaN(numMonth) 
      || numYear > 2030 || numYear < 2020 
      || numMonth > 12 || numMonth < 1
   ){

      return (
         <div className="center">
            <p>Invalid filter.Please adjust your values!</p>
            <div>
               <Button link='/events'>Show All Events</Button>
            </div>
         </div>
      )

   }

   const filteredEvents = getFilteredEvents({
      year : numYear,
      month : numMonth
   })

   if (!filteredEvents || filteredEvents.length === 0) {

      return (
         <div className="center">
            <p>No Event found for the chosen filter!</p>
            <div >
               <Button link='/events'>Show All Events</Button>
            </div>
         </div>
      )

   }

    return (
  
     <div>
        <EventList items={filteredEvents}/>
     </div>
  
    )

  }
  
  export default filteredEventsPage;