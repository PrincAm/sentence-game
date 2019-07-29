import React, {useState} from 'react'
import {Global, css as coreCss} from '@emotion/core'
import {cx, css} from 'emotion'
import {useSpring} from 'react-spring'

import Header from './Header'
import Card from './Card'
import Form from './Form'
import Sentence from './Sentence'
import Instructions from './Instructions'

const FIRST_STEP = 0
const FINAL_STEP = 5

const globalStyles = coreCss`
html,
body,
#root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    justify-content: center;
  `
)

const stepsConfig = {
  0: {
    id: 'instructions',
    title: 'Sentence Game'
  },
  1: {
    id: 'who',
    title: 'Who?'
  },
  2: {
    id: 'what',
    title: 'What?'
  },
  3: {
    id: 'when',
    title: 'When?'
  },
  4: {
    id: 'where',
    title: 'Where?'
  },
  5: {
    id: 'sentence',
    title: 'Your Sentence!'
  }
}

const isOdd = (number) => number % 2 === 1

const App = () => {
  const [step, setStep] = useState(0)
  const {transform, opacity} = useSpring({
    opacity: step % 2, // 1 or 0
    transform: `perspective(600px) rotateX(${step === FINAL_STEP ? step * 180 * 5 : step * 180}deg)`,
    config: {mass: 5, tension: step === FINAL_STEP ? 300 : 500, friction: step === FINAL_STEP ? 200 : 80}
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
          title={!isOdd(step) ? stepsConfig[step].title : null}
          style={{opacity: opacity.interpolate((o) => 1 - o), transform, zIndex: !isOdd(step) ? 1 : 0}}>
          {!isOdd(step) &&
            (step === FIRST_STEP ? (
              <Instructions onButtonClick={handleStepChange} />
            ) : (
              <Form onButtonClick={handleStepChange} question={stepsConfig[step]} />
            ))}
        </Card>
        <Card
          title={isOdd(step) ? stepsConfig[step].title : null}
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
            zIndex: isOdd(step) ? 1 : 0
          }}>
          {isOdd(step) &&
            (step === FINAL_STEP ? (
              <Sentence onButtonClick={handleStepToStart} />
            ) : (
              <Form onButtonClick={handleStepChange} question={stepsConfig[step]} />
            ))}
        </Card>
      </div>
    </>
  )
}

export default App
