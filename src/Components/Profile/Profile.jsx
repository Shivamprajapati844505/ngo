import { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Navbar from './../Navbar/Navbar';
import Sidebar from './../Sidebar/Sidebar';

function Profile() {
  const [ngo, setNgo] = useState(null);
  const email = localStorage.getItem('userEmail');  // Get email from localStorage

  useEffect(() => {
    const fetchNgoProfile = async () => {
        const response = await axios.get(`http://localhost:8800/ngo/${email}`);
        setNgo(response.data);
    };

    fetchNgoProfile();
  }, [email]);

  return (
    <>
    <Navbar/>
    <div className="ngo-container">
    <Sidebar/>
      {ngo ? (
        <div className="ngo-card">
          <h2>{ngo.organizationName}</h2>
          <p><strong>Address:</strong> {ngo.address}</p>
          <p><strong>City:</strong> {ngo.city}</p>
          <p><strong>Pincode:</strong> {ngo.pincode}</p>
          <p><strong>Mobile:</strong> {ngo.mobile}</p>
          <p><strong>Email:</strong> {ngo.email}</p>
          <p><strong>Mission:</strong> {ngo.mission}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
    </>
  );
}

export default Profile;
