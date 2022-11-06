// import {getFeaturedEvents} from '../dummy-data';
import {getFeaturedEvents} from '../helpers/api-util';
import EventList from '../components/events/event-list';

// process.env.http_proxy = 'http://127.0.0.1:50992';

function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();
  return (
    <div>
        <EventList items={props.events}/>
    </div>
  )
} 

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return{
    props: {
      events : featuredEvents
    }
  }
}

export default HomePage;