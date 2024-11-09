import React from "react";
import "../styles/InputField.css";

const InputField: React.FC<{
  label: string;
  type: string;
  name: string;
  value: string;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}> = ({ label, type, name, value, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        // onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
