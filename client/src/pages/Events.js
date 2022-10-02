import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import { fetchAllEvents, fetchEventsFilterByTitle } from "../api/API";
import EventCard from "../components/EventCard";

export default function Events() {
  const { searchCriteria } = useParams();
  console.log("Title", searchCriteria);
  const [events, setEvents] = useState([]);
  const [searchEvents,setSearchEvents] = useState([]);

  useEffect(() => {
    if (searchCriteria != null) {
      fetchEventsFilterByTitle(searchCriteria).then((data) => {
        console.log("Title", searchCriteria);
        console.log(data);
        setSearchEvents(data);
      });
    } else {
      fetchAllEvents().then((data) => {
        setEvents(data);
        console.log("all event: ", data);
      });
    }

  }, []);

  return (
    <div
      id="Search-Page"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <h1>Browse SAP Green Events</h1>
        <Search></Search>
      </div>
      
      {searchEvents.length === 0 &&  <>{events.map((item, index) => (
        <EventCard key={index} event={item}></EventCard>
      ))}</> }

      {searchEvents.map((item, index) => (
        <EventCard key={index} event={item}></EventCard>
      ))}

      {events.length === 0 && <p>No result.</p>}
    </div>
  );
}