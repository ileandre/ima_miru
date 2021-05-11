import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { signUp, signIn } from "../../services/users";
import { Form, Button } from "react-bootstrap";
import Layout from "../../components/shared/Layout/Layout";
import "./SignUp.css";

const SignUp = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <Button
          id="submit-button"
          type="submit"
          className={toggleForm}
          variant="primary"
        >
          {form.errorMsg}
        </Button>
      );
    } else {
      return (
        <Button id="submit-button" type="submit">
          Sign Up
        </Button>
      );
    }
  };

  const { email, username, password, passwordConfirmation } = form;

  return (
    <Layout user={props.user}>
      <Form className="signUp-form-container" onSubmit={onSignUp}>
        <h2 className="signUp-form-title">Create your account below!</h2>
        <Form.Group>
          <Form.Label className="form-label">Create Username</Form.Label>
          <Form.Control
            required
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Enter Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Create Password</Form.Label>
          <Form.Control
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="form-label">Confirm password</Form.Label>
          <Form.Control
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </Form.Group>
        <div className="signUp-buttons">
          {renderError()}
          <Link to="/">
            <Button id="cancel-button" type="submit">
              Cancel
            </Button>
          </Link>
        </div>
        <Link id="text-muted" to="/sign-in">
          <Form.Text>Already have an account? Click here to sign in.</Form.Text>
        </Link>
      </Form>
    </Layout>
  );
};

export default SignUp;
