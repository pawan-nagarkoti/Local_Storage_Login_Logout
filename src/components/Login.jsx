import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Login = () => {
    const navigate = useNavigate();
    const [signInValue, setSignInValue] = useState({
        email: '',
        password: '',
    })
    const [loginInValue, setLoginValue] = useState({
        email: '',
        password: ''
    })
    const handleSubmitClick = (e) => {
        e.preventDefault();
        localStorage.setItem('userdetail', JSON.stringify(signInValue));
    }
    let toast = true;
    const handleClickLogin = (e) => {
        e.preventDefault();
        const getLocalStorageData = localStorage.getItem('userdetail');
        const modifyGetLocalStorageData = JSON.parse(getLocalStorageData);

        if (modifyGetLocalStorageData.email === loginInValue.email && modifyGetLocalStorageData.password === loginInValue.password) {
            navigate('/home');
        } else {
            console.log('Please enter your correct email and password!');
            toast = true;
        }
    }
    const handleSignUpChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignInValue((pre) => {
            return { ...pre, [name]: value }
        });
    }
    const handleSignInChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginValue((pre) => {
            return { ...pre, [name]: value }
        })
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Please create your email and password then you lognin the home page</h1>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column' }}>
                    <h4 style={{ marginBottom: '1rem' }}>Sign UP</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                name='email' value={signInValue.email} onChange={(e) => handleSignUpChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control"
                                name='password' value={signInValue.password} onChange={(e) => handleSignUpChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ display: 'flex', margin: 'auto' }} onClick={handleSubmitClick}>Submit</button>
                    </form>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column' }}>
                    <h4 style={{ marginBottom: '1rem' }}>Sign IN</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp"
                                name='email' value={loginInValue.email} onChange={(e) => handleSignInChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control"
                                name='password' value={loginInValue.password} onChange={(e) => handleSignInChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ display: 'flex', margin: 'auto' }} onClick={handleClickLogin}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login