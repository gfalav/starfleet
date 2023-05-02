import React from "react"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ListIcon from '@mui/icons-material/List'
import { Link } from "react-router-dom"

const SideArea = () => {

    const [expanded, setExpanded] = React.useState('closed')

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null)
    }


    return(

        <Box sx={{
            mt: 3
        }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ bgcolor: '#233044' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FolderOpenIcon sx={{ mr: 1.5, color: '#878D96' }} />
                    <Typography color='#ffffff'>
                        Projects
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ml: 1.5, bgcolor: '#233044' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        <ListIcon sx={{ mr: 1.5, color: '#878D96' }}/>
                        <Typography color='#ffffff'>
                            Projects List
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ bgcolor: '#233044' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FolderOpenIcon sx={{ mr: 1.5, color: '#878D96' }} />
                    <Typography color='#ffffff'>
                        Resources
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ml: 1.5, bgcolor: '#233044' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        <ListIcon sx={{ mr: 1.5, color: '#878D96' }}/>
                        <Typography color='#ffffff'>
                            Subpanel 1
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ bgcolor: '#233044' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FolderOpenIcon sx={{ mr: 1.5, color: '#878D96' }} />
                    <Typography color='#ffffff'>
                        Calendar
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ml: 1.5, bgcolor: '#233044' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        <ListIcon sx={{ mr: 1.5, color: '#878D96' }}/>
                        <Typography color='#ffffff'>
                            Subpanel 1
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ bgcolor: '#233044' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FolderOpenIcon sx={{ mr: 1.5, color: '#878D96' }} />
                    <Typography color='#ffffff'>
                        Messages
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ml: 1.5, bgcolor: '#233044' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                        <ListIcon sx={{ mr: 1.5, color: '#878D96' }}/>
                        <Typography color='#ffffff'>
                            Subpanel 1
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{ bgcolor: '#233044' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <FolderOpenIcon sx={{ mr: 1.5, color: '#878D96' }} />
                    <Typography color='#ffffff'>
                        Routes
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ml: 1.5, bgcolor: '#233044' }}>
                    <Button component={Link} to='/flespi'>
                        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                            <ListIcon sx={{ mr: 1.5, color: '#878D96' }}/>
                            <Typography color='#ffffff'>
                                Mobile GPS
                            </Typography>
                        </Box>
                    </Button>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default SideArea