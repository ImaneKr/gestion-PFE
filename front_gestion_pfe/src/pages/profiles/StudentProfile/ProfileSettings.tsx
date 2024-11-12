import styles from "../../../styles/Profile.module.css";
import pfp from "../../../assets/pfp.png";
import InputField from "../../../components/InputField";
function ProfileSettings() {
  return (
    <>
      <div className={styles.profileContainer}>
        <div className={styles.ProfilePicture}>
          <img src={pfp} alt="Profile Picture" />
        </div>
        <div className={styles.info}>
          <h2>Ahlam Kabbas</h2>
          <p className={styles.role}>Student</p>
          <div className={styles.buttons}>
            <button className={styles.upload}>Upload New</button>
            <button className={styles.delete}>Delete</button>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <form className={styles.formu}>
          <InputField
            label="First Name"
            type="text"
            name="firstname"
            value="Ahlam"
            placeholder="First Name"
          />
          <InputField
            label="Last Name"
            type="text"
            name="lastname"
            value="kabbas"
            placeholder="Last Name"
          />
          <InputField
            label="Phone Number"
            type="text"
            name="phonenumber"
            value="+213 74-54..."
            placeholder="Phone Number"
          />
          <InputField
            label="Email Address"
            type="text"
            name="emailaddress"
            value="Ahlam@gmail.com"
            placeholder="Email Address"
          />
          <InputField
            label="Date Of Birth"
            type="date"
            name="dateofbirth"
            value="07/10/2003"
            placeholder="Date Of Birth"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value="07/10/2003"
            placeholder="password"
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
export default ProfileSettings;
