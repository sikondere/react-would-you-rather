import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage(props) {
    return (
        <div>
            <h1>
                404 Page Not Found
            </h1>
            <Link to='/'>Click to LogIn</Link>
        </div>
    );
}