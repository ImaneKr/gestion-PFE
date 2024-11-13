// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Mainlayout";
//import Login from "../pages/Login";
//import Dashboard from "../pages/Dashboard";
import NewProject from "../pages/NewProject";
//import ProjectProposals from "../pages/Project Proposals";
//import MyProject from "../pages/MyProject";
//import Defense from "../pages/Defense";
//import Settings from "../pages/Settings";
//import Logout from "../pages/Logout";

const AppRoutes = () => (
    <Routes>
        {/* Default route to show the Login page */}
      {/*}  <Route path="/" element={<Login />} />
        {/* Protected routes inside the Layout */}
        <Route element={<Layout children={undefined}  />}>
            {/*<Route path="/dashboard" element={<Dashboard />} />*/}
            <Route path="/new-project" element={<NewProject />} />
            {/*<Route path="/project-proposals" element={<ProjectProposals />} />
            <Route path="/my-project" element={<MyProject />} />
            <Route path="/defense" element={<Defense />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />*/}
            {/* Add sub-routes as needed */}
        </Route>
    </Routes>
);

export default AppRoutes;
