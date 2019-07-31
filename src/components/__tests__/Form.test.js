import React from 'react'
import {configure, mount} from 'enzyme'
import {Formik} from 'formik'
import wait from 'waait'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import configureMockStore from 'redux-mock-store'

import Form from '../Form'

const f = () => ({}) // no op

const mockStore = configureMockStore()
const store = mockStore({})
configure({adapter: new Adapter()})

describe('<Form />', () => {
  it('renders <Formik /> component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Form onButtonClick={f} onSaveValue={f} question={{}} />
      </Provider>
    )
    expect(wrapper.find(Formik)).toHaveLength(1)
  })

  it('should update an input when it is changed', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Form onButtonClick={f} onSaveValue={f} question={{id: 'foo'}} />
      </Provider>
    )
    wrapper.find('input').simulate('change', {
      // Formik calls e.persist() internally
      persist: f,
      target: {
        name: 'foo',
        value: 'Foo'
      }
    })
    const newValue = wrapper.find('input').props().value
    expect(newValue).toEqual('Foo')
  })

  it('should display error', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <Form onButtonClick={f} onSaveValue={f} question={{id: 'foo'}} />
      </Provider>
    )

    wrapper.find('form').simulate('submit', {
      preventDefault: f
    })
    await wait(0)
    wrapper.update()
    expect(wrapper.find('.Form-errorMessage')).toHaveLength(1)
  })

  it('should submit form when filled input', async () => {
    const wrapper = mount(
      <Provider store={store}>
        <Form onButtonClick={f} onSaveValue={f} question={{id: 'foo'}} />
      </Provider>
    )
    wrapper.find('input').simulate('change', {
      // Formik calls e.persist() internally
      persist: f,
      target: {
        name: 'foo',
        value: 'Foo'
      }
    })
    wrapper.find('form').simulate('submit', {
      preventDefault: f
    })
    await wait(0)
    wrapper.update()
    expect(wrapper.find('.Form-errorMessage')).toHaveLength(0)
  })
})
