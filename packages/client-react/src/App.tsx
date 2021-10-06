import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styled, { keyframes } from 'styled-components'

import './App.css';

const AppStyle = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const AppLogoFloat = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoFloat} infinite 3s ease-in-out;
  }
`;

const AppLink = styled.a`
  color: rgb(112, 76, 182);
`;

function App() {
  return (
    <AppStyle>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <AppLink
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </AppLink>
          <span>, </span>
          <AppLink
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </AppLink>
          <span>, </span>
          <AppLink
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </AppLink>
          ,<span> and </span>
          <AppLink
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </AppLink>
        </span>
      </AppHeader>
    </AppStyle>
  );
}

export default App;
