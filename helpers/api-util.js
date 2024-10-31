import events from "@/data/events";
import axios from "axios";
export async function getAllEvents() {
  try {
    const res = await axios.get("http://localhost:3000/api/events");
    return res.data.events;
  } catch (error) {
    console.log(error);
  }
}

export async function getFeaturedEvents() {
  const all = await getAllEvents();
  console.log(all);
  const arr = all.filter((e) => e.isFeatured === true);
  return arr;
}

export async function getEventById(id) {
  const all = await getAllEvents();
  return all.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const all = await getAllEvents();

  let filteredEvents = all.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
