import React from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
    return (
        <div>
            <Link to="/admin">Назад</Link>
            Users
        </div>
    );
};

export default UsersPage;