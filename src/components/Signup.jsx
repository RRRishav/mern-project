import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const {name, email, phone, work, password, confirmPassword} = formData;
    fetch("http://localhost:5000/api/register", {  // <-- add http://localhost:5000/api/register instead of "/api/register"
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
    .then((res) => res.json())
    .then((data) => console.log(data))
  };   



  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-purple-700">
        <h2 className="text-2xl font-semibold text-center mb-6 text-purple-400">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "phone", "work", "password", "confirmPassword"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-300 capitalize">
                {field === "confirmPassword" ? "Confirm Password" : field}
              </label>
              <input
                type={
                  field.includes("password")
                    ? "password"
                    : field === "email"
                    ? "email"
                    : field === "phone"
                    ? "number"
                    : "text"
                }
                name={field}
                id={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 block w-full rounded px-3 py-2 bg-gray-800 border border-purple-600 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          ))}

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
