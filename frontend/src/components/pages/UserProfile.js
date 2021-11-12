import React, { useState } from 'react';
import '../../App.css';
import Button from 'react-bootstrap/Button'


const UserProfile = () => {
  
  function detectChange(e){ //for text updates
    console.log(e.target.value)
  }


  //for uploading image
  const uploadedImage = React.useRef(null); 
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const [userName, setuserName] = useState(null);
  const [password, setpassword] = useState(null);
  const[isPending, setIsPending] = useState(false)
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {userName, password}

    setIsPending(true);
    fetch("http://localhost:3456/api/userInfo",{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(user)
    }).then(() => {
      console.log(user)

      setIsPending(false);
    })
}

  
  return (
    <div className='App'>
      <div className = 'profileOptions'>
        <h2> Change Settings </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className = 'profileHeaders'>
        <label> Profile Picture </label>
        </div>
        <div className = 'profilePicture'>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{
          display: "none"
        }}
      />
      <div 
        style={{
          height: "200px",
          width: "200px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "200px",
            height: "200px",
            position: "absolute"
          }}
        />
      </div>
    </div>

        <div className = 'profileHeaders'>
        <label> Username </label>
        </div>
        <div className = 'profileOptions'>
        <input type='string' value={userName} onChange={(e) => setuserName(e.target.value)}/>
        </div>
      
        <div className = 'profileHeaders'>
        <label> Password </label>
        </div>
        <div className = 'profileOptions'>
        <input type='password' value = {password} id = "pwd" name = "pwd" onChange={(e) => setpassword(e.target.value)}/> 
      </div>
s
      <div className = 'profileHeaders'>
        <label> Description </label>
        </div>
      <div className = 'profileOptions'>
        <textarea rows='2' type = 'text' onChange = {detectChange}/>
      </div>

      <div className = 'profileOptions'>
        { !isPending && <button>submit</button>}
        { isPending && <button disabled>loading...</button>}
      </div>
      </form>
    </div>
    
  );
}

export default UserProfile;