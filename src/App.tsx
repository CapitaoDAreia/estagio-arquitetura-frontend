import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { DefaultRoutes } from './routes';
import GlobalStyles from './styles/global';
import { Header } from './components/Header';

import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Container>
        <DefaultRoutes />
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export default App;
