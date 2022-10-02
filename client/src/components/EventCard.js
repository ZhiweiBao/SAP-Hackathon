import Card from "react-bootstrap/Card";
import "./css/TrailCards.css";
import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
    return (
        <>
            <Card border="Trail" style={{ width: "18rem" }}>
                <Card.Header>Event</Card.Header>
                <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text>
                        <Link to={`/events/${event._id}`}>
                            <p>View Event Details</p>
                        </Link>
                    </Card.Text>
                    <div>
                        <p>{event.location}</p>
                    </div>
                </Card.Body>
            </Card>
            <br />
        </>
    );
}
