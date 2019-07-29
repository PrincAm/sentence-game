import React from 'react'
import {css, cx} from 'emotion'

const buttonClass = cx(
  'Form-button',
  css`
    border: none;
    background: darkgray;
    color: white;
    font-size: 14px;
    border-radius: 3px;
    transition: 400ms;
    width: 100px;
    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
    &:focus {
      transition: none;
    }
  `
)

const handleButtonClick = (onButtonClick) => () => {
  onButtonClick()
}

const Instructions = ({onButtonClick}) => (
  <div>
    <div>Instructions</div>
    <button type="button" onClick={handleButtonClick(onButtonClick)} className={buttonClass}>
      Play!
    </button>
  </div>
)

export default Instructions
