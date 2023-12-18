"use client";
import { useState } from "react";
import Link from "../../node_modules/next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateEmail = (email) => {
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Email is already registered.";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions.";
    }
    if (Object.keys(newErrors).length === 0) {
      // Submit the form or perform further processing
      console.log("Form submitted successfully!");
    } else {
      setErrors(newErrors);
    }
  };

  const handleChanges = (e) => {
    const { name, value, tyoe, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-4 h-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-light">
          Create Your Own Free Account Now
        </h1>
        <div>
          <input
            className="bg-black p-4 rounded-lg"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChanges}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            className="bg-black p-4 rounded-lg"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChanges}
            placeholder="Password"
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <input
            className="bg-black p-4 rounded-lg"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChanges}
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <label className="flex gap-1">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChanges}
            />
            <h1 className="text-sm">Agree to terms and conditions</h1>
          </label>
          {errors.agreeToTerms && <p>{errors.agreeToTerms}</p>}
        </div>
        <button
          className="bg-gray-200 py-4 px-8 rounded-xl cursor-pointer"
          type="submit"
        >
          Submit
        </button>
        <h3>
          Already Have An Account? <Link href="/">Login</Link> Here
        </h3>
      </form>
    </>
  );
};

export default Signup;
