import React from 'react';
import './Admin.css';

/*
create authorized and public routes & import into this file
on authorized route mount, send key/other secret to server to fetch data
*/

const Admin = () => {
    return (
        <div className="page admin">
            /admin
            <br/>
            Welcome, it's a cold and lonely place
        </div>
    );
}

export default Admin;