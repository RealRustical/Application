import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="/" element={<HomePage />} /> {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
}

function TestPage() {
  return <h1>hi</h1>;
}

function HomePage() {
  return <h1>Home</h1>;
}


export default App
