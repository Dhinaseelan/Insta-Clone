import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [pro, setPro] = useState(null);
  const [followers,setfollowers]=useState([])
  const [Check,setCheck]=useState(0);
  useEffect(() => {
    axios.get('http://localhost:3001/profile')
      .then(response => {
        setPro(response.data); // response.data is an array
      })
      .catch(error => console.error(error));
      axios.get('http://localhost:3001/followers').then(data=>setfollowers(data.data)).catch(error=>console.log(error))
  }, [Check]);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setPro(prev => {
      const updated = [...prev];
      updated[0] = { ...updated[0], [name]: value };
      return updated;
    });
  }

  async function Unfollow(id) {
   await axios.delete(`http://localhost:3001/followers/${id}`).then(alert("unfollowed")).catch(err=>console.log(err))
    setCheck(!Check);
  }

  async function handleUpdate() {
  try {
    await axios.put(`http://localhost:3001/profile/${pro[0].id}`, pro[0]);
    console.log("updated");
  } catch (error) {
    console.error(error);
  }
   
}

  return (
    <div className='m-2'>
      {pro ? (
        <div>
          <img
            src={pro[0].profilePic}
            alt="Profile"
            className="profile rounded-circle"
          />
          <h5>{pro[0].username}</h5>

          <input
            type="text"
            value={pro[0].username}
            onChange={handleOnChange}
            name="username"
            className="form-control my-3"
          />

          <input
            type="text"
            value={pro[0].profilePic}
            onChange={handleOnChange}
            name="profilePic"   // must match JSON key exactly
            className="form-control"
          />

          <button className='btn btn-primary mt-3' onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>Loading Profile...</div>
      )}
      {followers.length>0?(followers.map(follower=><div  className=' d-flex m-2' key={follower.id}>{follower.username}<button className='btn ms-auto btn-primary ' onClick={()=>Unfollow(follower.id)}>unfollow</button></div>)):(<div>Loading Followers</div>)}
    </div>
  );
};

export default Profile;