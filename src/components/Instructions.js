import React from 'react'
import {css, cx} from 'emotion'

const instructionsClass = cx(
  'Instructions',
  css`
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  `
)

const containerClass = cx(
  'Instructions-container',
  css`
    text-align: center;
    font-size: 23px;
  `
)

const buttonClass = cx(
  'Inctructions-button',
  css`
    font-family: inherit;
    font-size: 18px;
    color: #f5f5f5;
    border: none;
    border-radius: 3px;
    background: rgba(220, 220, 235, 0.5);
    filter: brightness(0.8);
    padding: 7px;
    transition: 400ms;
    width: 100px;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
      filter: brightness(1);
    }
    &:focus {
      transition: none;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(255, 255, 255, 0.2);
      outline: none;
    }
  `
)

const handleButtonClick = (onButtonClick) => () => {
  onButtonClick()
}

const Instructions = ({onButtonClick}) => (
  <div className={instructionsClass}>
    <div className={containerClass}>
      Create your unique sentence by answering a few simple questions: Who? What? When? and Where?
    </div>
    <button type="button" onClick={handleButtonClick(onButtonClick)} className={buttonClass}>
      Play!
    </button>
  </div>
)

export default Instructions
