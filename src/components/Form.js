import React from 'react'
import PropTypes from 'prop-types'
import {Formik} from 'formik'
import * as Yup from 'yup'
import {css, cx} from 'emotion'

const formClass = cx(
  'Form-form',
  css`
    display: flex;
    flex-direction: column;
    & label {
      font-weight: 600;
      margin-top: 20px;
      margin-bottom: 4px;
    }
  `
)

const inputStyle = css`
  color: #000000;
  font-size: 14px;
  padding: 7px;
  display: block;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 40%;
  &:focus {
    border-color: #19a29c;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(25, 162, 156, 0.1);
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
    border-color: #d52129;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgb(213, 33, 41, 0.1);
  `
)

const errorMessageClass = cx(
  'Form-errorMessage',
  css`
    color: #d52129;
    margin-top: 4px;
  `
)

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

const handleSubmitForm = (onButtonClick) => () => {
  onButtonClick()
}

const Form = ({onButtonClick, question}) => {
  const validationSchema = Yup.object().shape({
    [question.id]: Yup.string().required('Required')
  })

  return (
    <Formik
      onSubmit={handleSubmitForm(onButtonClick)}
      validationSchema={validationSchema}
      initialValues={{
        [question.id]: ''
      }}>
      {({values, touched, errors, handleChange, handleSubmit}) => (
        <form className={formClass} onSubmit={handleSubmit}>
          <input
            id={question.id}
            value={values[question.id]}
            onChange={handleChange}
            className={errors[question.id] && touched[question.id] ? inputErrorClass : inputClass}
          />
          {errors[question.id] && touched[question.id] && (
            <div className={errorMessageClass}>{errors[question.id]}</div>
          )}
          <button type="submit" className={buttonClass}>
            Next Question
          </button>
        </form>
      )}
    </Formik>
  )
}

export default Form

Form.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired
}
