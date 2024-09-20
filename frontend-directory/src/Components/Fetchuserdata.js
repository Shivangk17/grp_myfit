import axios from 'axios';
import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        var username = localStorage.getItem('username')
        const response = await axios.post('http://localhost:8000/fetch_user_details/' , {username});
        console.log(response.data)
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    
    fetchUsers();
  }, []);

  return (
    <div style={{color:"white"}}>
        <br/><br/><br/><br/><br/><br/><br/><br/>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <h1><li key={user.id}>{user.username} - {user.height} cm</li></h1>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
