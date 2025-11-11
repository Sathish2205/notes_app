import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Archive } from "./pages/archive";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/archive" element={<Archive/>}/>
    </Routes>
  )
}

export default App;
