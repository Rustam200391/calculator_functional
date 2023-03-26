/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Form, Field } from 'react-final-form'


const onSubmit = async values => {
  
  window.alert(JSON.stringify(values, 0, 2))
}

export const Forms = (style,
    getNumByScreen,) => (
  
   
    <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: 'larry', employed: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <input
                id="screen"
                className={style ? "display" : "display-dark"}
                onChange={(event) => getNumByScreen(event)}>
            </input>
        </form>
      )}
    />
  
)

