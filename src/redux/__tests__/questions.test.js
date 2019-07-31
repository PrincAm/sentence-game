import configureMockStore from 'redux-mock-store'

import reducer, {saveQuestion, SAVE_QUESTION, sentenceSelector} from '../questions'

const middlewares = []
const mockStore = configureMockStore(middlewares)

describe('questions', () => {
  describe('#saveQuestion() action creator', () => {
    it('should dispatch action', () => {
      const store = mockStore({})
      store.dispatch(saveQuestion())
      const actions = store.getActions()
      expect(actions).toEqual([{type: SAVE_QUESTION}])
    })
  })

  describe('#reducer()', () => {
    it('should save new question', () => {
      const question = {foo: 'Foo'}
      const action = {
        type: SAVE_QUESTION,
        question
      }
      const state = reducer({}, action)
      expect(state).toEqual(question)
    })

    it('should save another question', () => {
      const action = {
        type: SAVE_QUESTION,
        question: {bar: 'Baz'}
      }
      const state = reducer({foo: 'Foo'}, action)
      expect(state).toEqual({foo: 'Foo', bar: 'Baz'})
    })

    it('should return initial state', () => {
      const state = reducer(undefined, {})
      expect(state).toEqual({})
    })
  })

  describe('#sentenceSelector()', () => {
    it('should select sentence', () => {
      const state = {questions: {who: 'foo', what: 'bar', when: 'baz', where: 'qux'}}
      expect(sentenceSelector(state)).toEqual('foo bar qux baz.')
    })
  })
})
