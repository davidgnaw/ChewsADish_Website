//temporary file that will replace Hero after testing is possible with the user page

import { Link } from 'react-router-dom'
import '../App.css'


const UserPageInfo = (props) => {
    const UserPageInfo = props.userInfo
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <main>
  
      {UserPageInfo.map((userInfo) => (
        <div  key = {userInfo.id}>
        <Link to={`/UserPage/${userInfo._id}`}>
            
        </Link>
    </div>  
      )) }
      </main>
    );
  }
  
  export default UserPageInfo;