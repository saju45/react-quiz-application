import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRounte";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz/:id" element={<PrivateRoute />}>
              <Route path="/quiz/:id" element={<Quiz />} />
            </Route>
            <Route path="/result/:id" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
