import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './UserSignUp.module.css';
import { NavLink } from 'react-router-dom';
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../store/userReducer';
import { app } from '../../firebase/firebase';

const UserSignUp = () => {
const dispatch = useDispatch();
  const auth = getAuth(app);

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Here you can perform signup logic with the form values
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
    } catch (error) {
      console.log('Firebase login error:', error);
      // Handle login error
    }
  };

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    handleFirebaseLogin(provider);
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    handleFirebaseLogin(provider);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <h2>Sign Up</h2>
        <Form
          name="signupForm"
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
              Sign Up
            </Button>
          </Form.Item>
          <div className="signup-link">
            Already have an account? <NavLink to="/login">Log in</NavLink>
          </div>
        </Form>
        <div>
          <Button onClick={handleFacebookLogin}>Sign up with Facebook</Button>
          <Button onClick={handleGoogleLogin}>Sign up with Google</Button>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
