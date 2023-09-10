import React, { useState } from "react";

function AdvancedValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  //   Validation functions
  function validateName(name) {
    if (!name) {
      return "Name is required";
    }
    // Additional validation logic if needed
    return "";
  }

  function validateEmail(email) {
    if (!email) {
      return "Email is required";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }
    return "";
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // Validate the current field
    validateField(name, value);
  }

  function validateField(fieldName, value) {
    switch (fieldName) {
      case "name":
        setErrors({ ...errors, name: validateName(value) });
        break;
      case "email":
        setErrors({ ...errors, email: validateEmail(value) });
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validate all fields before submission
    validateField("name", formData.name);
    validateField("email", formData.email);

    // Check if there are any errors
    if (!errors.name && !errors.email) {
      // Perform form submission
      console.log("Form submitted with data:", formData);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <div className="error">{errors.name}</div>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <div className="error">{errors.email}</div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AdvancedValidation;
