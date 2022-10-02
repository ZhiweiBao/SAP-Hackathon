import React from "react";
import "../css/TrailCollection.css";
import { FaTree, FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PopularHikingTrail({ event }) {
  const num = event?.attendees.length;
  const picNum = num % 5;
  const hikePicUri = "trail_" + picNum + ".jpg";
  const cyclePicUri = "cycling_" + picNum + ".jpg";
  return (
    <div className="card landingpage-card">
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/events/${event?._id}`}
      >
        <div className="card-body">
          {event?.mode === "cycling" ? (
            <img
              src={process.env.PUBLIC_URL + "/images/" + cyclePicUri}
              alt="pic"
              className="card-img"
            ></img>
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/images/" + cyclePicUri}
              alt="pic"
              className="card-img"
            ></img>
          )}

          <div className="card-title">
            <p>
              <strong>{event?.title}</strong>
            </p>
          </div>

          <div className="card-description">
          <span> {event?.type}</span>
            <FaTree color="green" className="star"></FaTree>
            <span> {event?.points} </span>
            
            <span> • </span>
            
            <FaMale color="gray" className="star"></FaMale>
            <span>{event?.attendees.length}</span>

            
          </div>

          <div className="card-description">
            <span>Location: {event?.location}</span>
          </div>

          <div className="card-description">
            <span>Date: {event?.date.substring(5,10)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
