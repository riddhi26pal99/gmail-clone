import React from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase.config';

//icons
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {

    const user =  useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then( () => {
            dispatch(logout());
        })
    }

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

                <Avatar src={user?.photoUrl} onClick={ signOut }/>
            </div>
        </div>
    )
}

export default Header
