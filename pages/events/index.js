import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "../../helpers/api-util";
import Head from 'next/head';


 function AllEventsPage(props) {
    const arr=props.allEvents;
    return (
      
        <div style={{textAlign:"center",fontFamily:"cursive"}}>
          <h1>All Events Page</h1>
          <EventSearch/>
          <EventList list={arr}/> 
        </div>
      
    );
  }

  export async function getStaticProps(){
    const all=await getAllEvents();
    return{
      props:{
        allEvents:all
      }
    }
  }
  export default AllEventsPage;