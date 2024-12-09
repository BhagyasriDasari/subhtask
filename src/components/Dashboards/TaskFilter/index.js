import React from "react";
import "./index.css";

const TaskFilter = ({ onFilterChange }) => {
    return (
        <select className="task-filter" onChange={(e) => onFilterChange(e.target.value)}>
            <option value="All">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
    );
};

export default TaskFilter;
