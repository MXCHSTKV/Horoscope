import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import Horoscope from './pages/Horoscope';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/Horoscope" element={<Horoscope />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

