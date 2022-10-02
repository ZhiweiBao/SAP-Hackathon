import "./css/TrailCards.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaTree,FaMale } from "react-icons/fa";

export default function TrailCardOfUser({ event, onDelete }) {
  const num = 5;
  const picNum = num % 5;
  const hikePicUri = "trail_" + picNum + ".jpg";
  const cyclePicUri = "cycling_" + picNum + ".jpg";
  return (
    <div className="userList-wrapper">
      <div className="userList-card">
        <div className="userList-card-body">
          <div className="userList-deleteBtn">
            <FaTimes onClick={() => onDelete(event._id)} />
          </div>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/events/${event?._id}`}
          >
            <div className="userList-detail">
              <div className="userList-Img">
                <img
                  src={process.env.PUBLIC_URL + "/images/" + cyclePicUri}
                  alt="pic"
                  className="card-img"
                ></img>
              </div>

              <div className="userList-detailInfo">
                <div className="userList-card-title">
                  <p>
                    <strong>{event?.title}</strong>
                  </p>
                </div>

                <div className="userList-card-description">
                  <span> {event?.type}</span>
                  <FaTree color="green" className="star"></FaTree>
                  <span> {event?.points} </span>

                  <span> • </span>

                  <FaMale color="gray" className="star"></FaMale>
                  <span>{event?.attendees.length}</span>
                </div>

                <div className="userList-card-description">
                  <span>Location: {event?.location}</span>
                </div>

                <div className="card-description">
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
