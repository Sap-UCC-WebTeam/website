import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loginImage from "../../../assets/Login.png"; // Replace with your image path
import SAPLogo from '../../../assets/SAP.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Reset errors
    if (name === 'email') {
      validateEmail(value);
    } else if (name === 'password') {
      validatePassword(value);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    if (!email) {
      setEmailError('Enter email address.');
    } else if(!/\S+@\S+\.\S+/.test(email)){
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
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
    validateEmail(formData.email);
    validatePassword(formData.password);

    if (!emailError && !passwordError) {
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
            }}>Login</h2>
            <p  style={{
              borderBottom: '2px dashed #ccc',
              paddingBottom: '10px',
              color: '#555555',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '20px',
            }}>Login to access your account</p>
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
                  }} htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
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
                  {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
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
                </div><br/>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    
                    <div style={{ marginRight: '10px' }}>
                    <Link to="/forgotpassword" style={{
                      width: '100%',
                      color: '#41C0E8',
                      display: 'block',
                      marginBottom: '8px',
                      textTransform: 'capitalize'
                    }}>Forgot Password</Link>
                    </div>
                  </div>

              <div style={{ borderBottom: '2px dashed #ccc', marginBottom: '20px' }}></div>

              <button type="submit" style={{
                backgroundColor: '#41C0E8',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
              }}>
                <Link to="/welcome" >
                Login
                </Link>
              </button>

              <div style={{ marginBottom: '20px' }}></div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    
                    <div style={{ marginRight: '10px' }}>
                    <a href="#" style={{
                      width: '100%',
                      color: '#555',
                      display: 'block',
                      marginBottom: '8px',
                      textTransform: 'capitalize'
                    }}>Don’t have an account? <b style={{color: '#41C0E8'}}>Sign up</b></a>
                    </div>
              </div>


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

export default Login;
