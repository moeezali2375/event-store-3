import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "../../../helpers/api-util";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState , useEffect} from "react";

 function FilteredEventsPage(props) {

  //client side rendering code
  const [events,setEventsState]=useState();
  const r=useRouter();
  const paramData=r.query.slug;
  const fetcher=(url)=>fetch(url).then(res=>res.json())
  const {data,error}=useSWR("https://aslam-aa561-default-rtdb.firebaseio.com/events.json",fetcher)
  useEffect(()=>{
    if(data)
    {
      const events=[]
        for(const key in data)
        {
            events.push({
                id:key,
                ...data[key]
            })
        }
        setEventsState(events)
    }
  },[data])
  
  if(!events)
  {
    return <p>Loading...</p>
  }
  const year=Number(paramData[0]);
  const month=Number(paramData[1]);

  const filteredEvents=events.filter((event) => {
  const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  if(isNaN(year)|| isNaN(month) || error)
      {
        return <p>Invalid year or month</p>
      }

  // if(props.hasError===true)
  // {
  //   return <p>Invalid year or month</p>
  // }

  // if(!props.filteredEvents||props.filteredEvents.length===0)
  //   {
  //     return <p>Event not Found</p>
  //   }
  if(!filteredEvents||filteredEvents.length===0)
  {
    return <p>Event not Found</p>
  }
    return (
      
        <div style={{textAlign:"center",fontFamily:"cursive"}}>
          <h1>Filtered Events Page</h1> 
          <EventList list={filteredEvents}/>
        </div>
      
    );
  }

  // export async function getServerSideProps(context){
  //   const ym=context.params.slug
  //   const year=Number(ym[0]);
  //   const month=Number(ym[1]);
  // if(isNaN(year)|| isNaN(month))
  // {
  //   return{
  //     //notFound: true   go to 404 page
  //     props:{            //but we have proper messaging for this type of error
  //       hasError:true
  //     }
  //   }
  // }
  // const arr= await getFilteredEvents({year:year,month:month})

  //   return{
  //     props:{
  //         filteredEvents: arr
  //     }
  //   }
  // }
  export default FilteredEventsPage;