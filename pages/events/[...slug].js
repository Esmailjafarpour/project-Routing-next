import { Fragment,useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
// import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

// import useSWR from 'swr';

// //*****solotion-one*****// //

// function FilteredEventsPage() {

//   const router = useRouter();

//   const filterData = router.query.slug;

//   if (!filterData) {
//     return <p className='center'>Loading...</p>;
//   }

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return (
//       <Fragment>
//         <ErrorAlert>
//           <p>Invalid filter. Please adjust your values!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <Button link='/events'>Show All Events</Button>
//         </div>
//       </Fragment>
//     );
//   }

//   const filteredEvents = getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   const date = new Date(numYear, numMonth - 1);

//   return (
//     <Fragment>
//       <ResultsTitle date={date} />
//       <EventList items={filteredEvents} />
//     </Fragment>
//   );

// }

// export default FilteredEventsPage;






// //*****getServerSideRendering*****// //
  // //***** solotion-two*****// //

// function FilteredEventsPage(props) {

//   if(props.hasError) {
//     return (
//             <Fragment>
//               <ErrorAlert>
//                 <p>Invalid filter. Please adjust your values!</p>
//               </ErrorAlert>
//               <div className='center'>
//                 <Button link='/events'>Show All Events</Button>
//               </div>
//             </Fragment>
//         )
//   }

//   const filteredEvents = props.events

//   if (!filteredEvents || filteredEvents.length === 0) {
//     return (
//       <Fragment>
//         <ErrorAlert>
//           <p>No events found for the chosen filter!</p>
//         </ErrorAlert>
//         <div className='center'>
//           <Button link='/events'>Show All Events</Button>
//         </div>
//       </Fragment>
//     );
//   }

//   const date = new Date(props.date.numYear, props.date.numMonth - 1)
//   return (
//     <Fragment>
//       <ResultsTitle date={date} />
//       <EventList items={filteredEvents} />
//     </Fragment>
//   );

// }

// export async function getServerSideProps(context){

//   const {params} = context;

//   const filterData = params.slug

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {

//       // 1
//       // redirect : {
//       //   destianation : '/error'
//       // }

//       // 2
//       // notFound : true

//       props : {hasError : true}

//     }
//   }

//   const filteredEvents = await getFilteredEvents({
//       year: numYear,
//       month: numMonth,
//     });

//   return{
//     props:{
//       events : filteredEvents,
//       date : {
//         year: numYear,
//         month: numMonth,
//       }
//     }
//   }
// }


// export default FilteredEventsPage;













// //******clientServerSiteRendering*******// //
      // //******solotion-three******// //

function FilteredEventsPage(props) {
    const [loadedEvents ,setLoadedEvents] = useState([])
    const router = useRouter();
    const filterData = router.query.slug
    // const {data,error} = useSWR("")
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const allFilteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    useEffect(()=>{
        if (allFilteredEvents) {
          const events = [];
          for (const key in allFilteredEvents) {
            events.push({
              id : key,
              ...allFilteredEvents[key]
            })
          }
          setLoadedEvents(events)
        }
    },[])

    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numYear > 2030 ||
      numYear < 2021 ||
      numMonth < 1 ||
      numMonth > 12
    ) {
      return (
        <Fragment>
          <ErrorAlert>
            <p>Invalid filter. Please adjust your values!</p>
          </ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </Fragment>
      );
    }
  
    if (!loadedEvents) {
      return <p className='center'>Loading...</p>;
    }
    
    const filteredEvents = loadedEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
    });
  
    if (!filteredEvents || filteredEvents.length === 0) {
      return (
        <Fragment>
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
          </ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </Fragment>
      );
    }
  
    const date = new Date(numYear, numMonth - 1)
  
    return (
         <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
  }
  export default FilteredEventsPage;