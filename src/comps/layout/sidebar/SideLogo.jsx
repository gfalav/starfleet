import { Box } from "@mui/material"
import logo from '../../../images/CGS TeamOne logo.png'
import { Link } from "react-router-dom"

const SideLogo = () => {

    return(

        <Box 
            component={Link} to='/'
            sx={{
                display: 'flex', alignItems: 'center', justifyContent: "center"
            }}>
                <Box component='img'
                    src={logo}
                    alt="logo"
                    sx={{
                        height: 66
                    }} />
        </Box>
    )
}

export default SideLogo