import React, { useState, useEffect } from "react";
import "./css/home.css";
import Greeting from "../components/Greeting";
import { FaArrowCircleRight } from "react-icons/fa";
import ResponsiveSlider from "../components/TrailCollectionComponents/ResponsiveSlider";
import { fetchAllEvents } from "../api/API";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Home() {
  const { user,isAuthenticated } = useAuth0();
  const [events, setEvents] = useState([]);
  console.log(events);




  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchAllEvents();
      setEvents(data);
    };
    getEvents();
  }, []);

  // useEffect(() => {
  //   async function fetchUserList() {
  //     try {
  //       const response = await fetch(
  //         `/api/users/${user?.sub}`
  //       );
  //       if (!response.ok) {
  //         throw Error("Fetch failed");
  //       }
  //       const data = await response.json();
  //       setUserLists(data.lists);
  //     } catch (err) {
  //       console.log("catch ", err);
  //     }
  //   }
  //   fetchUserList();
  // }, [user]);

  // useEffect(() => {
  //   async function fetchTrails() {
  //     const trailsData = [];
  //     for (const item of userLists) {
  //       try {
  //         const response = await fetch(
  //           `/api/trails/${item}`
  //         );
  //         if (!response.ok) {
  //           throw Error("Fetch failed");
  //         }
  //         const data = await response.json();
  //         trailsData.push(data);
  //       } catch (err) {
  //         console.log("catch ", err);
  //       }
  //     }
  //     setUserTrails(trailsData);
  //   }
  //   fetchTrails();
  // }, [userLists]);

  return (
    <div className="landing-page" id="Home-Page">
      <div id="home">
        <div className="landing-text">
          <Greeting />
        </div>
      </div>

      <main className="main-container">
        <div className="section-container localFavorite">
          <div className="section-header-container">
            <div className="section-header-content">
              <h1>Recent Events</h1>
              <Link className="section-header-link" to="/events">
                <strong>view all</strong>
                <FaArrowCircleRight className="section-header-icon"></FaArrowCircleRight>
              </Link>
            </div>
          </div>

          <ResponsiveSlider list={events}></ResponsiveSlider>
        </div>

        <div className="section-container favoriteHiking">
          <div className="section-header-container">
            <div className="section-header-content">
              <h1>Popular Events</h1>
              <Link className="section-header-link"  to="/events">
                <strong>view all</strong>
                <FaArrowCircleRight className="section-header-icon"></FaArrowCircleRight>
              </Link>
            </div>
          </div>

          {/* <ResponsiveSlider list={hikingTrails}></ResponsiveSlider> */}
        </div>

      </main>
    </div>
  );
}
