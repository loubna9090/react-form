import React from 'react';
import styled from 'styled-components';

const Result = ({ lastName, firstName, phone, email }) => {
  return (
    <Wrapper>
      <h1>
        {firstName} {lastName}
      </h1>
      <h3>email: {email}</h3>
      <h3> phone : {phone}</h3>
      <a href='/' className='btn'>
        Back to Form
      </a>
    </Wrapper>
  );
};
const Wrapper = styled.div`
background: #fff;
max-width: 450px;
margin: 2rem auto;
padding: 1rem 2rem;
border-radius: 0.25rem;

  h1 {
    padding: 1rem 0;
  }
  h3 {
    color: hsl(209, 61%, 16%);
    padding: 1rem 0;
  }
  a {
    display: inline-block;
    background: hsl(125deg 67% 44%);
    color: #fff;
    border-color: transparent;
    margin-top: 1rem;
    letter-spacing: 0.1rem;
    padding: 0.15rem 0.25rem;
    text-transform: capitalize;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;
export default Result;
