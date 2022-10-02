import React from "react";
import { FaTree, FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/Search.css";

export default function SearchResult({ event }) {
  const num = 5;
  const picNum = num % 5;
  const hikePicUri = "trail_" + picNum + ".jpg";
  const cyclePicUri = "cycling_" + picNum + ".jpg";
  return (
    <div className="search-wrapper">
      <div className="search-card">
        <div className="search-card-body">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/events/${event?._id}`}
          >
            <div className="search-detail">
              <div className="search-Img">
                  <img
                    src={process.env.PUBLIC_URL + "/images/" + cyclePicUri}
                    alt="pic"
                    className="card-img"
                  ></img>
              </div>

              <div className="search-detailInfo">
                <div className="search-card-title">
                <p>
                    <strong>{event?.title}</strong>
                  </p>
                </div>

                <div className="search-card-description">
                <span> {event?.type}</span>
                  <FaTree color="green" className="star"></FaTree>
                  <span> {event?.points} </span>

                  <span> • </span>

                  <FaMale color="gray" className="star"></FaMale>
                  <span>{event?.attendees.length}</span>
                </div>

                <div className="search-card-description">
                <span>Location: {event?.location}</span>
                  <span> • </span>
                  <span>Date: {event?.date.substring(5, 10)}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
