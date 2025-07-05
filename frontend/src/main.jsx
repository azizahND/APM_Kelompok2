// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app"; 
import 'preline/preline'; 

import './index.css'; // Tailwind CSS kamu masuk di sini

import 'preline/preline';

const Main = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

export default Main;  // Pastikan ada ekspor default
