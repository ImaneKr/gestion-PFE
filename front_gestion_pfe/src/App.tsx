// src/App.tsx
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/Mainlayout";
/*import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";*/

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
