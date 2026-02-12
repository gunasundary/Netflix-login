import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import Fail from "./fail";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/fail" element={<Fail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

