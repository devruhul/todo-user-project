import React from 'react';

const AddUser = ({ onAdd }) => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault(); // for not reloading
        onAdd(e.target.name.value, e.target.email.value) // passing parameter
        // clear the input from
        e.target.name.value = "";
        e.target.email.value = "";
      

    }
    return (
        <div className='list'>
            <form onSubmit={handleOnSubmit}>
                <h3>Add new user by input name and email and delete user</h3>
                <input name="name" placeholder='Enter Your Name' />
                <input name="email" placeholder='Enter Your Email' />
                <button onSubmit={handleOnSubmit} className='add-user'> Add User</button>
            </form>
        </div>
    );
};

export default AddUser;