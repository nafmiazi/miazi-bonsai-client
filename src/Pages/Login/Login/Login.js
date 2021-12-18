import React, { useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <div className="container px-4 px-lg-0">
            <div className="row">
                <div className="col-lg-5 p-lg-5 mx-auto login mt-5">
                    <h4 className="text-center text-white mb-5 mt-4 mt-lg-0">LOGIN</h4>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder="Email"
                                className="border-0 input"
                            />
                            <label htmlFor="floatingInputCustom">Your Email</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="floatingPasswordCustom"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                placeholder="Password"
                                className="border-0 input"
                            />
                            <label htmlFor="floatingPasswordCustom">Your Password</label>
                        </Form.Floating>
                        <button type="submit" className="btn btn-primary w-100 mt-3 py-3 input">LOGIN</button>
                        <Link to="/register">
                            <button className="btn btn-warning w-100 mt-3 py-3 input">NEW USER? PLEASE REGISTER</button>
                        </Link>
                    </form>}

                    {!isLoading && <>
                        <h4 className="text-center text-white mt-3 or">OR</h4>
                        <button onClick={handleGoogleSignIn} className="btn d-flex justify-content-center align-items-center w-100 mt-3"><img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="25px"/> <span className="google ms-2">LOGIN WITH GOOGLE</span> </button>
                    </>}

                    {isLoading && <Spinner className="spinner d-grid m-auto" animation="border" variant="danger" />}
                    {user?.email && <Alert variant="success" className="mt-3">Logged in Successfully</Alert>}
                    {authError && <Alert variant="danger" className="mt-3">{authError}</Alert>}
                </div>
            </div>
        </div>
    );
};

export default Login;