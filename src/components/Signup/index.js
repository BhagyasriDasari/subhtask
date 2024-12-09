import React from "react";
import "./index.css";

const Signup = () => {
    return (
        <div className="signup">
            <h1>Signup</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
