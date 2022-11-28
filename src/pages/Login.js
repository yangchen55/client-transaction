import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomInput } from '../components/CustomInput';
import Layout from '../components/layout/Layout';

function Login() {
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
      placeholder: "kflj",
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
  return (
    <Layout>
    <Form className='login-page'>
        <h2> Register</h2>
        <hr></hr>
        {inputFields.map((item) =>(
          <CustomInput {...item}/>
        ) )}
      

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div className='text-end'>
        New here? <a href='/register'>register</a>

      
      </div>
    </Form>
    </Layout>
  );
}

export default Login;