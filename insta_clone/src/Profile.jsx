import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [pro, setPro] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
      .then(response => {
        setPro(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
   <div className='m-2'>
    {pro ? (
  <div>
    {console.log(pro)}
    <img src={pro[0].profilePic} className="profile rounded-circle" />
    <h5>{pro[0].username}</h5>
  </div>
) : (
  <div>Loading Profile</div>
)}
   </div>
  );
};

export default Profile;