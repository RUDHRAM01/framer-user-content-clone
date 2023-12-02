import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:before': {
        display: 'none',
    },
   
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        // expandIcon={}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? '#f7f8fd'
            : '#f7f8fd',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    borderRadius: '10px',
    padding: "10px",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export default function Accordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div style={{display:"flex",flexDirection:"column",gap:"16px",textAlign:"start"}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography variant='h5' fontWeight="600">What is ManageWise and what does it offer?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor:"#f7f8fd"}}>
                    <Typography >
                        Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success.
                        It offers a range of features including task management, scheduling, communication tools, analytics, and more.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography variant='h5' fontWeight="600">Is ManageWise suitable for small businesses and larger enterprises alike?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor:"#f7f8fd"}}>
                    <Typography >
                        Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options
                        make it versatile for various business sizes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography variant='h5' fontWeight="600">Can I access ManageWise from different devices and platforms?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor:"#f7f8fd"}}>
                    <Typography >
                        Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and
                        mobile devices.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography variant='h5' fontWeight="600">What kind of support options do you offer to users?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor:"#f7f8fd"}}>
                    <Typography >
                        We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage
                        Wise.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography variant='h5' fontWeight="600">How secure is the data stored within Manage Wise?</Typography>
                </AccordionSummary>
                <AccordionDetails style={{backgroundColor:"#f7f8fd"}}>
                    <Typography  fontWeight="600">
                        Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive
                        information is safe and protected.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
