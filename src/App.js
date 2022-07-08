import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Beranda from './components/Beranda/Beranda';
import Tentang from "./components/Tentang/Tentang";
import TesKuliah from './components/TesKuliah/TesKuliah';
import TesGayaBelajar from './components/TesGayaBelajar/TesGayaBelajar';
import TesSMA from './components/TesSMA/TesSMA';
import PilihanTes from './components/PilihanTes/PilihanTes';
import HasilTesKuliah from './components/HasilTesKuliah/HasilTesKuliah';
import Penjelasan from './components/Penjelasan/Penjelasan';
import JenisTes from './components/JenisTes/JenisTes';
import NotFound from './components/NotFound';
import HasilTesGayaBelajar from './components/HasilTesGayaBelajar/HasilTesGayaBelajar';
import HasilTesSMA from './components/HasilTesSMA/HasilTesSMA';
import PenjelasanTes from './components/PenjelasanJenisTes/PenjelasanTes';
import PenjelasanGayaBelajar from './components/PenjelasanGayaBelajar/PenjelasanGayaBelajar';
import PenjelasanSMA from './components/PenjelasanSMA/PenjelasanSMA';
import PenjelasanKuliah from './components/PenjelasanKuliah/PenjelasanKuliah';
import TestingDeh from './components/Testing/TestingDeh';

//fonts
import './assets/fonts/RoseknightRegular-8ML5A.woff';
import './assets/fonts/Sen-Regular.woff';
import './assets/fonts/Sen-Bold.woff';
import './assets/fonts/Sen-ExtraBold.woff';
import './assets/fonts/PlayfairDisplay-Regular.woff';
import './assets/fonts/PlayfairDisplay-Italic.woff';
import './assets/fonts/PlayfairDisplay-Bold.woff';
import './assets/fonts/PlayfairDisplay-BoldItalic.woff';
import './assets/fonts/PlayfairDisplay-Black.woff';
import './assets/fonts/PlayfairDisplay-BlackItalic.woff';
import './assets/fonts/PlayfairDisplaySC-Regular.woff';
import './assets/fonts/PlayfairDisplaySC-Italic.woff';
import './assets/fonts/PlayfairDisplaySC-Bold.woff';
import './assets/fonts/PlayfairDisplaySC-BoldItalic.woff';
import './assets/fonts/PlayfairDisplaySC-Black.woff';
import './assets/fonts/PlayfairDisplaySC-BlackItalic.woff';
import './assets/fonts/Adine-Kirnberg.ttf';


function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      {user == null ? (null) : (
        <>
          <Route path="/beranda" exact element={<Beranda />} />
          <Route path="/Tentang" exact element={<Tentang />} />
          <Route path="/PilihanTes" exact element={<PilihanTes />} />
          <Route path="/tesKuliah" exact element={<TesKuliah />} />
          <Route path="/tesSMA" exact element={<TesSMA />} />
          <Route path="/tesGayaBelajar" exact element={<TesGayaBelajar />} />
          <Route path="/hasilSMA" exact element={<HasilTesSMA />} />
          <Route path="/hasilKuliah" exact element={<HasilTesKuliah />} />
          <Route path="/hasilGayaBelajar" exact element={<HasilTesGayaBelajar />} />
          <Route path="/penjelasan" exact element={<Penjelasan />} />
          <Route path="/jenistes" exact element={<JenisTes />} />
          <Route path="/penjelasantes" exact element={<PenjelasanTes />} />
          <Route path="/penjelasanGayaBelajar" exact element={<PenjelasanGayaBelajar />} />
          <Route path="/penjelasanSMA" exact element={<PenjelasanSMA />} />
          <Route path="/penjelasanKuliah" exact element={<PenjelasanKuliah />} />
          <Route path="/testing" exact element={<TestingDeh />} />
        </>
      )}
      <Route path="*" exact element={<NotFound />}/>
    </Routes>

  );
}

export default App;
