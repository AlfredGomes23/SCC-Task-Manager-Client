// Dashboard.js

import { useState, useEffect } from 'react';
import CreateNewTask from '../components/CreateNewTask';

const Dashboard = () => {

    

    return (
        <div>
            <h2>Todo</h2>
            <CreateNewTask/>
        </div>
    );
};

export default Dashboard;
