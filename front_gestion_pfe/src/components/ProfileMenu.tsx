import { NavLink } from "react-router-dom";
import styles from "../styles/Profile.module.css";
import { ReactNode } from "react";
interface ProfileMenuProps {
  children: ReactNode;
}

function ProfileMenu({ children }: ProfileMenuProps) {
  return (
    <div className={styles.main}>
      <div className={styles.pagePath}>
        <a href="">Home</a>
        <p>{">"}</p>
        <a href="">Profile</a>
      </div>
      <h1>Profile Settings</h1>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.section1}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  <i className={styles.icon}>😒</i> Profile Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Password"
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  <i className={styles.icon}>🔒</i> Password
                </NavLink>
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
          <div className={styles.section2}>{children}</div>
        </div>
      </div>
    </div>
  );
}
export default ProfileMenu;
