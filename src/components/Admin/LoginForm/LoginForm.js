import React from "react";
import './LoginForm.scss';

function LoginForm({ Login }) {
  const [details, setDetails] = React.useState({
    name: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const submitHundler = (e) => {
    e.preventDefault();
    if(details.name != 'admin' && details.password != 'admin') {
      setDetails({
        name: "",
        password: "",
      })
      setError("Введите правильный Name и Password");
    } else {
      Login(details);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={submitHundler}>
        <div className="form-inner">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;