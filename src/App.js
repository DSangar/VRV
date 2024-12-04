// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Layout/Home";
import About from "./components/Layout/About";
import Admin from "./components/Admin/Admin";
import DashBorad from "./components/Admin/dashborad/DashBorad";
import Users from "./components/Admin/users/Users";
import Roles from "./components/Admin/roles/Roles";
import Permissions from "./components/Admin/permissions/Permissions";
import Section1 from "./components/Layout/Section1";
import Section2 from "./components/Layout/Section2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Section1 />} />
            <Route path="section1" element={<Section1 />} />

            <Route path="about" element={<About />} />
            <Route path="section2" element={<Section2 />} />

            <Route path="admin" element={<Admin />}>
              <Route path="dashborad" element={<DashBorad />} />
              <Route path="users" element={<Users />} />
              <Route path="roles" element={<Roles />} />
              <Route path="permissions" element={<Permissions />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
