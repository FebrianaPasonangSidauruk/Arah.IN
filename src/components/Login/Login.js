import React from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import './Login.css';
import { useState } from "react";
import loginPic from '../Pic/arahinLogo.png';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://arahin1.herokuapp.com/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data.token);
			localStorage.setItem("id", res.data.id);
			window.location = "/beranda";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<>
			{localStorage.getItem("token") !== null ? (
				<Navigate to={"/beranda"} />
			) : (
				<div className='login-container'>
					<div className='login_form_container'>
						<div className="leftSide-login">
							<form className='form_container' onSubmit={handleSubmit}>
								<h1>Selamat Datang</h1>
								<input
									type="email"
									placeholder="Email"
									name="email"
									onChange={handleChange}
									value={data.email}
									required
									className="input-box"
								/>
								<input
									type="password"
									placeholder="Password"
									name="password"
									onChange={handleChange}
									value={data.password}
									required
									className="input-box"
								/>
								{error && <div className="error_msg">{error}</div>}
								<button type="submit" className="btn-login">
									Masuk
								</button>
							</form>
							<span className='form-input-regist'>
								Belum memiliki akun? <Link to="/register"> <a>Buat Akun Baru</a></Link>
							</span>
						</div>
						<div className="rightSide-login">
							<img src={loginPic} />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Login