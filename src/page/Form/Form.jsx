import React, { useState } from 'react';
import { set, ref } from 'firebase/database';
import { database } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import './form.scss';


const FormComponent = () => {
  const navigate = useNavigate();
  const token = uuidv4();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    // Updated validation: Check if fullName and email are not empty
    return formData.fullName.trim() !== '' && formData.email.trim() !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the form data is valid before submission
    if (isFormValid()) {
      console.log(formData);
      set(ref(database, 'users/' + token), formData);
      console.log('Form submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
      });

      // Redirect to the Submit page
      navigate('/submit');
    } else {
      console.log('Invalid form data. Please fill in all fields.');
    }
  };

  return (
    <div className="form">
      <div className="formbox">
        <div className="form-container">
          <div className="heading">Join our waitlist</div>
          <form onSubmit={handleSubmit}>
            <div className="label">
              <span className="name">Full Name:</span>
              <input
                type="text"
                name="fullName"
                className="input"
                value={formData.fullName}
                onChange={handleInputChange}
                
              />
            </div>
            <div className="label">
              <span className="name">Email:</span>
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleInputChange}
                
              />
            </div>
            <div className="label">
              <button type="submit" className="formFieldButton" disabled={!isFormValid()}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
