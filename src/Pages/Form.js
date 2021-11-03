import React from 'react';
import styled from 'styled-components';

const Form = ({ person, setPerson, isTrue, setIsTrue }) => {
  const handleSubmit = () => {
    console.log(123);
    if (person.firstName && person.lastName && person.email) {
      setIsTrue(true);
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setPerson({ ...person, [name]: value });
  };
  const clearPerson = () => {
    setPerson({ firstName: '', lastName: '', email: '', phone: '' });
  };
  return (
    <Wrapper>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            required
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='lastName'>Last Name : </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            required
            value={person.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='phone'>Phone : </label>
          <input
            type='tel'
            pattern='[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}'
            id='phone'
            name='phone'
            value={person.phone}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>
          Submit
        </button>
        <button type='button' className='btn' onClick={clearPerson}>
          Clear
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  form {
    background: #fff;
    max-width: 450px;
    margin: 2rem auto;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    div {
      margin: 0.5rem 0;
      display: grid;
      grid-template-columns: 100px 1fr;
      align-items: center;
      input {
        background: #ccc;
        border-color: transparent;
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
      }
    }
    button {
      display: inline-block;
      background: steelblue;
      color: #fff;
      border-color: transparent;
      margin: 1rem;
      letter-spacing: 0.1rem;
      padding: 0.15rem 0.25rem;
      text-transform: capitalize;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  }
`;

export default Form;
