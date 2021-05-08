import { IconButton } from '@material-ui/core';
import React from 'react'
import './Mail.css';
import { useHistory } from 'react-router';

//icons 
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PrintIcon from '@material-ui/icons/Print';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function Mail() {

    const history = useHistory()

    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton onClick ={ () => history.push("/") }> 
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                        <ReportIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MarkunreadMailboxIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="mail_toolsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>

            <div className="mail_body">
                <div className="mail_bodyHeader">

                    <div className="mail_headerLeft">
                        <h2>Subject</h2>
                        <LabelImportantIcon className="mail_important" />
                        <p>Title</p>
                        <p className="message_time">10pm</p>
                    </div>

                    <div className="mail_headerRight">
                        <IconButton>
                            <UnfoldMoreIcon />
                        </IconButton>
                        <IconButton>
                            <PrintIcon />
                        </IconButton>
                        <IconButton>
                            <OpenInNewIcon />
                        </IconButton>
                    </div>

                </div>

                <div className="mail_message">
                    <p>
                        this is the mail message
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Mail
