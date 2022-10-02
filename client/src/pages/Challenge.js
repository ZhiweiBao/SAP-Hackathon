import React from "react";
import { useEffect, useState } from "react";
import { fetchAllChallenges, fetchLatestChallenge } from "../api/API";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeCard2 from "../components/TrailCollectionComponents/ChallengeCard2";

export default function Challenge() {

  const [challenges, setChallenges] = useState([]);
  const [latestChallenge, setLatestChallenge] = useState({});

  useEffect(() => {
    const getChallenges = async () => {
      const data = await fetchAllChallenges();
      setChallenges(data);
    };
    getChallenges();
  }, []);

  useEffect(() => {
    const getLatestChallenge = async () => {
      const data = await fetchLatestChallenge();
      setLatestChallenge(data);
    };
    getLatestChallenge();
  }, []);


  return (

    <div>

      <h1 style={{ width: "50%", margin: "auto", padding: "10px" }}>Challenges</h1>

      {
        challenges.map((item, index) => (
          <ChallengeCard2 key={index} challenge={item}></ChallengeCard2>
        ))
      }
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />


    </div>
  );
}