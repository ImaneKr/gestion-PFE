import InputField from "../../../components/InputField";
import { Link } from "react-router-dom";
import styles from "../../../styles/Password.module.css";

function Password() {
  return (
    <div className={styles.main}>
      <h1>Password</h1>
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
                <Link to="/AcademicInfo" className={styles.link}>
                  <i className={styles.icon}>🔗</i> Academic Information
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.section2}>
            <h1>Change Password</h1>
            <div className={styles.infoContainer}>
              <form className={styles.formu}>
                <InputField
                  label="Current Password"
                  type="text"
                  name="currentPassword"
                  value="202137014478"
                  placeholder="Current Password"
                />
                <InputField
                  label="New Password"
                  type="text"
                  name="newPassword"
                  value="someRandomPass"
                  placeholder="New Password"
                />
                <InputField
                  label="Confirm Password"
                  type="text"
                  name="confirmPassword"
                  value=""
                  placeholder="Re-type new Password"
                />
                <div className={styles.buttons}>
                  <button type="button" className={styles.cancel}>
                    Cancel
                  </button>
                  <button type="submit" className={styles.save}>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Password;
