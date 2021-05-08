import React from 'react'
import "./Sidebar.css"
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SideBarOptions from './SideBarOptions/SideBarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import CallIcon from '@material-ui/icons/Call';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mailSlice';


function SideBar() {
    const dispatch = useDispatch();

    return (
        <div className="SideBar">
            <Button startIcon = {<AddIcon fontSize="large" />}
                className="sidebar_compose"
                onClick = { () => dispatch(openSendMessage()) }
            >
                Compose 
            </Button>

            <SideBarOptions Icon={InboxIcon} title = "Inbox" number={54} selected={true}/>
            <SideBarOptions Icon={StarIcon} title = "Starred" number={15}/>
            <SideBarOptions Icon={WatchLaterIcon} title = "Snoozed" number={15}/>
            <SideBarOptions Icon={SendIcon} title = "Sent" number={15}/>
            <SideBarOptions Icon={InsertDriveFileIcon} title = "Draft" number={15}/>
            <SideBarOptions Icon={LabelImportantIcon} title = "Important" number={15}/>
            <SideBarOptions Icon={ArrowDropDownIcon} title = "" number=""/>

            <div className="sidebar_footer">
                <div className="sidebar_footerIcon">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default SideBar
