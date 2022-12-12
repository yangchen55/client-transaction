import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from '../components/custum-input/CustomInput';
import Layout from '../components/layout/Layout';
import {Link,   useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {loginUser} from '../utils/axiosHelper'
import { Alert }  from 'react-bootstrap';
    

export const  Login = () =>  {
  const navigate = useNavigate();
 
  const [form, setForm] = useState({
    email : 'a@gmail.com',
    pin: 1234
  });

  const [response, setResponse] = useState({});
  const inputFields =[

    {
      label:'email',
      placeholder: "@email.com",
      required: true,
      name:'email',
      type:'email',
      value: form.email
    },
   
    {
      label:'pin',
      placeholder: "1243",
      required: true,
      name:'pin',
      type:'number',
      min: 1000,
      max:9999,
      value:form.pin
    }
  ]

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setForm( {...form,
     [name]: value,
    });
    console.log(form)
  };


  const handleOnSubmit = async(e) => {
    e.preventDefault();
    
  const {data} = await loginUser(form);
  setResponse(data)

  if(data.status === "success"){ 
    sessionStorage.setItem("user", JSON.stringify(data.user));
    navigate("/dashboard");
 }


    // console.log(result);
    

 
  };

  return (
    <Layout>
    <Form className='login-page' onSubmit={handleOnSubmit}>
        <h2> Welcome back 👋 login</h2>
        <hr></hr>
        {response.message && 
        (<Alert variant={response.status === "success"? "success": "danger"}>
        {response.message}
        </Alert>
        )}
        {inputFields.map((item) =>(
          <CustomInput {...item} onChange={handleOnchange}/>
        ))}
     

      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div className='text-end'>
        New here? <Link to ='/register'>Register </Link>
      </div>
    </Form>
    </Layout>
  );
};

export default Login;