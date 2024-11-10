import InputField from "../../../components/InputField";
import { Link, NavLink } from "react-router-dom";
import styles from "../../../styles/Profile.module.css";

function AcademicInfo() {
  return (
    <div className={styles.main}>
      <div className={styles.pagePath}>
        <a href="">Home</a>
        <p>{">"}</p>
        <a href="">Profile</a>
      </div>
      <h1>Academic Information</h1>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.section1}>
            <ul>
              <li>
                <Link to="/" className={styles.link}>
                  <i className={styles.icon}>😒</i> Profile Settings
                </Link>
              </li>
              <li>
                <Link to="/Password" className={styles.link}>
                  <i className={styles.icon}>🔒</i> Password
                </Link>
              </li>
              <li>
                <NavLink
                  to="/AcademicInfo"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  <i className={styles.icon}>🔗</i> Academic Information
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.section2}>
            <div className={styles.infoContainer}>
              <form className={styles.formu}>
                <InputField
                  label="Student ID"
                  type="text"
                  name="studentId"
                  value="202137014478"
                  placeholder="Student ID"
                />
                <InputField
                  label="Role"
                  type="text"
                  name="role"
                  value="Student"
                  placeholder="Role"
                />
                <InputField
                  label="Faculty and Departement"
                  type="text"
                  name="facultyAndDepartement"
                  value="Science faculty"
                  placeholder="Faculty and Departement"
                />
                <InputField
                  label="Program"
                  type="text"
                  name="program"
                  value="Master Program"
                  placeholder="Program"
                />
                <InputField
                  label="Degree Specialization"
                  type="text"
                  name="degreeSpecialization"
                  value="Software Engineering"
                  placeholder="Degree Specialization"
                />
                <InputField
                  label="Academic Year"
                  type="text"
                  name="academicYear"
                  value="2nd year Master's"
                  placeholder="Academic Year"
                />
                <InputField
                  label="Enrollment Date"
                  type="date"
                  name="enrollmentDate"
                  value="24/09/2024"
                  placeholder="Enrollment Date"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AcademicInfo;
