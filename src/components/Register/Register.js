import './Register.css';
import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginPic from '../Pic/arahinLogo.png';

const Register = () => {
	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
    <div className='register-container'>
			<div className="register-form-container">
				<div className='register-left'>
					<img src={loginPic} />
				</div>
				<div className='register-right'>
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Selamat Datang</h1>
                		<p>Masuk untuk menggunakan aplikasi</p>
						<input
							type="text"
							placeholder="Nama Pengguna"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className="input-box"
						/>
						{/* <input
							type="text"
							placeholder="Nama Sekolah"
							name="namaSekolah"
							onChange={handleChange}
							value={data.namaSekolah}
							required
							className="input-box"
						/> */}
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
						<button type="submit" className="btn-register">
							Daftar
						</button>
					</form>
					<span className='form-input-login'>
                    Sudah memiliki akun? <Link to="/login"> <a>Masuk</a></Link>
                </span>
				</div>
			</div>
		</div>
  )
}

export default Register