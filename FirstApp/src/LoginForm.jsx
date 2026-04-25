import { useState } from "react";
// import "./styles.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Clicked ✅");
    console.log(formData);
  };

  // Navigate to signup (simple method)
  const goToSignup = () => {
    window.location.href = "/SignupForm"; // change route if needed
  };

  return (
    <div className="container">
      <h2 className="title">Login Form</h2>

      <form onSubmit={handleLogin} className="form">

        {/* Email */}
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Login Button */}
        <button type="submit" className="btn">
          Login
        </button>
      </form>

      {/* Go to Signup */}
      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Don't have an account?
      </p>

      <button onClick={goToSignup} className="btn" style={{ marginTop: "10px" }}>
        Go to Signup
      </button>
    </div>
  );
}
