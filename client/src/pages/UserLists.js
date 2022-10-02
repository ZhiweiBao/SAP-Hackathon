import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TrailCardOfUser from "../components/TrailCardOfUser";
import "./css/UserLists.css";
import {fetchUserByEmail, fetchEventsByUserID} from "../api/API";
import login from "./Login";
import SearchResult from "../components/TrailCollectionComponents/SearchResult";

function UserLists() {
  const { user } = useAuth0();
  const [userLists, setUserLists] = useState([]);
  const [events, setEvents] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // TODO populate data into page
    fetchUserByEmail(user.email).then((data) => {
      console.log(data[0])
      setUserProfile(data[0]);
      fetchEventsByUserID(data[0]._id).then((data) => {
        setEvents(data)
        console.log(data)
      })
    })
  }, [user]);


  // async function deleteClicked(deletedId) {
  //   const deletedTrail = events.filter((item) => item._id === deletedId);
  //   if (!deletedTrail) return;
  //   try {
  //     const updatedLists = userLists.filter((item) => item !== deletedId);
  //     const response = await fetch(
  //       `/api/users/update/lists/${user.sub}`,
  //       {
  //         method: "POST",
  //         headers: { "Content-type": "application/json" },
  //         body: JSON.stringify({
  //           lists: updatedLists,
  //         }),
  //       }
  //     );
  //     setUserLists(updatedLists);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   try {
  //     const newlike = deletedTrail[0].like - 1;
  //     if (newlike < 0 || !newlike) return;
  //     const response = await fetch(`/api/trails/unlike/${deletedId}`, {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify({
  //         like: newlike,
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw Error("Post request failed!");
  //     }
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // }

  return (
    <div id="UserList-Page">
      <div className="align-items-center profile-header">
        <h1>My Events</h1>
        <div className="list-cards col-md text-center text-md-left">
          <div className="cards">
            {events.map((event) => (
              <SearchResult key={event?._id} event={event}/>
            ))}
            {events.length === 0 && <p>No event added.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLists;
