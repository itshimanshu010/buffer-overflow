import React from 'react'
import {Public,  Work } from '@mui/icons-material'
import GroupsIcon from '@mui/icons-material/Groups';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import TagIcon from '@mui/icons-material/Tag';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import GavelIcon from '@mui/icons-material/Gavel';


import { Link } from 'react-router-dom';
import './css/Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-container'>
            <div className='sidebar-options'>
                <div className='sidebar-option'>
                <div className='link'>
                <div className='link-tag'>
                    <OtherHousesIcon />
                    <Link>Home</Link>
                    </div>
                    </div>
                </div>
                <div className='sidebar-option'>
                    <p><b>COMMUNITY</b></p>
                    <div className='link'>
                        <div className='link-tag'>
                                <Public />
                                <Link to ="/">Questions</Link>

                        </div>
                        <div className='link-tag'>
                                <TagIcon />
                                <Link>Tags</Link>

                        </div>
                        <div className='link-tag'>
                                <AccountBoxIcon />
                                <Link>Users</Link>

                        </div>
                        
                    </div>
                </div>
                    <div className='sidebar-option'>
                        <p><b>COLLABORATIVES</b></p>
                     <div className='link'>
                        <div className='link-tag'>
                                <GolfCourseIcon />
                                <Link>Discovery</Link>

                        </div>

                        <div className='link-tag'>
                                <GroupsIcon />
                                <Link>Community Hub</Link>

                        </div>
                     
                    </div>
                    </div>

                    <div className='sidebar-option'>
                        <p><b>FIND A JOB</b></p>
                    <div className='link'>
                        <div className='link-tag'>
                               <Work />
                                <Link>Companies</Link>

                        </div>
                        
                    </div>
                    </div>

                    <div className='sidebar-option'>
                        <p><b>OTHERS</b></p>
                        <div className='link'>
                        <div className='link-tag'>
                                <PrivacyTipIcon  />
                                <Link>Privacy Terms</Link>

                        </div>

                        <div className='link-tag'>
                                <GavelIcon />
                                <Link>Useful Guidelines</Link>

                        </div>
                     
                        </div>
                        
                    </div>
                    <br/>
                    <div className='option'>
                        <p><b>BufferOverflow</b>,a "constructive" social network for developers. Because who needs bug-free code? With you on every coding detour.<br/><br/> Made with "❤️"</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar