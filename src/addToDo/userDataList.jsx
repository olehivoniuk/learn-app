// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserDataList = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/users');
//       setUserData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>User Data List</h1>
//       <ul>
//         {userData.map((user) => (
//           <li key={user.id}>
//             Username: {user.username}, Role: {user.role}, Email: {user.email}, password : {user.password}, 
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserDataList;
