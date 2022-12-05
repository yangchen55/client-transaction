import React from  'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Dropdown, Drop, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout/Layout';
import { useState } from 'react';


 const Dashboard = () => {
    const [transaction, setTransaction] = useState({});


        const handleOnChange = (e) => {
            const { name, value } = e.target;
            setTransaction( {...transaction,
             [name]: value,
            });
               
            
          };

    
   
        const handleOnSubmit = (e) => {
            e.preventDefault();
            console.log(transaction)
        //   const {data} = await loginUser(form);
        // const {data} = setTransaction(transaction);
          
        
          


    }
  return <Layout>

<Form className='mb-3 form ' type="submit"  onSubmit={handleOnSubmit}>
<Row className="justify-content-md-center g-2 mt-3">
<Col md="auto ">
<Form.Group >     
        <Form.Select onChange={handleOnChange} name='type'>
          <option value="expenses">EEExpenses</option>
          <option value="income">Income</option>
        </Form.Select>
      </Form.Group>
     </Col>
     <Col md="auto">
     <Form.Control  type="text"  name="transaction" placeholder="transasaciton" onChange={handleOnChange} />
     </Col>
     <Col md="auto">
     <Form.Control type="number" name="amount" placeholder="500" onChange={handleOnChange} />
     </Col>      
<Col md="auto">
      <Button variant="primary" type="submit">add </Button>
      </Col>
      </Row>
    </Form>


  
    <div className='table'>form here</div>








  </Layout>
}

export default Dashboard;
