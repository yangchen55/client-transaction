import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";
import { CustomInput } from "../components/custum-input/CustomInput";
import Layout from "../components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/user/UserAction";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "a@gmail.com",
    pin: 1234,
  });

  const inputFields = [
    {
      label: "email",
      placeholder: "@email.com",
      required: true,
      name: "email",
      type: "email",
      value: form.email,
    },

    {
      label: "pin",
      placeholder: "1243",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
      value: form.pin,
    },
  ];
  const { isLoading, isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    isLoggedIn && navigate("/dashboard");
  }, [isLoggedIn, navigate]);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginAction(form));
  };

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2> Welcome back 👋 login</h2>
        <hr></hr>

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleOnchange} />
        ))}

        <Button variant="primary" type="submit">
          Login
          <span>{isLoading && <Spinner animation="border" />}</span>
        </Button>
        <div className="text-end">
          New here? <Link to="/register">Register </Link>
        </div>
      </Form>
    </Layout>
  );
};

export default Login;
