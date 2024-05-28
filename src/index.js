import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";  // Import Navigate
import {useState} from "react";
import About from "./Pages/about";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Layout from "./Pages/layout";

export default function App() {
  const [count,setCount]=useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home count={count} setCount={setCount}/>} />
          <Route path="/about" element={<About count={count}/>} />
          <Route path="/contact" element={<Contact count={count}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



