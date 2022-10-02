import React from "react";
import { FaTree, FaMale } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";

export default function ChallengeCard({ challenge }) {
    const month = challenge.title.split(" ")[0];
    return (
        <>
            <div className="challenge-card" style={{ width: "50%", margin: "auto", padding: "10px" }}>
                <div className="card-body">
                    <img
                        src={process.env.PUBLIC_URL + "/images/" + month + "challenge.png"}
                        alt="October Challenge Badge"
                        className="card-img"
                    ></img>
                </div>
            </div>

            <div className="card-title">
                <p>
                    <strong>{challenge?.title}</strong>
                </p>
            </div>

            <div className="card-description" style={{ width: "50%", margin: "auto", padding: "10px" }}>
                <FaTree color="green" className="star"></FaTree>
                <span>  {challenge?.title.split(" ")[0]} Rule</span>



                <span> • </span>

                <FaMale color="gray" className="star"></FaMale>
                <span>{challenge?.rule}</span>


            </div>

            <div className="card-description" style={{ width: "50%", margin: "auto", padding: "10px" }}>
                <span> Required event type: {challenge?.required_event_type}</span>
            </div>


        </>



    );
}
