import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from '../components/custum-input/CustomInput';
import Layout from '../components/layout/Layout';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {postUser} from '../utils/axiosHelper'
import { Alert }  from 'react-bootstrap';

function Registration() {
  const inputFields =[

    {
      label:'email',
      placeholder: "@email.com",
      required: true,
      name:'email',
      type:'email'
    },
    {
      label:'name',
      placeholder: "name",
      required: true,
      name:'name',
      type:'text'
    },
    {
      label:'pin',
      placeholder: "1243",
      required: true,
      name:'pin',
      type:'number'
    }
  ]
  const [form, setForm] = useState({});

  const [response, setResponse] = useState({});

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setForm( {...form,
     [name]: value,
    });
    console.log(form)
  };


  const handleOnSubmit = async(e) => {
    e.preventDefault();
    
    const {data} = await postUser(form);
    // console.log(result);
    setResponse(data)

 
  };



  
  return (

    <Layout>
    <Form className='login-page'  onSubmit={handleOnSubmit}>
        <h2> Register</h2>
        <hr></hr>
        
        {response.message && 
        (<Alert variant={response.status === "success"? "success": "danger"}>
        {response.message}
        </Alert>
        )}
        {inputFields.map((item) =>(
          <CustomInput {...item} onChange={handleOnchange} />
        ) )}
      

      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      <div className='text-end'>
        New here? <Link to ='/'>Login </Link>
      </div>
    </Form>
    </Layout>
  );
}

export default Registration;