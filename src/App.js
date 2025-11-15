import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Archive } from "./pages/archive";
import { Bin } from "./pages/bin";
import { Important } from "./pages/important";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/archive" element={<Archive/>}/>
      <Route path="/important" element={<Important/>}/>
      <Route path="/bin" element={<Bin/>}/>
    </Routes>
  )
}

export default App;
