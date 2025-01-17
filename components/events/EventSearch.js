import { useRef } from 'react';
import Button from '../ui/Button';
import styles from './EventSearch.module.css';
import { useRouter } from 'next/router';
export default function EventSearch(props){
    const y=useRef();
    const m=useRef();
    const r=useRouter();
    function submit(event){
        event.preventDefault();
       const selectedYear=y.current.value;
        const selectedMonth=m.current.value;
        r.push('/events/'+selectedYear+"/"+selectedMonth);

    }
    return(
        <form className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label>Year</label>
                    <select id='year' ref={y}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={styles.control}>
                <label>Month</label>
                    <select id='month' ref={m}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>  
                </div>
            </div>
            <Button onClick={submit}>Find Events</Button>
        </form>
    )
}