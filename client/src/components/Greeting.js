import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/Greeting.css";
import { FaCalendarAlt} from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Search from "./Search"
import { Link } from "react-router-dom";



export default function Greeting() {
  const { user, isAuthenticated } = useAuth0();
  const [userName, setuserName] = useState(null);
  console.log("Login", isAuthenticated);

  // useEffect(() => {
  //   const getUser = async () => {
  //     if (isAuthenticated) {
  //       const data = await fetchUser(user?.sub);
  //       setuserName(data.avatar_name);

  //     }
  //   };
  //   getUser();
  // }, []);

  function getDate() {
    let greeting = "";
    const today = new Date();
    let time = today.getHours();
    if (time >= 4 && time <= 11) {
      greeting = "Good Morning";
    } else if (time > 11 && time <= 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }
    return greeting;
  }

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <h1>Live Green!</h1>
        </div>
      ) : (
        // <h1>{getDate()}, {userName}!</h1>
        <div className="greeting-wrapper">
          <div className="greeting-item-1">
            <h2>Find What's Green</h2>
            <Search></Search>
          </div>

          <div className="greeting-item-1">         
              <FaCalendarAlt size={'20%'}/>
              <h2>October Challenges</h2>
            <Link to='/challenges' style={{textDecoration: 'none'}}>
              <p>See Details</p>
            </Link>
          </div>


        </div>
        
      )}
    </div>
  );
}
