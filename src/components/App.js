import React, {useState} from 'react'
import {Global, css as coreCss} from '@emotion/core'
import {cx, css} from 'emotion'
import {useSpring} from 'react-spring'

import Header from './Header'
import Card from './Card'
import Form from './Form'
import Sentence from './Sentence'
import Instructions from './Instructions'

import {steps, FIRST_STEP, FINAL_STEP} from '../config'

const FINAL_STEP_BOOST = 5

const globalStyles = coreCss`
  html,
  body,
  #root {
    font-family: 'Amatic SC', cursive;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background: #f0f0f0;
  }
`

const cardsClass = cx(
  'App-cards',
  css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 5vh;
  `
)

const isOdd = (number) => number % 2 === 1

const App = () => {
  const [stepNumber, setStepNumber] = useState(0)
  const {transform, opacity} = useSpring({
    opacity: stepNumber % 2, // 1 or 0
    transform: `perspective(600px) rotateX(${
      stepNumber === FINAL_STEP ? stepNumber * 180 * FINAL_STEP_BOOST : stepNumber * 180
    }deg)`,
    config: {mass: 5, tension: stepNumber === FINAL_STEP ? 400 : 500, friction: stepNumber === FINAL_STEP ? 180 : 80}
  })

  const handleStepChange = () => {
    setStepNumber(stepNumber + 1)
  }

  const handleStepToStart = () => {
    setStepNumber(FIRST_STEP)
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <div className={cardsClass}>
        {/* Even steps */}
        <Card
          title={!isOdd(stepNumber) ? steps[stepNumber].title : null}
          animationStyle={{opacity: opacity.interpolate((o) => 1 - o), transform, zIndex: !isOdd(stepNumber) ? 1 : 0}}
          gradient={steps[stepNumber].gradient}>
          {!isOdd(stepNumber) &&
            (stepNumber === FIRST_STEP ? (
              <Instructions onButtonClick={handleStepChange} />
            ) : (
              <Form onButtonClick={handleStepChange} question={steps[stepNumber]} />
            ))}
        </Card>
        {/* Odd steps */}
        <Card
          title={isOdd(stepNumber) ? steps[stepNumber].title : null}
          animationStyle={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
            zIndex: isOdd(stepNumber) ? 1 : 0
          }}
          gradient={steps[stepNumber].gradient}>
          {isOdd(stepNumber) &&
            (stepNumber === FINAL_STEP ? (
              <Sentence onButtonClick={handleStepToStart} />
            ) : (
              <Form onButtonClick={handleStepChange} question={steps[stepNumber]} />
            ))}
        </Card>
      </div>
    </>
  )
}

export default App
