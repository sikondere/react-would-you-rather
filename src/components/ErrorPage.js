import React from 'react';
import { Link } from 'react-router-dom';

/**
     * @description  renders the 404 pAGE NOT FOUND ERROR
     * @returns an html element
     */
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