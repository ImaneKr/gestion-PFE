import InputField from "../../../components/InputField";
import styles from "../../../styles/Profile.module.css";

function AcademicInfo() {
  return (
    <>
      <h1>Academic Information</h1>
      <div className={styles.infoContainer}>
        <form className={styles.formu}>
          <InputField
            label="Company ID"
            type="text"
            name="companyId"
            value="202137014478"
            placeholder="Company ID"
          />
          <InputField
            label="Role"
            type="text"
            name="role"
            value="Company"
            placeholder="Role"
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
    </>
  );
}
export default AcademicInfo;
