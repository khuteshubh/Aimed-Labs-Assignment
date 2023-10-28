import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;



const Form = styled.form`
  width: 80%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 992px) {
    width: 40%;
  }
`;


const Input = styled.input`
  width: 91%;
  margin-bottom: 10px;
  padding: 10px;

  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;




const Login = () => {
    return (
      <Container>
        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  };
  
  export default Login;