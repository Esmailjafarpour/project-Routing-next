import axios from 'axios';
export function getAllEvents() {
    // const response = await fetch('https://next-pista-default-rtdb.firebaseio.com/events.json')
    // const data = await response.json();
    axios.get('https://events-fc16f-default-rtdb.firebaseio.com/meetings.json')
    .then((response)=>{
        const events = []
            for(const key in data){
                events.push({
                    id: key,
                    ...data[key]
                });
            }

        }
    
    )
    
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}