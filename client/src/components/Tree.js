import React, { useState, useEffect } from "react";
import { fetchUserByID } from "../api/API";
import Avatar from "react-avatar";
import "./css/Review.css";
import { Rating } from "@mui/material";
import { FaTree } from "react-icons/fa";

export default function Tree({ total_points }) {

    console.log("total_points: ", total_points);
    const tree_num = Math.floor(total_points ? total_points / 10 : 0);
    const tree_array = tree_num == 0 ? Array(tree_num).fill(0) : Array(tree_num).fill(1);

    const [points, setPoints] = useState(0);
    useEffect(() => {
        setPoints(total_points);
    }, [total_points]);

    return <div className="tree-container">
        {tree_array.map((item, index) => (

            <FaTree color="green" key={index} />

        ))}
    </div>

}