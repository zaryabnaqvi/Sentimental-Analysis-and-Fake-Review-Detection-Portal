import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";

import Dashboard from "./Pages/Dashboard";

import Error404Page from "./Pages/Errors/404";
import Profile from "./Pages/Profile";
import Collections from "./Pages/Collections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accounts/sign-in" element={<SignInPage />} />
        <Route path="/accounts/sign-up" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/collections" element={<Collections />} />

        
        <Route path="/profile" element={<Profile />} />


        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
