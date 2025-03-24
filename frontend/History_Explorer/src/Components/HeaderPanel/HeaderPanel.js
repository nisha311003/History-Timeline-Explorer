import React from 'react';
import Popover from '@mui/material/Popover';
import {Divider} from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import './HeaderPanel.css';
import logo from './Image/logo.jpeg';
let headerAvatar = "";

function HeaderPanel() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClickUser = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseUser = () => {
        setAnchorEl(null);
    };

    const openUser = Boolean(anchorEl);
    const id = openUser ? 'simple-popover' : undefined;

    const handleSignOut = async () => {

    };
  return (
        <div className="header fixed-header">
            <div className="header-menu">
                <div className="left-content">
                <div className="history-logo">
                       <img src = {logo} width={140} height={40} alt='logo'/>
                   </div>
                    <div className="app-name">
                         | History Explorer
                    </div>
                </div>

                <div className="right-content">
                    {/* <div className='hometab'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div> */}
                    
                    <div className="user-profile">
                        <Button onClick={handleClickUser}>
                            <Avatar alt=" Layout Header Avatar" src={headerAvatar} />
                        </Button>
                        <Popover
                            id={id}
                            open={openUser}
                            anchorEl={anchorEl}
                            onClose={handleCloseUser}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            sx={{ mt: 1, ml: 2}}
                        >
                            <Typography sx={{ p: 0}}>
                                <div className="content">
                                    <div className="profilePic">
                                        <Avatar alt=" Layout Header Avatar" src={headerAvatar} />
                                    </div>
                                    <ul>
                                        <li className="info">
                                            <p>
                                                <b><span>Isha Agrawal</span></b>
                                                <br/>
                                                <i><span>ishaagrawal1724@gmail.com</span></i>
                                            </p>

                                        </li>
                                        <Divider horizontal ></Divider>
                                        <span className="k-appbar-separator" />
                                        <li className="signOut">
                                            <button onClick={handleSignOut}><span >Sign Out</span></button>
                                        </li>
                                    </ul>
                                </div>
                            </Typography>
                        </Popover>
                    </div>
                </div>
            </div>
    </div>
  )
}
export default HeaderPanel;