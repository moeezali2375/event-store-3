export async function getAllEvents(){
    return fetch('https://aslam-aa561-default-rtdb.firebaseio.com/events.json').then(res=>res.json()).then(data=>{
        const events=[]
        for(const key in data)
        {
            events.push({
                id:key,
                ...data[key]
            })
        }
        return events
    })
}

export async function getFeaturedEvents(){
    const all=await getAllEvents()
    const arr=all.filter(e=>e.isFeatured===true)
    return arr
}

export async function getEventById(id) {
    const all=await getAllEvents()
    return all.find((event) => event.id === id);
  }

  export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const all=await getAllEvents();
  
    let filteredEvents = all.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }