import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ProtectedRoute from "./auth/ProtectedRoute"
import UserProfile from "./pages/UserProfile"
import UserLists from "./pages/UserLists"
import Events from "./pages/Events"
import Challenge from "./pages/Challenge"
import EventDetails from "./pages/EventDetails"

function App() {
  const {isLoading } = useAuth0();
  const location=useLocation();
  const hideFooter = location.pathname.includes("/map") || location.pathname === "/addtrail";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Banner />
      <AppRouter />
      {!hideFooter && <Footer />}
      
    </div>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="events/:eventId" element={<EventDetails />} />

      <Route path="/user/profile" element={<ProtectedRoute Component={UserProfile} />} />
      <Route path="/user/lists" element={<ProtectedRoute Component={UserLists} />} />
      {/* <Route path="/events/search" element={<SearchPage/>}/>
      <Route path="/events/search/:searchCriteria" element={<SearchPage/>}/> */}
      <Route path="*" element={<p>This page isn't available. Sorry about that. </p>} />
    </Routes>
  );
}

export default App;
