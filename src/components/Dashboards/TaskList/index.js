import React from "react";
import "./index.css";

const TaskList = ({ tasks }) => {
    return (
        <div className="task-list">
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <span>{task.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
