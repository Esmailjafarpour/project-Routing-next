import Head from 'next/head';
import {getFeaturedEvents} from '../dummy-data';
// import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
//  const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <Head>
                <title>Events of the company of programmers</title>
                <meta name="description" content="The events of the programmers company in the next week are as follows"/>
            </Head>
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents
        },
        revalidate : 120
    }
}

export default HomePage;