import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Beranda from './components/Beranda/Beranda';
import Tentang from "./components/Tentang/Tentang";
import Tes from './components/Tes/Tes';
import PilihanTes from './components/PilihanTes/PilihanTes';
import HasilKiri from './components/Hasil/HasilKiri'; 
import HasilKanan from './components/Hasil/HasilKanan'; 
import Hasil from './components/Hasil/Hasil'; 
import PenjelasanKiri from './components/Penjelasan/PenjelasanKiri';
import PenjelasanKanan from './components/Penjelasan/PenjelasanKanan';
import Penjelasan from './components/Penjelasan/Penjelasan';
// import Splash from './pages/Splash';
import {useState} from 'react';
import JenisTes from './components/JenisTes/JenisTes';


function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
			{user && <Route path="/beranda" exact element={<Beranda />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/beranda" />} />

      <Route path = "/Tentang" exact element={<Tentang />} />
      <Route path = "/PilihanTes" exact element={<PilihanTes />} />
      <Route path ="/tes" exact element={<Tes />} />
        <Route path ="/hasil" exact element={<Hasil />} />
        <Route path ="/hasilKiri" exact element={<HasilKiri />} />
        <Route path ="/hasilKanan" exact element={<HasilKanan />} />
        <Route path ="/penjelasanKiri" exact element={<PenjelasanKiri />} />
        <Route path ="/penjelasanKanan" exact element={<PenjelasanKanan />} />
        <Route path ="/penjelasan" exact element={<Penjelasan />} />
        <Route path ="/jenistes" exact element={<JenisTes />} />
		</Routes>
    
  );
}

export default App;
