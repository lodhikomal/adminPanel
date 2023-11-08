import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import AdminPlanner from "./component/AdminPlanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./component/Movie";
import Category from "./component/Category";
import Layout from "./component/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AdminPlanner /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
