import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Form, Button } from 'antd';
import img from './pos-img1.jpg';
import { Link } from 'react-router-dom';
import { Input } from '@pos-inventory/libs';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow: hidden;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
  padding: 0;
  margin: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: linear-gradient(45deg, #abafff 50%, #0c0c0c 50%);
    background-size: 4px 4px;
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 900px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 30px;
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const FormSection = styled.div`
  flex: 1;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const TextLink = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;

  a {
    color: #1e90ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Login = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('Login Data:', values);
  };

  return (
    <Container>
      <GlobalStyle />
      <ContentWrapper>
        <ImageSection />
        <FormSection>
          <Title>Login</Title>
          <Form form={form} onFinish={handleFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <TextLink>
            Don't have an account? <Link to="/register">Register here</Link>
          </TextLink>
        </FormSection>
      </ContentWrapper>
    </Container>
  );
};

export default Login;
