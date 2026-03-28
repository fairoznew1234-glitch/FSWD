import { useState } from "react";
import "./App.css";

function Sign() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(value)) {
      setEmailError("Invalid Email Format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(value)) {
      setPasswordError("Include at least one uppercase letter");
    } else if (!/[0-9]/.test(value)) {
      setPasswordError("Include at least one number");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailError && !passwordError && email && password) {
      alert("Signup Successful");
    } else {
      alert("Please fix errors before submitting");
    }
  };

  return (
    <div className="container">
      <h2>Smart Signup Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />

        {emailError && <p className="error">{emailError}</p>}

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />

        {passwordError && <p className="error">{passwordError}</p>}

        <button type="submit">Signup</button>

      </form>
    </div>
  );
}

export default Sign;