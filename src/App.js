import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Component/homePage";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import AccountPage from "./pages/accountPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
