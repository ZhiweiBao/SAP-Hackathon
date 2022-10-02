const serverUrl = process.env.REACT_APP_SERVER_URL

// fetch all users
export async function fetchAllUsers() {
  try {
    const response = await fetch(`${serverUrl}/users`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: user list.\nError: ${err}`);
  }
}

// fetch all users sort by total points
export async function fetchAllUsersSortByTotalPoints() {
  try {
    const response = await fetch(`${serverUrl}/users/sortByTotalPoints`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: user list sort by total points.\nError: ${err}`);
  }
}

// fetch user data
export async function fetchUserByID(id) {
  try {
    const response = await fetch(`${serverUrl}/users/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: user information.\nError: ${err}`);
  }
}

// fetch user data by email
export async function fetchUserByEmail(email) {
  try {
    const response = await fetch(`${serverUrl}/users/email/${email}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: user information.\nError: ${err}`);
  }
}

// add event to user
export async function updateUserAddEvent(user_id, event_id) {
  try {
    const response = await fetch(`${serverUrl}/users/${user_id}/addEvent/${event_id}`, {
      method: 'PUT'
    });
    return await response.json();
  } catch (err) {
    console.log(`Update failed: add event to user.\nError: ${err}`);
  }
}

// remove event from user
export async function updateUserRemoveEvent(user_id, event_id) {
  try {
    const response = await fetch(`${serverUrl}/users/${user_id}/removeEvent/${event_id}`, {
      method: 'PUT'
    });
    return await response.json();
  } catch (err) {
    console.log(`Update failed: remove event from user.\nError: ${err}`);
  }
}

// fetch all events
export async function fetchAllEvents() {
  try {
    const response = await fetch(`${serverUrl}/events`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: event list.\nError: ${err}`);
  }
}

// fetch all events sort by number of attendees
export async function fetchAllEventsSortByPopularity() {
  try {
    const response = await fetch(`${serverUrl}/events/popular`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: event list.\nError: ${err}`);
  }
}

// fetch all events filter by title
export async function fetchEventsFilterByTitle(title) {
  try {
    const response = await fetch(`${serverUrl}/events/title/${title}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: event list filter by title.\nError: ${err}`);
  }
}

// fetch event data
export async function fetchEventByID(id) {
  try {
    const response = await fetch(`${serverUrl}/events/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: event information.\nError: ${err}`);
  }
}

// add attendee to event
export async function updateEventAddAttendee(eventId, userId) {
  try {
    const response = await fetch(`${serverUrl}/events/${eventId}/addAttendee/${userId}`, {
      method: 'PUT'
    });
    console.log(`${serverUrl}/events/${eventId}/addAttendee/${userId}`);
    return await response.json();
  } catch (err) {
    console.log(`Update failed: add event attendees.\nError: ${err}`);
  }
}

// remove attendee from event
export async function updateEventRemoveAttendee(eventId, userId) {
  try {
    const response = await fetch(`${serverUrl}/events/${eventId}/removeAttendee/${userId}`, {
      method: 'PUT'
    });
    return await response.json();
  } catch (err) {
    console.log(`Update failed: remove event attendees.\nError: ${err}`);
  }
}

// fetch all badges
export async function fetchAllBadges() {
  try {
    const response = await fetch(`${serverUrl}/badges`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: badge list.\nError: ${err}`);
  }
}

// fetch badge data
export async function fetchBadgeByID(id) {
  try {
    const response = await fetch(`${serverUrl}/badges/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: badge information.\nError: ${err}`);
  }
}

// fetch all challenges
export async function fetchAllChallenges() {
  try {
    const response = await fetch(`${serverUrl}/challenges`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: challenge list.\nError: ${err}`);
  }
}

// fetch the latest challenge
export async function fetchLatestChallenge() {
  try {
    const response = await fetch(`${serverUrl}/challenges/latest`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: the latest challenge.\nError: ${err}`);
  }
}

// fetch challenge data
export async function fetchChallengeByID(id) {
  try {
    const response = await fetch(`${serverUrl}/challenges/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: challenge information.\nError: ${err}`);
  }
}


