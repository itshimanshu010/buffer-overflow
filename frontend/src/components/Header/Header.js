 import React from 'react'
 import './css/Header.css'
 import backimg from "../../assets/logo.png"
 import SearchIcon from "@mui/icons-material/Search";

 import { Link} from 'react-router-dom'
 import AllInboxIcon from '@mui/icons-material/AllInbox';
 import { Avatar } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
 

 function Header() {
  const user = useSelector(selectUser);
  // console.log(user);
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
      },
      children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

   return (
     <header>
      <div className="header-container">
        <div className="header-left">
            <Link to ="/"><img
              src={backimg}
              alt="logo" className='immg'
            /></Link>
            
          
          <Link to="/about"><h3 className='hel'>About</h3></Link>
        
          
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
           <Avatar src='.user?.photo' style={{
                cursor: "pointer",
              }}
              {...stringAvatar(user && user.displayName)}
              onClick={() => 
              auth.signOut()} />
            <AllInboxIcon />
          </div>
        </div>
      </div>
     </header>
   )
 }
  
 export default Header