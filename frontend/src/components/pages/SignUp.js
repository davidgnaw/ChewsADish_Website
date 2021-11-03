import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Signup = () => {
    const[email, setEmail] = useState("");
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = {userName, email, password}

        setIsPending(true);
        fetch("http://localhost:3456/api/userInfo",{
          method:"POST",
          headers:{"Content-Type": "application/json"},
          body:JSON.stringify(userInfo)
        }).then(() => {
          console.log(userInfo)

          setIsPending(false);
        })
    }

    return(
      <div className="CreateYourOwnRecipe">
          <br></br>
          <br></br>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
              <label>E-mail</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>UserName</label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                id="pwd"
                name="pwd"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              { !isPending && <button>submit</button>}
              { isPending && <button disabled>loading...</button>}
          </form>
          <br></br>
          <p>
            Already have account?
          </p>
          <Link
          to="/Login">
            Log In
          </Link>
      </div>

  )
}

export default Signup;