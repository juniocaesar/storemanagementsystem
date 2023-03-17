import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import ResponsiveAppBar from './views/components/Appbar';
// import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResponsiveAppBar/>} />
      </Routes>
    </Router>
  );
}
