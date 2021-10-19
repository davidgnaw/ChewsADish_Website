import React from 'react';
import '../../App.css';


function UserProfile() {
  
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
  
  return (
    <div className='App'>
      <div className = 'profileOptions'>
        <h2> Change Settings </h2>
        </div>

        
          <div className = 'profileHeaders'>
        <label> Profile Picture </label>
        </div>
        <div className = 'profileOptions'>
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
          height: "60px",
          width: "60px",
          border: "1px dashed black"
        }}
        onClick={() => imageUploader.current.click()}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "3.5%",
            height: "auto",
            position: "absolute"
          }}
        />
      </div>
    </div>

        <div className = 'profileHeaders'>
        <label> Username </label>
        </div>
        <div className = 'profileOptions'>
        <input type='text' onChange={detectChange}/>
        </div>
      
        <div className = 'profileHeaders'>
        <label> Password </label>
        </div>
        <div className = 'profileOptions'>
        <input type='text' onChange={detectChange}/>
      </div>

      <div className = 'profileHeaders'>
        <label> Description </label>
        </div>
      <div className = 'profileOptions'>
        <textarea rows='2' type = 'text' onChange = {detectChange}/>
      </div>

      <div className = 'profileOptions'>
        <button>Submit</button>
      </div>

    </div>
  );
}

export default UserProfile;