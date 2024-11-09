import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileSettings from "../pages/profiles/StudentProfile/ProfileSettings.tsx";
import AcademicInfo from "../pages/profiles/StudentProfile/AcademicInfo.tsx";
import Password from "../pages/profiles/StudentProfile/Password.tsx";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSettings />} />
        <Route path="/AcademicInfo" element={<AcademicInfo />} />
        <Route path="/Password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default routes;
