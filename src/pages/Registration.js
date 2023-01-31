import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../components/custum-input/CustomInput";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../redux/user/UserAction";
import { useNavigate } from "react-router-dom";

function Registration() {
  const inputFields = [
    {
      label: "email",
      placeholder: "tse@email.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "name",
      placeholder: "name",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "pin",
      placeholder: "1243",
      required: true,
      name: "pin",
      type: "number",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerAction(form)) && navigate("/register");
  };

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2> Register</h2>
        <hr></hr>

        {inputFields.map((item, index) => (
          <CustomInput {...item} onChange={handleOnchange} key={index} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="text-end">
          New here? <Link to="/">Login </Link>
        </div>
      </Form>
    </Layout>
  );
}

export default Registration;
