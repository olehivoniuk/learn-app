

import './loginForm.css'
const LoginForm = () => {
  return (
    <div className="center">
       
      <form className="login-form">
      <h1>Sign in</h1>
        <h2>Welcome back</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign in</button>
        <p>Don't have an account? <a href="#">Sign up</a></p>
        <div>
          <input type="checkbox" id="robot" name="robot" />
          <label htmlFor="robot">I am not a robot</label>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;