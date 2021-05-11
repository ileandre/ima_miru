import React, { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Layout from "../../components/shared/Layout/Layout";
import "./SignIn.css";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid, please try again",
          username: "",
          password: "",
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
          Sign In
        </Button>
      );
    }
  };

  const { username, password } = form;

  return (
    <Layout user={props.user}>
      <Form className="signIn-form-container" onSubmit={onSignIn}>
        <h2 className="signIn-form-title">Welcome</h2>
        <Form.Group>
          <Form.Label className="form-label">Username</Form.Label>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <div className="signIn-buttons">
          {renderError()}
          <Link to="/">
            <Button id="cancel-button" type="submit">
              Cancel
            </Button>
          </Link>
        </div>
      </Form>
    </Layout>
  );
};

export default SignIn;