import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    organizationName: "",
    address: "",
    city: "",
    pincode: "",
    mobile: "",
    email: "",
    mission: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(formData.pincode)) {
      alert("Invalid pincode! It should be a 6-digit number.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Invalid mobile number! It should contain 10 digits.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Invalid email format!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8800/ngo", formData);

      if (response.status === 201) {
        alert("NGO registered successfully!");
        localStorage.setItem("userEmail", formData.email);  // Store email in localStorage
        navigate("/profile"); // Redirect to profile
      } else {
        alert("Error registering NGO");
      }
    } catch (error) {
      console.error("There was an error registering the NGO!", error);
      alert("Error registering NGO");
    }
  };

  return (
    <div className="form-container">
    <form className="ngo-form" onSubmit={handleSubmit}>
      <h2>NGO Registration</h2>
      <p>Please fill in the information below.</p>
      <label>
        NGO Name:
        <input type="text" name="organizationName" onChange={handleChange} placeholder="Organization Name" />
      </label>
      <label>
        Address:
        <input type="text" name="address" onChange={handleChange} placeholder="Address" />
        <div>
          <input type="text" name="city" onChange={handleChange} placeholder="City" />
          <input type="text" name="pincode" onChange={handleChange} placeholder="Pincode" />
        </div>
      </label>
      <label>
        Contact Number:
        <input type="text" name="mobile" onChange={handleChange} placeholder="Mobile" />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
      </label>
      <label>
        NGO Mission:
        <textarea name="mission" onChange={handleChange} placeholder="Write the mission here..." />
      </label>
      <button type="submit">Submit</button>
    </form>
        
    </div>
  );
}

export default Form;
