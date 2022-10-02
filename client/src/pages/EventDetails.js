import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { user, isAuthenticated, useAuth0 } from "@auth0/auth0-react";
import "./css/TrailDetails.css";
import { useEffect, useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaDirections,
  FaCalendarAlt,
  FaIcons,
  FaTree,
  FaRegClock,
} from "react-icons/fa";
import ReviewPanel from "../components/ReviewPanel";
import AddReview from "../components/AddReview";
import { fetchEventByID, fetchUserByID, fetchUserByEmail } from "../api/API";
import moment from "moment";

export default function EventDetails() {
  let navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { eventId } = useParams();

  const [event, setEvent] = useState({});
  const [attendees, setAttendees] = useState([]);


  useEffect(() => {
    fetchEventByID(eventId).then((data) => {
      setEvent(data);
      setAttendees(data.attendees);
      console.log("current event data is: ", data);
    });
  }, []);

  const userId = fetchUserByEmail(user.email).then((data) => {
    console.log("current user raw data is:  ", data);
    console.log("current user id is: ", data[0]._id);
    return data[0]._id;
  });





  // useEffect(() => {
  //   async function fetchTrails() {
  //     try {
  //       const response = await fetch(`/api/trails/${trailId}`);
  //       if (!response.ok) {
  //         navigate("/error");
  //         throw Error("Fetch failed");
  //       }
  //       const data = await response.json();
  //       setTrails(data);
  //       setInstruction(data.instruction);
  //       setLng(data.start.center[0]);
  //       setLat(data.start.center[1]);
  //       setLike(data.like);
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   }
  //   fetchTrails();
  // }, [trailId]);



  async function addToList() {
    console.log("trying to add to user's event");
    if (!isAuthenticated) {
      loginWithRedirect({ appState: { returnTo: window.location.pathname } })
      return;
    }

    // const newEventId = `${event._id}`;
    // try {
    //   const updatedMyLists = [];
    //   updatedMyLists.push(newEventId);
    //   userLists.map((item) => updatedMyLists.push(item));
    //   const response = await fetch(`/api/users/update/lists/${user.sub}`, {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({
    //       lists: updatedMyLists,
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw Error("Post request failed!");
    //   }
    //   setUserLists(updatedMyLists);
    // } catch (err) {
    //   console.log("err", err);
    // }

    // try {
    //   const newlike = like + 1;
    //   const response = await fetch(`/api/trails/like/${trailId}`, {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({
    //       like: newlike,
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw Error("PATCH request failed!");
    //   }
    //   setLike(newlike);
    // } catch (err) {
    //   console.log("err", err);
    // }
  }

  // useEffect(() => {
  //   async function fetchNearByTrail() {
  //     try {
  //       const response = await fetch(
  //         `/api/search/trails?lng=${Lng}&lat=${Lat}`
  //       );
  //       if (!response.ok) {
  //         throw Error("Fetch failed");
  //       }
  //       const data = await response.json();
  //       setNearBy(data);
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   }
  //   fetchNearByTrail();
  // }, [Lng]);

  async function removeFromList() {
    console.log("trying to withdraw from event");
    // const deletedId = trailId;

    // try {
    //   const updatedLists = userLists.filter((item) => item !== deletedId);
    //   const response = await fetch(`/api/users/update/lists/${user.sub}`, {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({
    //       lists: updatedLists,
    //     }),
    //   });

    //   setUserLists(updatedLists);
    // } catch (err) {
    //   console.log(err);
    // }

    // try {
    //   const newlike = like - 1;
    //   if (newlike < 0) return;
    //   const response = await fetch(`/api/trails/unlike/${trailId}`, {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify({
    //       like: newlike,
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw Error("Post request failed!");
    //   }
    //   setLike(newlike);
    // } catch (err) {
    //   console.log("err", err);
    // }
  }

  return (
    <div className="detail-wrapper">
      <div id="detail-landing"></div>

      <main className="main-container" id="TrailDetrails-Page">
        <div className="detail-navbar">
          <a href="#detail-type">EVENT DETAIL</a>
          <a href="#detail-instruction">CONTEXT</a>
          <a href="#detail-map">LOCATION</a>
          <a href="#reviews">PARTICIPANTS</a>
        </div>

        <div className="detail-type" id="detail-type">
          <h1>{event.title}</h1>

          <br />
          <div className="detail-type-wrapper">

            <div className="detail-type-item">
              <FaIcons size="2rem" />
              <p>Event Type</p>
              <h2>{event.type}</h2>
              {/* <h2>{event.tyle}</h2> */}
            </div>

            <div className="detail-type-item">
              <FaCalendarAlt size="2rem" />
              <p>Event Date</p>
              {/* <h2>{event.date}</h2> */}
              <h2>{moment(event.date).format('MMM Do YYYY')}</h2>

            </div>

            <div className="detail-type-item">
              <FaTree size="2rem" />
              <p>Green Points</p>
              <h2>{event.points} points</h2>
            </div>
          </div>
        </div>

        <hr />

        <div className="detail-instruction" id="detail-instruction">
          <h1>Context</h1>
          <div className="detail-instruction-place">
            <p>
              <strong>{event.context}</strong>
            </p>
          </div>


          <div className="addlist">
            <p>Join my SAP colleague!</p>
            {attendees.includes(userId) ? (
              <button
                onClick={removeFromList}
                className="addToListBtn like-button"
              >
                <FaStar color="#f5d24c"></FaStar>
                Withdraw
              </button>
            ) : (
              <button onClick={addToList} className="like-button">
                <FaRegStar color="#f5d24c"></FaRegStar>
                Sign Up
              </button>
            )}
          </div>
        </div>

        <hr />
        <div className="detail-map" id="detail-map">
          <h1>Location</h1>
          <div className="detail-map-container">
            {event.location}</div>

        </div>

        <hr />

        <div className="reviews" id="reviews">
          <h1>Participants</h1>
          <div className="participants">
            People who are going to this event
          </div>
          {/* <div className="review-add">
            <AddReview trail_id={trailId}></AddReview>
          </div>

          <div className="review-list">
            <ReviewPanel trail_id={trailId}></ReviewPanel>
          </div> */}
        </div>

        <hr />

      </main>
    </div>
  );
}
