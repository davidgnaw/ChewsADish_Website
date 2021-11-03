import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Login = () => {
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const UserInfo = {userName, password}

        setIsPending(true);
        fetch("http://localhost:3456/api/userInfo",{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(UserInfo)
        }).then(() => {
          console.log(UserInfo)

          setIsPending(false);
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>Password</label>
              <input
                type="string"
                required
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