import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favoris" element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
