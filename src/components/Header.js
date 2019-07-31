import React from 'react'
import {cx, css} from 'emotion'

const headerClass = cx(
  'Header',
  css`
    text-align: center;
    padding-top: 10vh;
    font-size: 80px;
    font-weight: 700;
  `
)

const Header = () => <div className={headerClass}>Sentence game</div>

export default Header
