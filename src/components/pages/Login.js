import React from 'react';

const Login = () => {
	return (
		<div className="loginContainer">
			<form action="">
				<div className="inputDiv">
					<label>Email: </label>
					<input type="text" />
				</div>
				<div className="inputDiv">
					<label>Password: </label>
					<input type="text" />
				</div>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
