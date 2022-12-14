import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { postTrans } from '../../utils/axiosHelper';
import {toast} from "react-toastify";




const initialState ={
  type:"",
  transaction : "",
  amount: 0, 
}


const TransForm = ({getTrans}) => {
    const [transaction, setTransaction] = useState(initialState);


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setTransaction( {
          ...transaction,
         [name]: value,
        });        
      };
   


    const handleOnSubmit = async(e) => {
        e.preventDefault();
        console.log(transaction)
   
    const {status, message} = await postTrans(transaction);
    console.log(status, message);
    toast[status](message);
    setTransaction(initialState);
    getTrans()
    
      
    }
  return (
    <Form className='mb-3 form'   onSubmit={handleOnSubmit}>
<Row className="justify-content-md-center g-2 mt-3">
<Col md="auto ">
        <Form.Select onChange={handleOnChange} name='type' value={transaction.type} required>
          <option>chooose</option>
          <option value="expenses">expenses</option>
          <option value="income">income</option>
        </Form.Select>    
     </Col>
     <Col md="5">
     <Form.Control  type="text" value={transaction.transaction}
      name="transaction" placeholder="transaction" onChange={handleOnChange} required />
     </Col>
     <Col md="auto">
     <Form.Control type="number" value={transaction.amount}
      name="amount" placeholder="$500" onChange={handleOnChange} required/>
     </Col>      
     <Col md="auto">
      <div className="d-grid">
      <Button  type="submit">add </Button>
      </div>
      </Col>
      </Row>
    </Form>
  )
}


export default TransForm