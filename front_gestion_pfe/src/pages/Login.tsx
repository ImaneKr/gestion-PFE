import React, { CSSProperties } from "react";
import './Login.css';

const Login: React.FC = () => {
    return (
        <div className="container">
            <div className="form-container">
                <h1 className="login-title">Login</h1>
                <form className="login-form">
                    <label htmlFor="email" className="login-label">Email:</label>
                    <input type="email" id="email" name="email" required className="login-input" />
                    
                    <label htmlFor="password" className="login-label">Password:</label>
                    <input type="password" id="password" name="password" required className="login-input" />
                    
                    <button
                        type="submit"
                        className="login-button"
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#44A79B')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#47A89C')}
                    >
                        Log in
                    </button>
                </form>
            </div>
            <div className="image-container">
                <img src="/login.png" alt="Login" className="login-image" />
            </div>
        </div>
    );
};

export default Login;
