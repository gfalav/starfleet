import React from 'react'
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material"
import { blue } from "@mui/material/colors"
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { user } from '../../recoil/recoil'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../fb/fb'
import { doc, getDoc } from 'firebase/firestore'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const User = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [usrDisplay, setUsrDisplay] = React.useState(null)
    const [usr, setUsr] = useRecoilState(user)

    async function getInitials(usuario){
        if (usuario) {

            try {
                let docRef = doc(db, 'User', usuario)
                let docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    let user = docSnap.data()
                    let initials = ''
                    if (user.name) {
                        initials = user.name.substring(0,1)
                    }
                    if (user.lastname) {
                        initials = initials + user.lastname.substring(0,1)
                    }
                    setUsrDisplay(initials)
                }        
            } catch (e) {
                console.log('Error getInitials: ', e)
            }

        } else {
            setUsrDisplay(null)
        }

    }

    auth.onAuthStateChanged( (user)=> {
        if (user) {
            setUsr(user.uid)
            getInitials(usr)
        } else {
            setUsr(null)
        }
    })


    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const SignOutClick = () => {
        setAnchorEl(null)
        setUsr(null)
        signOut(auth).then(() => {
            // logout
        }).catch((error) => {
            console.log('SignOut Error: ', error)
        })
      }

    return(
        <Box>
            <IconButton
                onClick={handleMenu}>
                <Avatar sx={{
                    bgcolor: blue[300]
                }}>
                    { usrDisplay? usrDisplay : <AccountCircleIcon />}
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ 
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                { !usr ? 
                <div>
                    <MenuItem component={Link} to='/auth/signin'>SignIn</MenuItem>
                    <MenuItem component={Link} to='/auth/signup'>SignUp</MenuItem>
                </div>
                :
                <div>
                <MenuItem component={Link} to='/auth/reset'>Reset</MenuItem>
                <MenuItem component={Link} to='/auth/signin' onClick={SignOutClick}>SignOut</MenuItem>
                </div>
                }
            </Menu>
        </Box>
    )
}

export default User