import React, { useEffect, useState } from 'react'
import './App.css';
import User from './components/User/User'
import AddUser from './components/Adduser/AddUser';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const onAdd = async (name, email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json;  charset=UTF-8",
      }
    })
      .then(res => {
        if (res.status !== 201) {
          return
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(res => {
        if (res.status !== 200) {
          return
        }
        else {
          setUsers(users.filter((user) => {
            return user.id !== id;
          }));
        }
      })
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Todo User</h1>

      <AddUser onAdd={onAdd} />
      <div>
        {
          users.map(user => <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}
          ></User>)
        }
      </div>
    </div>
  );
}

export default App;
