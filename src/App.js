import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import RoomPage from './Component/Root/RoomPage';
function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room/:roomId' element={<RoomPage />} />
    </Routes>
    </div>
  );
}

export default App;
