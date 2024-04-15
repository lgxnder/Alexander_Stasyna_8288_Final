import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import NotFound from "./components/NotFound.js"
import NobelPrizeInfo from './components/NobelPrizeInfo.js';

const App = () => {
  return (
    <div className="App">
      <h1>Alexander Stasyna (N01627582) - Final Exam</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nobel/:year" element={<NobelPrizeInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
