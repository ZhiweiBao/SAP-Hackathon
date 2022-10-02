const serverUrl = process.env.REACT_APP_SERVER_URL

//fetch all users
export async function fetchAllUsers() {
  try {
    const response = await fetch(`${serverUrl}/users`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: user list.\n Error: ${err}`);
  }
}

// fetch user data
export async function fetchUserByID(id) {
  try {
    const response = await fetch(`${serverUrl}/users/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: user information.\n Error: ${err}`);
  }
}

// fetch user data by email
export async function fetchUserByEmail(email) {
  try {
    const response = await fetch(`${serverUrl}/users/email/${email}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: user information.\n Error: ${err}`);
  }
}

// fetch all events
export async function fetchAllEvents() {
  try {
    const response = await fetch(`${serverUrl}/events`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: event list.\n Error: ${err}`);
  }
}

// fetch event data
export async function fetchEventByID(id) {
  try {
    const response = await fetch(`${serverUrl}/events/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: event information.\n Error: ${err}`);
  }
}

// fetch all badges
export async function fetchAllBadges() {
  try {
    const response = await fetch(`${serverUrl}/badges`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: badge list.\n Error: ${err}`);
  }
}

// fetch badge data
export async function fetchBadgeByID(id) {
  try {
    const response = await fetch(`${serverUrl}/badges/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: badge information.\n Error: ${err}`);
  }
}

// fetch all challenges
export async function fetchAllChallenges() {
  try {
    const response = await fetch(`${serverUrl}/challenges`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: challenge list.\n Error: ${err}`);
  }
}

// fetch challenge data
export async function fetchChallengeByID(id) {
  try {
    const response = await fetch(`${serverUrl}/challenges/${id}`);
    return await response.json();
  } catch (err) {
    console.log(`Fetch failed: challenge information.\n Error: ${err}`);
  }
}


