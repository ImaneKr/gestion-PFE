import InputField from "../../../components/InputField";
import styles from "../../../styles/Profile.module.css";

function AcademicInfo() {
  return (
    <>
      <h1>Academic Information</h1>
      <div className={styles.infoContainer}>
        <form className={styles.formu}>
          <InputField
            label="Teacher ID"
            type="text"
            name="teacherId"
            value="202137014478"
            placeholder="Teacher ID"
          />
          <InputField
            label="Role"
            type="text"
            name="role"
            value="Teacher"
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
            label="Grade"
            type="text"
            name="grade"
            value="Maitre assistant"
            placeholder="Grade"
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
