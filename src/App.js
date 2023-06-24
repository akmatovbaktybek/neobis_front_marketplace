import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Login />}></Route>
         <Route path="/signup" element={<SignUp />}></Route>
         <Route path="/profile" element={<Profile />}></Route>
      </Routes>
   );
}

export default App;
