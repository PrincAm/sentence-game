import React from 'react'
import {Global, css as coreCss} from '@emotion/core'
import {cx, css, keyframes} from 'emotion'

import logo from '../assets/logo.svg'

const globalStyles = coreCss`
  body {
    margin: 0;
    padding: 0;
    min-height: '100vh';
    max-width: '100vw';
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const appClass = cx(
  'App',
  css`
    text-align: center;
  `
)

const headerClass = cx(
  'App-header',
  css`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `
)

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const logoClass = cx(
  'App-logo',
  css`
    animation: ${logoSpin} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  `
)

const linkClass = cx(
  'App-link',
  css`
    color: #61dafb;
  `
)

const App = () => (
  <>
    <Global styles={globalStyles} />
    <div className={appClass}>
      <header className={headerClass}>
        <img src={logo} className={logoClass} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className={linkClass} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  </>
)

export default App
