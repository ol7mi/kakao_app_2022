import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Chatting from './routes/Chatting';
import Profile from './routes/Profile';
import './App.scss';

function App() {
  return (
    //Route 주소창의 주소가 바뀔때마다 불러오는 spa구조
    //Route 에서 사용하는 건 Routes 폴더에 넣어준다.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/find" element={<Find />} />
        <Route path="/more" element={<More />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
