import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registerUser, isLoading, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 p-lg-5 mx-auto bg-light shadow mt-5">
                    <h4 className="text-center mb-5">REGISTER</h4>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                placeholder="Email"
                                className="border-0 border-bottom border-dark rounded-0"
                            />
                            <label htmlFor="floatingInputCustom">Your Name</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Email"
                                className="border-0 border-bottom border-dark rounded-0"
                            />
                            <label htmlFor="floatingInputCustom">Your Email</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                placeholder="Password"
                                className="border-0 border-bottom border-dark rounded-0"
                            />
                            <label htmlFor="floatingPasswordCustom">Your Password</label>
                        </Form.Floating>

                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                placeholder="Password"
                                className="border-0 border-bottom border-dark rounded-0"
                            />
                            <label htmlFor="floatingPasswordCustom">Retype Your Password</label>
                        </Form.Floating>
                        <button type="submit" className="btn btn-primary w-100 mt-3">REGISTER</button>
                        <Link to="/login">
                            <button className="btn btn-warning w-100 mt-3">ALREADY REGISTERED? PLEASE LOGIN</button>
                        </Link>
                    </form>}
                    {isLoading && <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />}
                    {user?.email && <Alert variant="success" className="mt-3">User Created Successfully</Alert>}
                    {authError && <Alert variant="danger" className="mt-3">{authError}</Alert>}
                </div>
            </div>
        </div>
    );
};

export default Register;