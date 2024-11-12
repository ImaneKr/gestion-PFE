import InputField from "../../../components/InputField";
import styles from "../../../styles/Password.module.css";

function Password() {
  return (
    <>
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
    </>
  );
}
export default Password;
