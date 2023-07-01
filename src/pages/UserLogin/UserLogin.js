import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './UserLogin.module.css'; // Import the CSS module
import { NavLink } from 'react-router-dom';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/userReducer';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

const Login = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Here you can perform login logic with the form values
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleFirebaseLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Firebase user:', result.user);
      const user = result.user;
      // Dispatch the setCurrentUser action to update the user state in the UserReducer
      dispatch(setCurrentUser(user));
      // Handle successful login
      navigate(`/`);
    } catch (error) {
      console.log('Firebase login error:', error);
      // Handle login error
      // Display an error alert using Ant Design's message component
    message.error('Login error. Please try again.');
    }
  };
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    handleFirebaseLogin(provider);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <h2>Login</h2>
        <Form
          name="loginForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please enter your username' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
          <Button onClick={handleGoogleLogin}>Login with Google</Button>
          <div className="signup-link">
          Don't have an account? 
          <NavLink to="/signup" className="navbar-brand">
          <Button type="link">Sign up</Button>
          </NavLink>
        </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
