// import React, { useState, useEffect } from "react";
// import { fetchUser } from "../api/API";
// import Avatar from "react-avatar";
// import "./css/Review.css";
// import { Rating } from "@mui/material";
// import { fetchUserByID } from "../api/API";

// export default function Review({ userId }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const getUser = async () => {
//       // const data = await fetchUser(review.user_id);
//       const data = await fetchUserByID(userId);
//       setUser(data);
//     };
//     getUser();
//   }, []);

//   console.log("user is name: ", user.first_name);

//   return (
//     // <div className="review-item">
//     //   <div className="reviewer-profile">
//     //     <Avatar
//     //       size="80"
//     //       className="reviewer-avatar"
//     //       round={true}
//     //       textSizeRatio={1.75}
//     //       name={user?.first_name}
//     //     ></Avatar>
//     //     <div className="reviewer-profile-info">
//     //       <strong>{user?.first_name}</strong>

//     //       {/* <Rating name="read-only" value={user.total_pionts} readOnly /> */}
//     //       <p>{user.first_name}</p>
//     //     </div>
//     //   </div>

//     <div>user.first_name</div>
//     </div >
//   );
// }
