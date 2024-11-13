// src/App.tsx
import { BrowserRouter as Router } from "react-router-dom"; //, Routes
//import Layout from "./layouts/Mainlayout";
/*import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";*/
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      {/* 
      <Layout>
        <Routes>
        </Routes>
      </Layout> 
      */}
      <Login />
    </Router>
  );
}

export default App;
