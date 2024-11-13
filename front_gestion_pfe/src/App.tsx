// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Mainlayout";
//import Dashboard from "./pages/Dashboard";
import NewProject from "./pages/NewProject";
import ProjectProposals from "./pages/Proposal";
/*import MyProject from "./pages/MyProject";
import Defense from "./pages/Defense";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";*/

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/*<Route path="/" element={<Dashboard />} />*/}
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/ProjectProposals" element={<ProjectProposals />} />
          {/*<Route path="/MyProject" element={<MyProject />} /> */}
          {/*<Route path="/Defense" element={<Defense />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Logout" element={<Logout />} />*/}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
