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

const Sentence = ({onButtonClick}) => (
  <div>
    <div>Final sentence placeholder</div>
    <button type="button" onClick={handleButtonClick(onButtonClick)} className={buttonClass}>
      Play Again!
    </button>
  </div>
)

export default Sentence
