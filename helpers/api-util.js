export async function getAllEvents(){
    try {
        // const response = await fetch('https://events-fc16f-default-rtdb.firebaseio.com/meetings.json');
        const response = await fetch('https://twitter.com/vahid');
    } catch (error) {
        console.log(error);
        return [];
    }
    const data = await response.json();
    const events = [];
    for (const key in data) {
        events.push({
            id : key,
            ...data[key]
        }); 
    }
    return events;
}

export async function getFeaturedEvents(){
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}