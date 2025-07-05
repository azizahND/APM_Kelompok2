// index.js
import ReactDOM from 'react-dom/client'; // Pastikan impor ini ada dan benar
import Main from './main'; // Pastikan Main adalah komponen yang kamu render
import './index.css'; 
const root = ReactDOM.createRoot(document.getElementById("root")); // Pastikan ini tidak ada kesalahan
root.render(<Main />); // Render komponen Main
