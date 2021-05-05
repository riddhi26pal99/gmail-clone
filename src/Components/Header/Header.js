import React from 'react'
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className= "Header">
            <div className="headerLeft">
            
                <IconButton>
                    <MenuIcon fontSize="large"/>
                </IconButton>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0DihHJVU0l_7jidXTUSIyI8TqdbFlAzlhSJfxXymwWknKKqP9fV1DEwbSnOMcDuQqHg&usqp=CAU" alt="" 
                />  

            </div> 

            <div className="headerMiddle">
                <SearchIcon/>
                <input type="text" placeholder="search" />
                <ArrowDropDownIcon className="header_input" />
            </div>

            <div className="headerRight">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <Avatar />
            </div>
        </div>
    )
}

export default Header
