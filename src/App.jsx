import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Model from './components/Model/Model';
import Video1 from './components/Video1/video1';
import Video2 from './components/Video2/video2';
import Login from './components/Login/Login';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/model" element={<Model />} />
            <Route path="/videoone" element={<Video1 />} />
            <Route path="/videotwo" element={<Video2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
