export const WHO = 'who'
export const WHAT = 'what'
export const WHEN = 'when'
export const WHERE = 'where'
const INSTRUCTIONS = 'instructions'
const SENTENCE = 'sentence'

export const steps = {
  0: {
    id: INSTRUCTIONS,
    title: "Let's build a sentence!",
    gradient: 'linear-gradient(to right, #1D2671, #C33764)'
  },
  1: {
    id: WHO,
    title: 'Who?',
    gradient: 'linear-gradient(to right, #2657eb, #de6161)'
  },
  2: {
    id: WHAT,
    title: 'What?',
    gradient: 'linear-gradient(to right, #3a6073, #3a7bd5)'
  },
  3: {
    id: WHEN,
    title: 'When?',
    gradient: 'linear-gradient(to right, #F8CDDA, #1D2B64)'
  },
  4: {
    id: WHERE,
    title: 'Where?',
    gradient: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)'
  },
  5: {
    id: SENTENCE,
    title: 'Your Sentence!',
    gradient: 'linear-gradient(to right, #8e44ad, #c0392b)'
  }
}

export const FIRST_STEP = 0
export const FINAL_STEP = Object.keys(steps).length - 1
