import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileSettings from "../pages/profiles/TeacherProfile/ProfileSettings.tsx";
import AcademicInfo from "../pages/profiles/TeacherProfile/AcademicInfo.tsx";
import Password from "../pages/profiles/TeacherProfile/Password.tsx";
import ProfileMenu from "../components/ProfileMenu.tsx";

function routes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProfileMenu>
              <ProfileSettings />
            </ProfileMenu>
          }
        />
        <Route
          path="/AcademicInfo"
          element={
            <ProfileMenu>
              <AcademicInfo />
            </ProfileMenu>
          }
        />
        <Route
          path="/Password"
          element={
            <ProfileMenu>
              <Password />
            </ProfileMenu>
          }
        />
      </Routes>
    </Router>
  );
}

export default routes;
