import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CustomInput = ({label, ...rest}) => {
  return (
    <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
        
      </Form.Group>
    </div>
  )
}
