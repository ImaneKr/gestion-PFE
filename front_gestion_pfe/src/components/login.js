import React from "react";

const Login = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px'
    };

    const labelStyle = {
        marginTop: '10px'
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '5px'
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#52ADA2',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px'
    };

    const buttonHoverStyle = {
        backgroundColor: '#35988C'
    };

    return (
        <div style={containerStyle}>
            <h1>Log in Form</h1>
            <form style={formStyle}>
                <label htmlFor="email" style={labelStyle}>Email:</label>
                <input type="email" placeholder="exemple@gmail.com" id="email" name="email" required style={inputStyle} />
                <label htmlFor="password" style={labelStyle}>Password:</label>
                <input type="password" placeholder="************" id="password" name="password" required style={inputStyle} />
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Log in
                </button>
            </form>
        </div>
    );
};

export default Login;
