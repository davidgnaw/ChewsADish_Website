import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { useHistory } from 'react-router';

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const UserInfo = {email, password}

        setIsPending(true);
        fetch("http://localhost:3456/api/verify/login",{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(UserInfo)
        }).then(() => {
          setIsPending(false);
          history.push('/UserPage');
        })
    }

    return(
      <div className="CreateYourOwnRecipe">
          <br></br>
          <br></br>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
              <label>E-mail</label>
              <input
                type="string"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                required
                id="pwd"
                name="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              { !isPending && <button>Log In</button>}
              { isPending && <button disabled>loading...</button>}
          </form>
          <br></br>
          <p>
            Don't have account?
          </p>
          <Link
          to="/SignUp">
            Sign Up
          </Link>
      </div>

  )
}

export default Login;