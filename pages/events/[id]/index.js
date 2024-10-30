import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getAllEvents, getEventById, getFeaturedEvents } from "../../../helpers/api-util";
import Comments from "@/components/input/comments";


function DetailedEventPage(props) {

    const event=props.selectedEvent;
    if(!event)
    {
      return <p>Event doesn't exists</p>
    }
    return (
      
        <div style={{textAlign:"center", fontFamily:"cursive"}}>
          <h1>Event Detail Page</h1> 
          <EventSummary title={event.title}/>
          <EventLogistics t={event.title} d={event.date} ad={event.location} i={event.image}/>
          <EventContent><p>{event.description}</p></EventContent>
          <Comments eventId={event.id}/>
        </div>
      
    );
  }


  export async function getStaticProps(context){
    const eid=context.params.id;
    const event= await getEventById(eid);
    return {
      props:{
        selectedEvent:event
      },
      revalidate:30
    }
  }

  export async function getStaticPaths(){
    const mostlyVisitedPages=await getFeaturedEvents();
    const theirpaths=mostlyVisitedPages.map(obj=>({params:{id:obj.id}}));
    return {
      paths:theirpaths,
      fallback:'blocking'
    }
  }
  export default DetailedEventPage;