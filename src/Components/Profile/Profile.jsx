import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';

function Profile() {
  const [ngo, setNgo] = useState(null);
  const email = localStorage.getItem('userEmail');  // Retrieve the email from localStorage
  // Replace this with actual user's email

  useEffect(() => {
    const fetchNgoProfile = async () => {
      try {
        // Assuming you have the user's email in state or props
        const email = 'user@example.com';  // Replace with dynamic email
        const response = await axios.get(`http://localhost:8800/ngo/${email}`);
        setNgoProfile(response.data);  // Assuming you have state for the profile data
      } catch (error) {
        console.error('Error fetching NGO:', error);
      }
    };
    

    fetchNgoProfile();
  }, [email]);

  return (
    <div>
      <h2>NGO Profile</h2>
      {ngo ? (
        <div className="ngo-card">
          <h3>{ngo.organizationName}</h3>
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
  );
}

export default Profile;
