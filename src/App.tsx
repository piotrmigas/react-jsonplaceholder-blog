import './App.css';
import Home from './pages/home';
import User from './pages/user';
import Post from './pages/post';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/:userId' element={<User />} />
      <Route path='/user/:userId/:postId' element={<Post />} />
    </Routes>
  );
}

export default App;
