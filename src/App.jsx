import { useState } from 'react'

import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if(!email.trim() || !password) {
      setMessage("Please enter your email and password");
      return;
    }
    setMessage("Login submitted successfully");
  }

  return (
    <main className="page">
      <section className="login-card">

        <h1>Welcome Back</h1>
        <p className="subtitle">Log in to your account</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="forgot">
            <a href="#forgot" onClick={(e) => {
              e.preventDefault();
              setMessage("Password recovery is not configured yet.");
            }}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {message && <p className="message" role="status">{message}</p>}

        <p className="signup">
          Don't have an account?{" "}
          <a
            href="#signup"
            onClick={(e) => {
              e.preventDefault();
              setMessage("Sign-up page is not configured yet.");
            }}
          >
            Sign up
          </a>
        </p>
      </section>
    </main>
  );
}

export default App
