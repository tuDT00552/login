import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [user, setUser] = useState({ email: "", password: "" });

    const submitHandle = e => {
        e.preventDefault();
        Login(user);
    }

    return (
        <div id="LoginForm">
            <div className="container">
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Admin Login</h2>
                            <p>Please enter your email and password</p>
                        </div>
                        <form onSubmit={submitHandle} id="Login">
                            <div className="form-group">
                                <input type="text" name="email" className="form-control" id="inputEmail"
                                    placeholder="Email Address" onChange={e => setUser({ ...user, email: e.target.value })} value={user.name} />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" id="inputPassword"
                                    placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} value={user.password} />
                            </div>
                            <div className="forgot">
                                {/* <a href="reset.html">Forgot password?</a> */}
                                {(error != "") ? (<div className="error">{error}</div>) : ""}
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
