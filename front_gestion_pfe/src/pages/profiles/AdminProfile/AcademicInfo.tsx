import InputField from "../../../components/InputField";
import styles from "../../../styles/Profile.module.css";

function AcademicInfo() {
  return (
    <>
      <h1>Academic Information</h1>
      <div className={styles.infoContainer}>
        <form className={styles.formu}>
          <InputField
            label="Admin ID"
            type="text"
            name="AdminID"
            value="202137014478"
            placeholder="Admin ID"
          />
          <InputField
            label="Role"
            type="text"
            name="role"
            value="Admin"
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
