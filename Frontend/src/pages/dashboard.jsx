import React from "react";
import { useNavigate } from "react-router-dom";
import TaskCard from "../components/taskCard";

export default function Dashboard() {

    return (
        <>
            <div className="m-1 btn">Dashboard</div>
            <TaskCard/>
        </>
    );
}