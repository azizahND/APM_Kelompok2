import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Predict from "./pages/predict"; 
import Landing from "./pages/landing"; 
import About from "./pages/about"; 
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      {/* Toaster diletakkan di luar Routes agar global */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/deteksi" element={<Predict />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
