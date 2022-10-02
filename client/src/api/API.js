//fetch user data
export async function fetchUserByID(id) {
  try {
    const response = await fetch(
      `/users/${id}`);
    if (!response.ok) {
      throw Error("Fetch failed: user infomation");
    }
    const data = await response.json();
    return data;
  }catch (err) {
    console.log("err", err);
  }
}

//fetch event data
export async function fetchEventByID(id) {
  try {
    const response = await fetch(
      `/events/${id}`);
    if (!response.ok) {
      throw Error("Fetch failed: event");
    }
    const data = await response.json();
    return data;
  }catch (err) {
    console.log("err", err);
  }
}

export async function fetchAllEvents() {
  try {
    const response = await fetch("/events");

    if (!response.ok) {
      throw Error("Fetch failed: all events");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
}

// export async function fetchTrailsByMode(mode) {
//   try {
//     const response = await fetch(`/api/trails/search/mode/${mode}`);

//     if (!response.ok) {
//       throw Error("Fetch failed");
//     }
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log("err", err);
//   }
// }

// // export async function fetchReviewsbyTrail(id) {
// //   try {
// //     const response = await fetch(`/api/reviews/review?trail_id=${id}`);

// //     if (!response.ok) {
// //       throw Error("Fetch failed");
// //     }
// //     const data = await response.json();
// //     return data;
// //   } catch (err) {
// //     console.log("err", err);
// //   }
// // }

// // export async function fetchReviewsbyUser(id) {
// //   try {
// //     const response = await fetch(`/api/reviews/review?user_id=${id}`)
// //     if (!response.ok) {
// //       throw Error("Fetch failed");
// //     }
// //     const data = await response.json();
// //     return data;
// //   } catch (err) {
// //     console.log("err", err);
// //   }
// // }




