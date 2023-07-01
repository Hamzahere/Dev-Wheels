import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './UserLogin.module.css'; // Import the CSS module
import { NavLink } from 'react-router-dom';
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    // Here you can perform login logic with the form values
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
