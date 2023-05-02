import { Box } from '@mui/material'
import bg from '../../images/bg.webp'

const Home = () => {


    return(
        <Box>
            <Box component='img' src={bg} alt='bg image' sx={{ width: '100%' }} />
        </Box>
    )
}

export default Home