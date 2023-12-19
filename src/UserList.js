import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User'; // Assuming User component exists and is imported correctly


function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setlistOfUSer(res.data);
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
 // Rendering the list of users by mapping over the listOfUsers array
  return (
    <div className="UserList">
      {listOfUSer.map((user) => (
        <User key={user.id} id={user.id} data={user} />
      ))}
    </div>
  );
}

export default UserList;