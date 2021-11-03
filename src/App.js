import React, { useState } from 'react';
import './App.css';
import Form from './Pages/Form';
import Result from './Pages/Result';
import styled from 'styled-components';

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  return (
    <Wrapper>
      {isTrue ? (
        <Result {...person} />
      ) : (
        <Form
          person={person}
          setPerson={setPerson}
          isTrue={isTrue}
          setIsTrue={setIsTrue}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
`;

export default App;
