import React from 'react'
import PropTypes from 'prop-types'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {css, cx} from 'emotion'
import {connect} from 'react-redux'

import {saveQuestion} from '../redux/questions'

const formClass = cx(
  'Form-form',
  css`
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  `
)

const inputStyle = css`
  font-family: inherit;
  color: #f5f5f5;
  font-size: 24px;
  padding: 7px;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: rgba(220, 220, 235, 0.5);
  width: 400px;
  &:focus {
    border-color: #fff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(255, 255, 255, 0.1);
    outline: none;
  }
`

const inputClass = cx(
  'Form-input',
  css`
    ${inputStyle};
  `
)

const inputErrorClass = cx(
  'Form-input-error',
  css`
    ${inputStyle};
    border-color: #ff6666;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgb(213, 33, 41, 0.1);
  `
)

const errorMessageClass = cx(
  'Form-errorMessage',
  css`
    color: #ff6666;
    margin-top: 4px;
  `
)

const buttonClass = cx(
  'Form-button',
  css`
    font-family: inherit;
    border: none;
    color: #f5f5f5;
    background: rgba(220, 220, 235, 0.5);
    filter: brightness(0.8);
    padding: 7px;
    font-size: 18px;
    border-radius: 3px;
    transition: 400ms;
    width: 180px;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
      filter: brightness(1);
    }
    &:focus {
      transition: none;
    }
  `
)

const mapDispatchToProps = (dispatch) => ({
  onSaveValue: (value) => {
    dispatch(saveQuestion(value))
  }
})

const Form = ({onButtonClick, onSaveValue, question}) => {
  const handleSubmitForm = (value) => {
    onSaveValue(value)
    onButtonClick()
  }

  const validationSchema = Yup.object().shape({
    [question.id]: Yup.string()
      .max(40, 'Oh, answer is too long!')
      .required('Please, answer the question!')
  })

  return (
    <Formik
      onSubmit={handleSubmitForm}
      validationSchema={validationSchema}
      initialValues={{
        [question.id]: ''
      }}>
      {({values, touched, errors, handleChange, handleSubmit}) => (
        <form className={formClass} onSubmit={handleSubmit}>
          <div>
            <input
              id={question.id}
              value={values[question.id]}
              onChange={handleChange}
              className={errors[question.id] && touched[question.id] ? inputErrorClass : inputClass}
            />
            {errors[question.id] && touched[question.id] && (
              <div className={errorMessageClass}>{errors[question.id]}</div>
            )}
          </div>
          <button type="submit" className={buttonClass}>
            Next Question
          </button>
        </form>
      )}
    </Formik>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Form)

Form.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onSaveValue: PropTypes.func.isRequired,
  question: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired
}
