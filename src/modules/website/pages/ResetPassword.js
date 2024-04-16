import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginImage from "../../../assets/Login.png"; // Replace with your image path
import SAPLogo from '../../../assets/SAP.png';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Reset errors
    if (name === 'password') {
      validatePassword(value);
    }
  };


  const validatePassword = (password) => {
    // Basic password validation
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password before submitting the form
    validatePassword(formData.password);

    if (!passwordError) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div style={{
      width: '50%',
      marginLeft: '25%',
      marginRight: '25%',
      marginTop: '2%',
      background: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        padding: '30px',
      }}>
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <div className="flex items-center">
          <img src={SAPLogo} alt="Logo" className="h-12 mr-8" />
        </div>
        <div className="h-20"></div>
          <div>
            <h2 style={{
              paddingBottom: '10px',
              color: '#000000',
              fontSize: '30px',
              fontWeight: '500',
              marginBottom: '0px',
            }}>Set a password</h2>
            <p  style={{
              borderBottom: '2px dashed #ccc',
              paddingBottom: '10px',
              color: '#555555',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '20px',
            }}>Your previous password has been reseted. Please set a new password for your account.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
                <div>
                  <label style={{
                    width: '45%',
                    color: '#555',
                    display: 'block',
                    marginBottom: '8px',
                    textTransform: 'capitalize',
                  }} htmlFor="password">
                    Password:
                  </label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        color: '#555',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#000',
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>
                <div>
                  <label style={{
                    width: '45%',
                    color: '#555',
                    display: 'block',
                    marginBottom: '8px',
                    textTransform: 'capitalize',
                  }} htmlFor="password">
                    Password:
                  </label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        color: '#555',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#000',
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                </div>
                <br/>
              </div>
          


              <button type="submit" style={{
                backgroundColor: '#41C0E8',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
              }}>
                Reset
              </button>

              <div style={{ marginBottom: '20px' }}></div>

             


            </div>
          </div>
        </form>
        <img
          src={loginImage}
          alt="Login"
            style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
