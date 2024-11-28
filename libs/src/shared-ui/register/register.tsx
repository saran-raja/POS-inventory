import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import img from './pos-img1.jpg';

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

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  color: #888;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 4px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 106%;
  padding: 12px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #1c86ee;
  }
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

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    activationCode: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container>
      <GlobalStyle />
      <ContentWrapper>
        <ImageSection />
        <FormSection>
          <Title>Register</Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="activationCode"
              placeholder="Activation Code"
              value={formData.activationCode}
              onChange={handleChange}
              required
            />
            <Button type="submit">Register</Button>
          </form>
          <TextLink>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </TextLink>
        </FormSection>
      </ContentWrapper>
    </Container>
  );
};

export default Register;
