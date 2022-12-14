import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {

  const router = useRouter();

  // const events = getAllEvents();
  const {events} = props

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  const titlePage = (
    <Head>
          <title>All Events of the company of programmers</title>
          <meta name="description" content="The events of the programmers company in the next week are as follows"/>
      </Head>
  )

  return (
    <Fragment>
      {titlePage}
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps(){
  const events = await getAllEvents()
  return{
    props : {
      events : events
    },
    revalidate : 60
  }
}

export default AllEventsPage;