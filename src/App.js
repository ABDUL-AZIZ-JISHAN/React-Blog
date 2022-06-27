


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Home from './pages/Home';


function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
