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
  const [step, setStep] = useState(0)
  const {transform, opacity} = useSpring({
    opacity: step % 2, // 1 or 0
    transform: `perspective(600px) rotateX(${step === FINAL_STEP ? step * 180 * FINAL_STEP_BOOST : step * 180}deg)`,
    config: {mass: 5, tension: step === FINAL_STEP ? 400 : 500, friction: step === FINAL_STEP ? 180 : 80}
  })

  const handleStepChange = () => {
    setStep(step + 1)
  }

  const handleStepToStart = () => {
    setStep(FIRST_STEP)
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <div className={cardsClass}>
        <Card
          title={!isOdd(step) ? steps[step].title : null}
          style={{opacity: opacity.interpolate((o) => 1 - o), transform, zIndex: !isOdd(step) ? 1 : 0}}
          gradient={steps[step].gradient}>
          {!isOdd(step) &&
            (step === FIRST_STEP ? (
              <Instructions onButtonClick={handleStepChange} />
            ) : (
              <Form onButtonClick={handleStepChange} question={steps[step]} />
            ))}
        </Card>
        <Card
          title={isOdd(step) ? steps[step].title : null}
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
            zIndex: isOdd(step) ? 1 : 0
          }}
          gradient={steps[step].gradient}>
          {isOdd(step) &&
            (step === FINAL_STEP ? (
              <Sentence onButtonClick={handleStepToStart} />
            ) : (
              <Form onButtonClick={handleStepChange} question={steps[step]} />
            ))}
        </Card>
      </div>
    </>
  )
}

export default App
