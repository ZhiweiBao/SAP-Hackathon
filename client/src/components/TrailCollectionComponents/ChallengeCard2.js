import React from "react";
import { FaBicycle } from "react-icons/fa";
import { FaHiking } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiAerlingus } from "react-icons/si";
import "../css/Search.css";

export default function ChallengeCard2({ challenge }) {
    const month = challenge.title.split(" ")[0];

    return (
        <>
            <div className="search-wrapper">
                <div className="search-card">
                    <div className="search-card-body">
                        {/* <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/trails/${trail?._id}`}
          > */}
                        <div className="search-detail">
                            <div className="search-Img">
                                {challenge ? (
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/" + month + "challenge.png"}
                                        alt="Challenge Badge"
                                        className="card-img"
                                    ></img>
                                ) : (
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/" + "Decemberchallenge.png"}
                                        alt="Challenge Badge"
                                        className="card-img"
                                    ></img>
                                )}
                            </div>

                            <div className="search-detailInfo">
                                <div className="search-card-title">
                                    <strong> {challenge?.title}</strong>
                                    {/* <strong>{ }</strong> */}
                                </div>

                                <div className="search-card-description">


                                    {/* <FaStar color="#f5d24c" className="star"></FaStar> */}
                                    <SiAerlingus color="green" className="star"></SiAerlingus>
                                    <span> </span>
                                    <span>Challenge rule: {challenge?.rule}</span>
                                    {/* <span> {trail?.like} </span> */}
                                </div>

                                <div className="search-card-description">


                                    <SiAerlingus color="green" className="star"></SiAerlingus>
                                    <span> </span>
                                    <span>
                                        Required event type: {challenge?.required_event_type}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </>
    );
}
