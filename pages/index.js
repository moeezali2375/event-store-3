import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/helpers/api-util";
import NewsletterRegistration from "@/components/input/newsletter-registration";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

 function Home(props) {
  const arr=props.fevents;
  return (
    
      <div style={{textAlign:"center",fontFamily:"cursive"}}>
        <Head>
          <title>Main Page</title>
          <meta name="desc" content="this page refers to featured events"/>
         </Head> 
        <h1>Home Page</h1>
        <NewsletterRegistration/> 
        <EventList list={arr}/>
      </div>
    
  );
}

export async function getStaticProps(){
  const arr=await getFeaturedEvents()
  return {
    props:{
      fevents:arr
    },
    revalidate:1800 //every half hour
  }
}
export default Home;
