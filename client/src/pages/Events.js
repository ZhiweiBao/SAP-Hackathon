import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search"
import {fetchAllEvents, fetchEventsFilterByTitle} from "../api/API";
import EventCard from "../components/EventCard";
import data from "bootstrap/js/src/dom/data";


export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // TODO populate data into page
    fetchEventsFilterByTitle("SAP").then((data)=>console.log(data));

    fetchAllEvents().then((data) => {
      setEvents(data);
      console.log("data: ", data);
    });
  }, [])

  return (
    <div id="Search-Page" className="d-flex flex-column justify-content-center align-items-center">

      <div>
        <h1>Search the SAP Green Events</h1>
        <Search></Search>
      </div>

      {events.map((item) => (
        // EventCard
        // <div>item</div>
        <EventCard event={item}></EventCard>
      ))}
      {events.length === 0 && <p>No result.</p>}
    </div>
  );
}