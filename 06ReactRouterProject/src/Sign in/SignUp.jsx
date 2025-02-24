
import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    work: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [error, setError] = useState("");

  const countryOptions = [
    "United States", "India", "United Kingdom", "Canada", "Australia",
    "Germany", "France", "Japan", "South Korea", "China",
    "Brazil", "Mexico", "South Africa", "Italy", "Spain",
    "Netherlands", "Russia", "Saudi Arabia", "Turkey", "Sweden",
    "Argentina", "Norway", "Denmark", "Finland", "Switzerland",
    "New Zealand", "Malaysia", "Thailand", "Singapore", "Ireland",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.profession ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.otp
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Invalid email address.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError("Phone number must be between 10 digits.");
      return;
    }

    if (!/^.{8,}$/.test(formData.password)) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!/^\d{6}$/.test(formData.otp)) {
      setError("OTP must be a 6-digit number.");
      return;
    }

    alert("Signup successful!");
    // Simulating secure API call
    fetch("https://example.com/api/Signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid username or password.");
        }
        return response.json();
      })
      .then((data) => {
        alert("Signup successful!");
        console.log("User data:", data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Work</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>OTP</label>
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
