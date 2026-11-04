import { Routes, Route } from 'react-router-dom';
import HomeView from './views/homeview/HomeView';
import './App.css';

function App() {
  return (
    < Routes >
      <Route path="/" element={<HomeView />} />
      <Route path="*" element={<HomeView />} />
    </Routes >
  );
}

export default App;
