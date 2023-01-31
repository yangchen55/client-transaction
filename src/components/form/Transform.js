import React from 'react'
import { useDispatch } from "react-redux"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { addTransAction } from "../../redux/transaction/TransAction"




const initialState = {
  type: "",
  transaction: "",
  amount: 0,
}


const TransForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [transaction, setTransaction] = useState(initialState);



  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setTransaction({
      ...transaction,
      [name]: value,
    });
  };



  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(addTransAction(transaction)) && navigate("/dashboard")
    setTransaction(initialState);



  }
  return (
    <Form className='mb-3 form' onSubmit={handleOnSubmit}>
      <Row className="justify-content-md-center g-2 mt-3">
        <Col md="auto ">
          <Form.Select onChange={handleOnChange} name='type' value={transaction.type} required>
            <option>chooose</option>
            <option value="expenses">expenses</option>
            <option value="income">income</option>
          </Form.Select>
        </Col>
        <Col md="5">
          <Form.Control type="text" value={transaction.transaction}
            name="transaction" placeholder="transaction" onChange={handleOnChange} required />
        </Col>
        <Col md="auto">
          <Form.Control type="number" value={transaction.amount}
            name="amount" placeholder="$500" onChange={handleOnChange} required />
        </Col>
        <Col md="auto">
          <div className="d-grid">
            <Button type="submit">add </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}


export default TransForm