import React from 'react';
import './User.css'

const User = ({ id, name, email, onDelete }) => {

    const handleDelete = () => [
        onDelete(id)
    ]

    return (

            <div className='list'>
                <span>{name}</span>
                <span>{email}</span>
                <span>
                    <button onClick={handleDelete}>Delete</button>
                </span>

            </div>
       

    );
};

export default User;