"use client";
import { useState } from "react";
import Link from "../../node_modules/next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateCredentials = () => {
    const newErrors = {};

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateCredentials();

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
        <button
          className="bg-gray-200 py-4 px-8 rounded-xl cursor-pointer"
          type="submit"
        >
          Submit
        </button>
        <h3>
          Don't Have An Account? <Link href="/">Sign Up</Link> Here
        </h3>
      </form>
    </>
  );
};

export default Login;
